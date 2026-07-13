// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIPromise } from '../core/api-promise';
import { APIResource } from '../core/resource';
import { RequestOptions } from '../internal/request-options';

export class TeamResource extends APIResource {
  /**
   * Retrieves the team bound to the API key or OAuth connection.
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
   * property is rejected with a `400`.
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
   * rotation succeeds. The SDK sends a retry-safe `Idempotency-Key`, so automatic
   * retries return the same replacement. Store the new key, then update every
   * integration that used the old key. This operation is unavailable through MCP.
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
   * Requests GrowSurf to verify the bound team. Calling this again while a request is
   * pending does not create a duplicate.
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
   * reveals the owner's email address.
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
