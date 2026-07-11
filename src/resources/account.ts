// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AccountResource extends APIResource {
  /**
   * Creates a new GrowSurf account. This is the only endpoint that does not require an
   * API key. The response includes an API key for the new account, shown once in
   * the response. The key is locked until the account's email address is verified:
   * authenticated endpoints outside the Accounts group return a `403` with error code
   * `EMAIL_NOT_VERIFIED_ERROR` until then (resend the email via the
   * resend-verification-email endpoint, then retry). A welcome email is sent to the
   * address with the verification link and a set-password link for dashboard access.
   * Accounts whose email is never verified are deleted automatically after 7 days. For
   * security, the API key is rotated the first time the account owner signs in to the
   * GrowSurf dashboard. Some actions (such as emailing participants) additionally
   * require the GrowSurf team to verify the account first. By creating an account you
   * agree, on behalf of the account holder, to GrowSurf's
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
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Retrieves the account that owns the API key: profile and GrowSurf-team
   * verification state. `verificationStatus` is `VERIFIED` once the
   * GrowSurf team has verified the account — this is required before you can send
   * participant emails from a program.
   *
   * @example
   * ```ts
   * const account = await client.account.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<Account> {
    return this._client.get('/account', options);
  }

  /**
   * Updates your own account profile (`firstName`, `lastName`, `company`). Only the
   * fields you send are changed. Any property not listed in `AccountUpdateParams` is
   * rejected with a `400` — in particular, the account `email` cannot be changed via
   * the API, and billing/subscription is not editable here.
   *
   * @example
   * ```ts
   * const account = await client.account.update();
   * ```
   */
  update(body: AccountUpdateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch('/account', { body, ...options });
  }

  /**
   * Generates a new API key and invalidates the key used for the request. The SDK sends
   * a retry-safe `Idempotency-Key`, so automatic retries return the same replacement.
   * Store the returned key, then update every integration that used the old key. The
   * account owner is notified by email whenever the key is rotated. Requires an API key
   * with `api_key:rotate`. This operation is available only through the REST API or a
   * GrowSurf API SDK, not through MCP.
   *
   * @example
   * ```ts
   * const response = await client.account.rotateApiKey();
   * ```
   */
  rotateApiKey(options?: RequestOptions): APIPromise<AccountRotateApiKeyResponse> {
    return this._client.post('/account/api-key', options);
  }

  /**
   * Requests GrowSurf-team verification of your account (required before a program can
   * email its participants). Idempotent — calling it again while a request is pending
   * does not create a duplicate. Returns the account with its updated
   * `verificationStatus`.
   *
   * @example
   * ```ts
   * const account = await client.account.requestVerification();
   * ```
   */
  requestVerification(options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/account/verification-request', options);
  }

  /**
   * Resends the email-verification email to the account's email address. A `200`
   * with `status: 'SENT'` is only returned when an email was actually dispatched.
   * Returns a `400` if the email is already verified, or a `429` if a verification
   * email was sent too recently — wait a moment, then retry.
   *
   * @example
   * ```ts
   * const response =
   *   await client.account.resendVerificationEmail();
   * ```
   */
  resendVerificationEmail(options?: RequestOptions): APIPromise<AccountResendVerificationEmailResponse> {
    return this._client.post('/account/verification-email', options);
  }
}

export interface Account {
  /**
   * The account's unique identifier.
   */
  id: string;

  email: string;

  /**
   * GrowSurf-team verification state. `VERIFIED` is required before a program can send
   * participant emails.
   */
  verificationStatus: 'NOT_REQUESTED' | 'REQUESTED' | 'VERIFIED';

  company?: string | null;

  /**
   * When the account was created, as a Unix timestamp in milliseconds.
   */
  createdAt?: number | null;

  firstName?: string | null;

  lastName?: string | null;

  /**
   * When team verification was last requested, as a Unix timestamp in milliseconds.
   */
  verificationRequestedAt?: number | null;
}

export interface AccountCreateResponse {
  /**
   * The new account's unique identifier.
   */
  id: string;

  email: string;

  /**
   * An API key for the new account. Use it as the `Bearer` token on subsequent
   * requests. Locked (`403` `EMAIL_NOT_VERIFIED_ERROR`) until the account's email is
   * verified, and rotated when the account owner first signs in to the GrowSurf
   * dashboard.
   */
  apiKey: string;

  verificationStatus: 'NOT_REQUESTED' | 'REQUESTED' | 'VERIFIED';
}

export interface AccountRotateApiKeyResponse {
  /**
   * The new API key. Store it now; the key used for rotation stops working immediately.
   */
  apiKey: string;
}

export interface AccountResendVerificationEmailResponse {
  status: 'SENT';

  success: boolean;
}

export interface AccountCreateParams {
  /**
   * The email address for the new account. Personal emails and disposable email
   * addresses are not accepted.
   */
  email: string;

  company?: string;

  firstName?: string;

  lastName?: string;
}

export interface AccountUpdateParams {
  company?: string;

  firstName?: string;

  lastName?: string;
}

export declare namespace AccountResource {
  export {
    type Account as Account,
    type AccountCreateResponse as AccountCreateResponse,
    type AccountRotateApiKeyResponse as AccountRotateApiKeyResponse,
    type AccountResendVerificationEmailResponse as AccountResendVerificationEmailResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
  };
}
