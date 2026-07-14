// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIPromise } from '../core/api-promise';
import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';

export class TeamResource extends APIResource {
  /**
   * Retrieves the team bound to the API key or OAuth connection. `verificationStatus`
   * is `VERIFIED` once GrowSurf has verified the team, which is required before a
   * program can send participant emails.
   *
   * @example
   * ```ts
   * const team = await client.team.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<Team> {
    return this._client.get('/team', options);
  }

  /**
   * Updates the name of the team bound to the API key or OAuth connection. Any other
   * property is rejected with a `400`. Personal profiles, billing, and team ownership
   * are not editable here.
   *
   * @example
   * ```ts
   * const team = await client.team.update({ name: 'Pied Piper Labs' });
   * ```
   */
  update(body: TeamUpdateParams, options?: RequestOptions): APIPromise<Team> {
    return this._client.patch('/team', { body, ...options });
  }

  /**
   * Generates a new API key and makes the key used on this request stop working when
   * rotation succeeds. Send a unique, random `Idempotency-Key`. If the response is
   * interrupted, immediately retry with the original API key and the same
   * `Idempotency-Key` to receive the same new key. Update every integration that used
   * the old key. The team owner is notified by email whenever the key is rotated.
   * GrowSurf SDKs generate the idempotency key automatically. This endpoint accepts an
   * API key with `api_key:rotate`. If this scope is unavailable, rotate the key in the
   * authenticated dashboard instead. This operation is available only through the REST
   * API or a GrowSurf API SDK, not through MCP.
   *
   * @example
   * ```ts
   * const response = await client.team.rotateApiKey();
   * ```
   */
  rotateApiKey(options?: RequestOptions): APIPromise<TeamRotateApiKeyResponse> {
    return this._client.post('/api-key/rotate', options);
  }

  /**
   * Requests GrowSurf to verify the bound team (required before a program can email its
   * participants). Idempotent — calling it again while a request is pending does not
   * create a duplicate. Returns the team with its updated `verificationStatus`.
   *
   * @example
   * ```ts
   * const team = await client.team.requestVerification();
   * ```
   */
  requestVerification(options?: RequestOptions): APIPromise<Team> {
    return this._client.post('/team/verification-request', options);
  }

  /**
   * Resends the email-verification message to the bound team's owner. The response never
   * reveals the owner's email address. A `200` with `status: SENT` is returned only when
   * an email was actually dispatched. Returns `400` if the email is already verified,
   * and `429` if a verification email was sent too recently — wait a moment, then retry.
   *
   * @example
   * ```ts
   * const response = await client.team.resendOwnerVerificationEmail();
   * ```
   */
  resendOwnerVerificationEmail(
    options?: RequestOptions,
  ): APIPromise<TeamResendOwnerVerificationEmailResponse> {
    return this._client.post('/team/owner/verification-email', options);
  }
}

export interface Team {
  /** The team's display name. */
  name: string;

  /**
   * GrowSurf team verification state. `VERIFIED` is required before a program can send
   * participant emails.
   */
  verificationStatus: 'NOT_REQUESTED' | 'REQUESTED' | 'VERIFIED';

  /** When team verification was last requested, as a Unix timestamp in milliseconds. */
  verificationRequestedAt: number | null;
}

export interface TeamRotateApiKeyResponse {
  /** The new API key. Store it now; the key used for rotation stops working immediately. */
  apiKey: string;
}

export interface TeamResendOwnerVerificationEmailResponse {
  /** Whether the verification email request was accepted. */
  success: boolean;

  /** Status of the verification email request. */
  status: 'SENT';
}

export interface TeamUpdateParams {
  /** The team's display name. */
  name: string;
}

export declare namespace TeamResource {
  export {
    type Team as Team,
    type TeamRotateApiKeyResponse as TeamRotateApiKeyResponse,
    type TeamResendOwnerVerificationEmailResponse as TeamResendOwnerVerificationEmailResponse,
    type TeamUpdateParams as TeamUpdateParams,
  };
}
