// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class AccountResource extends APIResource {
  /**
   * Creates a new GrowSurf account. This is the only endpoint that does not require an
   * API key. Before calling it, an authorized account owner must review and approve
   * GrowSurf's [Terms of Service](https://growsurf.com/terms) and
   * [Privacy Policy](https://growsurf.com/privacy). The account starts a 14-day Business
   * trial without a credit card. The response includes an API key for the new account,
   * shown once in the response. The key is a secret: store it in a secret manager and do
   * not put it in logs, screenshots, URLs, model context, analytics, or generated output.
   * The key is locked until the team owner's email address is verified:
   * authenticated program and resource endpoints return a `403` with error code
   * `EMAIL_NOT_VERIFIED_ERROR` until then (resend the email via
   * `POST /team/owner/verification-email`, then retry). Verification unlocks this same
   * key — keep it and retry rather than requesting a replacement. A welcome email is
   * sent to the address with the verification link and a set-password link for
   * dashboard access. Accounts whose email is never verified are deleted automatically
   * after 7 days. Separately, for security, the API key is replaced the first time the
   * account owner signs in to the GrowSurf dashboard; email verification does not
   * trigger that, and the previous key then returns a `403` with error code
   * `NOT_AUTHORIZED_ERROR`. Some actions (such as emailing participants) additionally
   * require GrowSurf to verify the team first. Calling this endpoint accepts those
   * policies on the account holder's behalf.
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
   * requests. It is shown once and locked (`403` `EMAIL_NOT_VERIFIED_ERROR`) until the
   * account's email is verified; verification unlocks this same key, so keep it and
   * retry. It is replaced only when the account owner first signs in to the GrowSurf
   * dashboard.
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
