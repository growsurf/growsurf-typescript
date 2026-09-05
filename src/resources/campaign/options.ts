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
 * anti-fraud, attribution, referral windows, reCAPTCHA, affiliate enrollment +
 * application review, payout/tax, and notification-email settings. Known fields
 * are typed, and the object stays open so newer API fields remain usable.
 */
export interface CampaignOptions {
  affiliateApplicationMode?: 'OPEN_ENROLLMENT' | 'MANUAL_REVIEW' | 'AUTO_APPROVE';
  affiliateReapplicationPolicy?: 'AFTER_COOLDOWN' | 'DISABLED';
  affiliateReapplicationCooldownDays?: number;
  affiliateApplicationReviewEstimateBusinessDays?: number | null;
  requireManualRewardApproval?: boolean;
  autoFulfillRewards?: boolean;
  requireManualFraudApproval?: boolean;
  autoBlockFraud?: boolean;
  requireParticipantAuth?: boolean;
  enforceGdprCompliance?: boolean;
  blockPaidAdsTraffic?: boolean;
  /** The server-verified visit that receives conversion credit. Defaults to `LAST_CLICK`. */
  attributionModel?: 'LAST_CLICK' | 'FIRST_CLICK';
  referralCookieWindowDays?: 1 | 3 | 7 | 14 | 30 | 60 | 90 | 180 | 365 | 400;
  referralCreditWindowDays?: 1 | 3 | 7 | 14 | 30 | 60 | 90 | 180 | 365 | null;
  payoutThreshold?: number | null;
  fraud?: CampaignOptionsFraud;
  taxDocumentation?: CampaignOptionsTaxDocumentation;
  notificationEmails?: CampaignOptionsNotificationEmails;
  [key: string]: unknown;
}

export interface CampaignOptionsRecaptcha {
  isEnabled?: boolean;
  siteKey?: string | null;
}

export interface CampaignOptionsFraud {
  blockedEmails?: string[];
  blockedIps?: string[];
  blockedCountries?: string[];
  allowedEmails?: string[];
  allowedIps?: string[];
  allowedCountries?: string[];
  blockBurnerEmails?: boolean;
  blockDataCenterIps?: boolean;
  blockHighRiskReferrers?: boolean;
  autoBlockHighRiskIps?: boolean;
  maxSignupsPerIp2Min?: number;
  maxSignupsPerIp10Min?: number;
  recaptcha?: CampaignOptionsRecaptcha;
}

export interface CampaignOptionsTaxDocumentation {
  companyName?: string | null;
  vatNumber?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  state?: string | null;
  postalCode?: string | null;
  country?: string | null;
  collectAffiliateVat?: boolean;
}

export interface CampaignOptionsNotificationEvents {
  PARTICIPANT_REACHED_A_GOAL?: boolean;
  NEW_PARTICIPANT_ADDED_NON_REFERRED?: boolean;
  NEW_PARTICIPANT_ADDED_REFERRED?: boolean;
  CAMPAIGN_ENDED?: boolean;
  WEEKLY_PERFORMANCE_REPORT?: boolean;
  MONTHLY_PERFORMANCE_REPORT?: boolean;
  NEW_COMMISSION_ADDED?: boolean;
  COMMISSION_ADJUSTED?: boolean;
  NEW_PAYOUT_ISSUED?: boolean;
  AFFILIATE_BATCH_PAYOUT_COMPLETED?: boolean;
  MONTHLY_PAYOUT_REMINDER?: boolean;
  AFFILIATE_APPLICATIONS_PENDING_REVIEW?: boolean;
}

export interface CampaignOptionsNotificationEmails {
  recipients?: string[];
  events?: CampaignOptionsNotificationEvents;
}

export interface CampaignOptionsRecaptchaUpdate extends CampaignOptionsRecaptcha {
  /** Write-only reCAPTCHA secret. */
  secretKey?: string | null;
}

export interface CampaignOptionsFraudUpdate extends CampaignOptionsFraud {
  recaptcha?: CampaignOptionsRecaptchaUpdate;
}

/**
 * A partial `CampaignOptions` — only the fields you send are changed. Known fields
 * are typed, and the object stays open for newer API fields.
 */
export interface OptionUpdateParams extends CampaignOptions {
  fraud?: CampaignOptionsFraudUpdate;
}

export declare namespace Options {
  export {
    type CampaignOptions as CampaignOptions,
    type CampaignOptionsFraud as CampaignOptionsFraud,
    type CampaignOptionsFraudUpdate as CampaignOptionsFraudUpdate,
    type CampaignOptionsNotificationEmails as CampaignOptionsNotificationEmails,
    type CampaignOptionsNotificationEvents as CampaignOptionsNotificationEvents,
    type CampaignOptionsRecaptcha as CampaignOptionsRecaptcha,
    type CampaignOptionsRecaptchaUpdate as CampaignOptionsRecaptchaUpdate,
    type CampaignOptionsTaxDocumentation as CampaignOptionsTaxDocumentation,
    type OptionUpdateParams as OptionUpdateParams,
  };
}
