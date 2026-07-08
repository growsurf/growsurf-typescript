// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Program webhook configuration operations (secrets are write-only and never
 * returned).
 */
export class Webhooks extends APIResource {
  /**
   * Lists a program's webhooks (secrets are never returned).
   *
   * @example
   * ```ts
   * const webhooks = await client.campaign.webhooks.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get(path`/campaign/${id}/webhooks`, options);
  }

  /**
   * Adds a webhook to the program.
   *
   * @example
   * ```ts
   * const webhook = await client.campaign.webhooks.create('id', {
   *   payloadUrl: 'https://piedpiper.com/growsurf/webhook',
   * });
   * ```
   */
  create(id: string, body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post(path`/campaign/${id}/webhooks`, { body, ...options });
  }

  /**
   * Updates a webhook by id.
   *
   * @example
   * ```ts
   * const webhook = await client.campaign.webhooks.update(
   *   'webhookId',
   *   { id: 'id' },
   * );
   * ```
   */
  update(webhookID: string, params: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    const { id, ...body } = params;
    return this._client.patch(path`/campaign/${id}/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * Removes a webhook by id.
   *
   * @example
   * ```ts
   * const webhook = await client.campaign.webhooks.delete(
   *   'webhookId',
   *   { id: 'id' },
   * );
   * ```
   */
  delete(
    webhookID: string,
    params: WebhookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeleteWebhookResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/webhooks/${webhookID}`, options);
  }

  /**
   * Sends a live test event to a webhook using its stored URL and secret.
   *
   * @example
   * ```ts
   * const response = await client.campaign.webhooks.test(
   *   'webhookId',
   *   { id: 'id' },
   * );
   * ```
   */
  test(
    webhookID: string,
    params: WebhookTestParams,
    options?: RequestOptions,
  ): APIPromise<WebhookTestResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/webhooks/${webhookID}/test`, { body, ...options });
  }
}

/**
 * A webhook event name.
 */
export type WebhookEvent =
  | 'PARTICIPANT_REACHED_A_GOAL'
  | 'NEW_PARTICIPANT_ADDED'
  | 'CAMPAIGN_ENDED'
  | 'PARTICIPANT_FRAUD_STATUS_UPDATED'
  | 'NEW_COMMISSION_ADDED'
  | 'COMMISSION_ADJUSTED'
  | 'NEW_PAYOUT_ISSUED';

export interface Webhook {
  /**
   * The webhook id (`primary` for the program's primary webhook).
   */
  id: string;

  /**
   * Read-only. Whether GrowSurf auto-disabled this webhook after repeated delivery
   * failures.
   */
  autoDisabledDueToFailures: boolean;

  events: Array<WebhookEvent>;

  /**
   * Read-only. Consecutive delivery failures.
   */
  failureCount: number;

  isEnabled: boolean;

  /**
   * Read-only. When the last delivery failure occurred, as a Unix timestamp in
   * milliseconds.
   */
  lastFailureAt?: number | null;

  /**
   * The URL that receives webhook deliveries.
   */
  payloadUrl?: string | null;
}

export interface WebhookListResponse {
  webhooks: Array<Webhook>;
}

export interface DeleteWebhookResponse {
  id: string;

  success: boolean;
}

export interface WebhookTestResponse {
  success: boolean;

  /**
   * The mock event payload that was sent.
   */
  payload?: { [key: string]: unknown };

  response?: WebhookTestResponse.Response;
}

export namespace WebhookTestResponse {
  export interface Response {
    msg?: string;

    statusCode?: number;
  }
}

export interface WebhookCreateParams {
  /**
   * The URL that receives webhook deliveries.
   */
  payloadUrl: string;

  /**
   * The events this webhook is subscribed to. When omitted, the webhook is created
   * subscribed to no events.
   */
  events?: Array<WebhookEvent>;

  isEnabled?: boolean;

  /**
   * Write-only. Used to sign deliveries (the `GrowSurf-Signature` HMAC header). Never
   * returned.
   */
  secret?: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param
   */
  events?: Array<WebhookEvent>;

  /**
   * Body param
   */
  isEnabled?: boolean;

  /**
   * Body param
   */
  payloadUrl?: string;

  /**
   * Body param: Write-only.
   */
  secret?: string;
}

export interface WebhookDeleteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface WebhookTestParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: The event to simulate. When omitted, the webhook's first enabled event
   * is used (returns `400` if the webhook has no enabled events).
   */
  event?: WebhookEvent;
}

export declare namespace Webhooks {
  export {
    type WebhookEvent as WebhookEvent,
    type Webhook as Webhook,
    type WebhookListResponse as WebhookListResponse,
    type DeleteWebhookResponse as DeleteWebhookResponse,
    type WebhookTestResponse as WebhookTestResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookTestParams as WebhookTestParams,
  };
}
