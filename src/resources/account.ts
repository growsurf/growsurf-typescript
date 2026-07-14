// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class AccountResource extends APIResource {
  /**
   * Creates a new GrowSurf account. This is the only endpoint that does not require an
   * API key. The response includes an API key for the new account, shown once in the
   * response. The key is locked until the team owner's email address is verified:
   * authenticated program and resource endpoints return a `403` with error code
   * `EMAIL_NOT_VERIFIED_ERROR` until then (resend the email via
   * `POST /team/owner/verification-email`, then retry). A welcome email is sent to the
   * address with the verification link and a set-password link for dashboard access.
   * Accounts whose email is never verified are deleted automatically after 7 days. For
   * security, the API key is rotated the first time the account owner signs in to the
   * GrowSurf dashboard. Some actions (such as emailing participants) additionally
   * require GrowSurf to verify the team first. By creating an account you agree, on
   * behalf of the account holder, to GrowSurf's
   * [Terms of Service](https://growsurf.com/terms) and
   * [Privacy Policy](https://growsurf.com/privacy).
   *
   * @example
   * ```ts
   * const account = await client.account.create({
   *   email: 'richard@piedpiper.com',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/accounts', {
      body,
      ...options,
      headers: buildHeaders([options?.headers, { Authorization: null }]),
    });
  }
}

export interface AccountCreateResponse {
  /**
   * Email address for the new account.
   */
  email: string;

  /**
   * An API key for the new account. Use it as the `Bearer` token on subsequent
   * requests. It is shown once, locked (`403` `EMAIL_NOT_VERIFIED_ERROR`) until the
   * account's email is verified, and rotated when the account owner first signs in to
   * the GrowSurf dashboard.
   */
  apiKey: string;

  /**
   * GrowSurf team verification state. `VERIFIED` is required before a program can send
   * participant emails.
   */
  verificationStatus: 'NOT_REQUESTED' | 'REQUESTED' | 'VERIFIED';
}

export interface AccountCreateParams {
  /**
   * The email address for the new GrowSurf account. Personal emails and disposable email
   * addresses are not accepted.
   */
  email: string;

  /** Company name for the new account. */
  company?: string;

  /** First name for the new account owner. */
  firstName?: string;

  /** Last name for the new account owner. */
  lastName?: string;
}

export declare namespace AccountResource {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountCreateParams as AccountCreateParams,
  };
}
