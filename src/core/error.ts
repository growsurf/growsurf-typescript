// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { castToError } from '../internal/errors';

const isRecord = (value: unknown): value is Record<string, unknown> =>
  value != null && typeof value === 'object' && !Array.isArray(value);

const stringOrNull = (value: unknown): string | null => (typeof value === 'string' ? value : null);

const recordListOrNull = (value: unknown): Array<Record<string, unknown>> | null =>
  Array.isArray(value) && value.every(isRecord) ? value : null;

const stringListOrNull = (value: unknown): Array<string> | null =>
  Array.isArray(value) && value.every((item) => typeof item === 'string') ? value : null;

export class GrowsurfError extends Error {}

export class APIError<
  TStatus extends number | undefined = number | undefined,
  THeaders extends Headers | undefined = Headers | undefined,
  TError extends Object | undefined = Object | undefined,
> extends GrowsurfError {
  /** HTTP status for the response that caused the error */
  readonly status: TStatus;
  /** HTTP headers for the response that caused the error */
  readonly headers: THeaders;
  /** JSON body of the response that caused the error */
  readonly error: TError;

  // Documented error-body fields. Each is `null` when the body omits it or sends another type;
  // `error` keeps the complete body, including fields added later.
  /** Error name returned for the failed request. */
  readonly errorName: string | null;
  /** Stable machine-readable error code. */
  readonly errorCode: string | null;
  /** Human-readable error message. */
  readonly errorMessage: string | null;
  /** Optional validation details for specific request fields. */
  readonly errors: Array<Record<string, unknown>> | null;
  /** Support URL related to the error, when available. */
  readonly supportUrl: string | null;
  /** Rate-limit policy name for `429` errors, when available. */
  readonly policyName: string | null;
  /** Error severity level, when available. */
  readonly level: string | null;
  /** When the error response was created. */
  readonly timestamp: string | null;
  /** Fraud risk level assigned to the blocked signup. */
  readonly fraudRiskLevel: string | null;
  /** Machine-readable reason code for the fraud decision. */
  readonly fraudReasonCode: string | null;
  /** Existing participant IDs related to the fraud match. */
  readonly matchedParticipantIds: Array<string> | null;
  /** Email address from the blocked signup attempt. */
  readonly email: string | null;
  /** Referrer participant ID supplied with the blocked signup, or `null`. */
  readonly referrerId: string | null;
  /** IP address supplied with the blocked signup, or `null`. */
  readonly ipAddress: string | null;
  /** Browser fingerprint supplied with the blocked signup, or `null`. */
  readonly fingerprint: string | null;
  /** When the signup was blocked. */
  readonly blockedAt: string | null;

  constructor(status: TStatus, error: TError, message: string | undefined, headers: THeaders) {
    super(`${APIError.makeMessage(status, error, message)}`);
    this.status = status;
    this.headers = headers;
    this.error = error;

    const body: Record<string, unknown> = isRecord(error) ? error : {};
    this.errorName = stringOrNull(body['name']);
    this.errorCode = stringOrNull(body['code']);
    this.errorMessage = stringOrNull(body['message']);
    this.errors = recordListOrNull(body['errors']);
    this.supportUrl = stringOrNull(body['supportUrl']);
    this.policyName = stringOrNull(body['policyName']);
    this.level = stringOrNull(body['level']);
    this.timestamp = stringOrNull(body['timestamp']);
    this.fraudRiskLevel = stringOrNull(body['fraudRiskLevel']);
    this.fraudReasonCode = stringOrNull(body['fraudReasonCode']);
    this.matchedParticipantIds = stringListOrNull(body['matchedParticipantIds']);
    this.email = stringOrNull(body['email']);
    this.referrerId = stringOrNull(body['referrerId']);
    this.ipAddress = stringOrNull(body['ipAddress']);
    this.fingerprint = stringOrNull(body['fingerprint']);
    this.blockedAt = stringOrNull(body['blockedAt']);
  }

  private static makeMessage(status: number | undefined, error: any, message: string | undefined) {
    const msg =
      error?.message ?
        typeof error.message === 'string' ?
          error.message
        : JSON.stringify(error.message)
      : error ? JSON.stringify(error)
      : message;

    if (status && msg) {
      return `${status} ${msg}`;
    }
    if (status) {
      return `${status} status code (no body)`;
    }
    if (msg) {
      return msg;
    }
    return '(no status code or body)';
  }

  static generate(
    status: number | undefined,
    errorResponse: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ): APIError {
    if (!status || !headers) {
      return new APIConnectionError({ message, cause: castToError(errorResponse) });
    }

    const error = errorResponse as Record<string, any>;

    if (status === 400) {
      return new BadRequestError(status, error, message, headers);
    }

    if (status === 401) {
      return new AuthenticationError(status, error, message, headers);
    }

    if (status === 403) {
      return new PermissionDeniedError(status, error, message, headers);
    }

    if (status === 404) {
      return new NotFoundError(status, error, message, headers);
    }

    if (status === 409) {
      return new ConflictError(status, error, message, headers);
    }

    if (status === 422) {
      return new UnprocessableEntityError(status, error, message, headers);
    }

    if (status === 429) {
      return new RateLimitError(status, error, message, headers);
    }

    if (status >= 500) {
      return new InternalServerError(status, error, message, headers);
    }

    return new APIError(status, error, message, headers);
  }
}

export class APIUserAbortError extends APIError<undefined, undefined, undefined> {
  constructor({ message }: { message?: string } = {}) {
    super(undefined, undefined, message || 'Request was aborted.', undefined);
  }
}

export class APIConnectionError extends APIError<undefined, undefined, undefined> {
  constructor({ message, cause }: { message?: string | undefined; cause?: Error | undefined }) {
    super(undefined, undefined, message || 'Connection error.', undefined);
    // in some environments the 'cause' property is already declared
    // @ts-ignore
    if (cause) this.cause = cause;
  }
}

export class APIConnectionTimeoutError extends APIConnectionError {
  constructor({ message }: { message?: string } = {}) {
    super({ message: message ?? 'Request timed out.' });
  }
}

export class BadRequestError extends APIError<400, Headers> {}

export class AuthenticationError extends APIError<401, Headers> {}

export class PermissionDeniedError extends APIError<403, Headers> {}

export class NotFoundError extends APIError<404, Headers> {}

export class ConflictError extends APIError<409, Headers> {}

export class UnprocessableEntityError extends APIError<422, Headers> {}

export class RateLimitError extends APIError<429, Headers> {}

export class InternalServerError extends APIError<number, Headers> {}
