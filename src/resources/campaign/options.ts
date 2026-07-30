// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign options (`CampaignOptions`) configuration operations — the dashboard
 * Program Editor's **Options** tab.
 */
export class Options extends APIResource {
  /**
   * Retrieves a program's options — the same surface as the dashboard Program
   * Editor's **Options** tab. Includes reward/fraud approval, anti-fraud lists +
   * toggles, referral cookie/credit windows, reCAPTCHA, affiliate enrollment +
   * application review, payout threshold + tax settings (affiliate only), and
   * notification-email settings. `fraud.recaptcha.secretKey` is never returned.
   *
   * @example
   * ```ts
   * const option = await client.campaign.options.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignOptions> {
    return this._client.get(path`/campaign/${id}/options`, options);
  }

  /**
   * Updates a program's options. Only the fields you send are changed. Some fields
   * are program-type specific (`requireManualRewardApproval`/`autoFulfillRewards` are
   * referral-only; `affiliateApplicationMode`/`affiliateReapplicationPolicy` and
   * `payoutThreshold`/`taxDocumentation` are affiliate-only, and affiliate programs
   * require `requireParticipantAuth: true`). `fraud.recaptcha.secretKey` is
   * write-only. `referralCreditWindowDays: null` means "never expires".
   *
   * @example
   * ```ts
   * const option = await client.campaign.options.update('id', {});
   * ```
   */
  update(id: string, body: OptionUpdateParams, options?: RequestOptions): APIPromise<CampaignOptions> {
    return this._client.patch(path`/campaign/${id}/options`, { body, ...options });
  }
}

/**
 * A program's options (dashboard Program Editor **Options** tab): approval,
 * anti-fraud, referral windows, reCAPTCHA, affiliate enrollment + application
 * review, payout/tax, and notification-email settings. The set of keys is
 * intentionally left open; to see the full object with every field and its current
 * value, `GET` this resource, then `PATCH` back only the fields you want to
 * change.
 */
export type CampaignOptions = { [key: string]: unknown };

/**
 * A partial `CampaignOptions` — only the fields you send are changed. The set of
 * keys is intentionally left open; to see the full object with every field and its
 * current value, `GET` this resource, then `PATCH` back only the fields you want to
 * change.
 */
export type OptionUpdateParams = { [key: string]: unknown };

export declare namespace Options {
  export { type CampaignOptions as CampaignOptions, type OptionUpdateParams as OptionUpdateParams };
}
