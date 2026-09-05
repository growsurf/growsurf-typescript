// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign emails (`CampaignEmails`) configuration operations — the dashboard
 * Program Editor's **Emails** tab.
 */
export class Emails extends APIResource {
  /**
   * Retrieves a program's email configuration — the same surface as the dashboard
   * Program Editor's **Emails** tab. Returns each editable email template
   * (`subject`, `preheader`, `body`, `isEnabled`) plus the `settings` block (sender,
   * contact, and design). The set of email templates returned depends on the program
   * type (referral vs affiliate).
   *
   * @example
   * ```ts
   * const email = await client.campaign.emails.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignEmails> {
    return this._client.get(path`/campaign/${id}/emails`, options);
  }

  /**
   * Updates a program's email configuration. Only the fields you send are changed;
   * omitted fields are left untouched. You may only write the email templates the
   * dashboard exposes for the program type — writing a template that is not available
   * for the program type returns a `400`. Some fields are read-only
   * (`settings.sender.fromEmail`, whose custom value requires dashboard domain
   * verification).
   *
   * @example
   * ```ts
   * const email = await client.campaign.emails.update('id', {});
   * ```
   */
  update(id: string, body: EmailUpdateParams, options?: RequestOptions): APIPromise<CampaignEmails> {
    return this._client.patch(path`/campaign/${id}/emails`, { body, ...options });
  }
}

/**
 * A program's email configuration (dashboard Program Editor **Emails** tab): the
 * editable email templates plus the `settings` block. Known fields are typed, and
 * the object stays open so newer templates remain usable. `offerClaimed` is
 * available to both program types and sends while the Claim Offer Popup is enabled.
 */
export interface CampaignEmailTemplate {
  subject?: string;
  preheader?: string;
  body?: string;
  isEnabled?: boolean;
}

export interface CampaignInviteEmailTemplate extends CampaignEmailTemplate {
  useCompanyReplyTo?: boolean;
}

export interface CampaignEmailSenderSettings {
  fromName?: string;
  replyToEmail?: string;
  /** Read-only. Configure a custom from address in the dashboard. */
  fromEmail?: string;
}

export interface CampaignEmailContactSettings {
  companyName?: string;
  addressLine1?: string;
  addressLine2?: string | null;
  city?: string;
  state?: string | null;
  postalCode?: string | null;
  country?: string | null;
}

export interface CampaignEmailDesignSettings {
  header?: string | null;
  footer?: string | null;
  unsubscribePromotional?: string;
  unsubscribeInvite?: string;
  unsubscribeAffiliateInvite?: string;
  unsubscribeTransactional?: string;
}

export interface CampaignEmailSettings {
  sender?: CampaignEmailSenderSettings;
  contact?: CampaignEmailContactSettings;
  design?: CampaignEmailDesignSettings;
}

export interface CampaignEmailSenderUpdate {
  fromName?: string;
  replyToEmail?: string;
}

export interface CampaignEmailSettingsUpdate {
  sender?: CampaignEmailSenderUpdate;
  contact?: CampaignEmailContactSettings;
  design?: CampaignEmailDesignSettings;
}

export interface CampaignEmailsBase<TSettings> {
  welcomeNonReferred?: CampaignEmailTemplate;
  welcomeReferred?: CampaignEmailTemplate;
  offerClaimed?: CampaignEmailTemplate;
  referralLinkViewedFirstTime?: CampaignEmailTemplate;
  referralLinkUsed?: CampaignEmailTemplate;
  referredSignup?: CampaignEmailTemplate;
  goalAchieved?: CampaignEmailTemplate;
  campaignEndedWinners?: CampaignEmailTemplate;
  campaignEndedNonWinners?: CampaignEmailTemplate;
  progressUpdateMonthly?: CampaignEmailTemplate;
  commissionGenerated?: CampaignEmailTemplate;
  commissionAdjusted?: CampaignEmailTemplate;
  payoutPending?: CampaignEmailTemplate;
  payoutSentSuccess?: CampaignEmailTemplate;
  invite?: CampaignInviteEmailTemplate;
  loginLink?: CampaignEmailTemplate;
  payoutDestinationConfirmation?: CampaignEmailTemplate;
  payoutDestinationChanged?: CampaignEmailTemplate;
  taxInfoMissing?: CampaignEmailTemplate;
  taxInfoReceived?: CampaignEmailTemplate;
  taxInfoApproved?: CampaignEmailTemplate;
  taxInfoRejected?: CampaignEmailTemplate;
  affiliateApplicationReceived?: CampaignEmailTemplate;
  affiliateApplicationApproved?: CampaignEmailTemplate;
  affiliateApplicationDenied?: CampaignEmailTemplate;
  inviteAffiliate?: CampaignEmailTemplate;
  affiliateApplicationStatusLink?: CampaignEmailTemplate;
  affiliateApplicationEmailCorrection?: CampaignEmailTemplate;
  affiliateEmailChangeVerification?: CampaignEmailTemplate;
  settings?: TSettings;
  [key: string]: unknown;
}

export type CampaignEmails = CampaignEmailsBase<CampaignEmailSettings>;

/**
 * A partial `CampaignEmails` — only the fields you send are changed. Known fields
 * are typed, and the object stays open for newer API templates.
 */
export type EmailUpdateParams = CampaignEmailsBase<CampaignEmailSettingsUpdate>;

export declare namespace Emails {
  export {
    type CampaignEmailContactSettings as CampaignEmailContactSettings,
    type CampaignEmailDesignSettings as CampaignEmailDesignSettings,
    type CampaignEmailSenderSettings as CampaignEmailSenderSettings,
    type CampaignEmailSenderUpdate as CampaignEmailSenderUpdate,
    type CampaignEmailSettings as CampaignEmailSettings,
    type CampaignEmailSettingsUpdate as CampaignEmailSettingsUpdate,
    type CampaignEmails as CampaignEmails,
    type CampaignEmailTemplate as CampaignEmailTemplate,
    type CampaignInviteEmailTemplate as CampaignInviteEmailTemplate,
    type EmailUpdateParams as EmailUpdateParams,
  };
}
