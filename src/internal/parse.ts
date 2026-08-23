// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { FinalRequestOptions } from './request-options';
import { type Growsurf } from '../client';
import { APIConnectionTimeoutError } from '../core/error';
import { formatRequestDetails, loggerFor } from './utils/log';

export type APIResponseProps = {
  response: Response;
  options: FinalRequestOptions;
  controller: AbortController;
  requestLogID: string;
  retryOfRequestLogID: string | undefined;
  startTime: number;
};

/** Reads a response body without allowing the request deadline to expire. */
export async function readResponseBody<T>(
  client: Growsurf,
  props: APIResponseProps,
  reader: (response: Response) => Promise<T>,
): Promise<T> {
  const { response, startTime } = props;
  const timeoutMs = props.options.timeout ?? client.timeout;
  const remainingTimeoutMs = Math.max(0, timeoutMs - (Date.now() - startTime));
  const abort = () => {
    props.controller.abort();
    void response.body?.cancel().catch(() => undefined);
  };
  if (remainingTimeoutMs <= 0) {
    abort();
    throw new APIConnectionTimeoutError();
  }

  let bodyTimeout: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    bodyTimeout = setTimeout(() => {
      abort();
      reject(new APIConnectionTimeoutError());
    }, remainingTimeoutMs);
  });

  return Promise.race([reader(response), timeoutPromise]).finally(() => clearTimeout(bodyTimeout));
}

export async function defaultParseResponse<T>(client: Growsurf, props: APIResponseProps): Promise<T> {
  const { response, requestLogID, retryOfRequestLogID, startTime } = props;
  const body = await readResponseBody(client, props, async (response) => {
    // fetch refuses to read the body when the status code is 204.
    if (response.status === 204) {
      return null as T;
    }

    if (props.options.__binaryResponse) {
      return response as unknown as T;
    }

    const contentType = response.headers.get('content-type');
    const mediaType = contentType?.split(';')[0]?.trim();
    const isJSON = mediaType?.includes('application/json') || mediaType?.endsWith('+json');
    if (isJSON) {
      const contentLength = response.headers.get('content-length');
      if (contentLength === '0') {
        // if there is no content we can't do anything
        return undefined as T;
      }

      const json = await response.json();
      return json as T;
    }

    const text = await response.text();
    return text as unknown as T;
  });
  loggerFor(client).debug(
    `[${requestLogID}] response parsed`,
    formatRequestDetails({
      retryOfRequestLogID,
      url: response.url,
      status: response.status,
      body,
      durationMs: Date.now() - startTime,
    }),
  );
  return body;
}
