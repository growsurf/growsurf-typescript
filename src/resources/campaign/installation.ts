// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign installation (`CampaignInstallation`) configuration operations — the
 * dashboard Program Editor's **Installation** tab (plus the Mobile SDK settings).
 */
export class Installation extends APIResource {
  /**
   * Retrieves a program's installation configuration — the same surface as the
   * dashboard Program Editor's **Installation** tab (plus the Mobile SDK settings).
   * Includes the referral trigger (referral programs only), signup tracking method,
   * share URL and whitelist, custom-form signup settings, and mobile SDK settings.
   *
   * @example
   * ```ts
   * const installation =
   *   await client.campaign.installation.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignInstallation> {
    return this._client.get(path`/campaign/${id}/installation`, options);
  }

  /**
   * Updates a program's installation configuration. Only the fields you send are
   * changed; omitted fields are left untouched. `referralTrigger` is only available
   * for referral programs. `mobile.publicKey` is read-only; if no key exists yet,
   * enabling `mobile.isEnabled` creates one. Changing `shareUrl` re-resolves its
   * redirect destinations, which may take a moment to complete. URLs must include an
   * explicit `http://` or `https://` scheme.
   * Changes to participant email content are checked before saving. Rejected content
   * returns `400` and is not saved. A concurrent edit can return `409`; reload the
   * program before retrying.
   *
   * @example
   * ```ts
   * const installation = await client.campaign.installation.update(
   *   'id',
   *   {},
   * );
   * ```
   */
  update(
    id: string,
    body: InstallationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignInstallation> {
    return this._client.patch(path`/campaign/${id}/installation`, { body, ...options });
  }
}

/**
 * A program's installation configuration (dashboard Program Editor **Installation**
 * tab, plus Mobile SDK settings): referral trigger, signup tracking, share URL +
 * whitelist, custom-form signup, and mobile SDK settings. Known fields are typed,
 * and the object stays open so newer API fields remain usable.
 */
export interface CampaignInstallationSignup {
  isCustomForm?: boolean;
  url?: string | null;
  redirectAfterSignup?: boolean;
  redirectUrl?: string | null;
  trackInputFields?: boolean;
  /**
   * Extra pages where GrowSurf watches signup form fields when `trackInputFields` is
   * on. Each URL must include an `http(s)://` scheme and contain no `#!` or `??`.
   * Duplicates are removed. Sending this array replaces the entire list.
   */
  additionalSignupUrls?: string[];
  /**
   * Forms GrowSurf listens to when `signupEvent` is `FORM_DETECTION`, as found by the
   * dashboard form scan. A form counts only when `isSelected` is `true`; a selected
   * form must have exactly one field whose `key` is `email`. A form sent back
   * unchanged is not checked again. Sending this array replaces the entire list.
   */
  forms?: CampaignInstallationSignupForm[];
}

export interface CampaignInstallationSignupForm {
  /** CSS selector for the form on the signup page. */
  selector: string;
  /** Whether GrowSurf adds participants when this form is submitted. */
  isSelected: boolean;
  /** The form's input fields and the participant value each one fills. */
  fields: CampaignInstallationSignupFormField[];
  /** The form's `id` attribute, if any. */
  id?: string | null;
  /** The form's `name` attribute, if any. */
  name?: string | null;
  /** The form's `class` attribute, if any. */
  className?: string | null;
}

export interface CampaignInstallationSignupFormField {
  /** CSS selector for the input inside the form. */
  selector: string;
  /**
   * The participant value this input fills: `email`, `firstName`, `lastName`,
   * `ignore`, or a metadata key. An empty string means no value is chosen yet.
   */
  key: string;
  /** Whether GrowSurf reads this input when the form is submitted. */
  include: boolean;
  /** The input's `id` attribute, if any. */
  id?: string | null;
  /** The input's `name` attribute, if any. */
  name?: string | null;
  /** The input's `class` attribute, if any. */
  className?: string | null;
  /** The input's `type` attribute, if any. */
  type?: string | null;
}

export interface CampaignInstallationMobile {
  isEnabled?: boolean;
  /** Read-only publishable key for the mobile SDKs. */
  publicKey?: string;
  iosAttributionUrl?: string | null;
  iosAppStoreUrl?: string | null;
  androidPackageName?: string | null;
  androidAppStoreUrl?: string | null;
}

export interface CampaignInstallationMobileUpdate {
  isEnabled?: boolean;
  iosAttributionUrl?: string | null;
  iosAppStoreUrl?: string | null;
  androidPackageName?: string | null;
  androidAppStoreUrl?: string | null;
}

export interface CampaignInstallationInstructionSelections {
  platform?: 'web' | 'ios' | 'android';
  mobileAttributionProvider?: 'branch' | 'appsflyer' | 'adjust' | 'singular' | 'other';
  stepProviders?: {
    step2Signup?: 'restApi' | 'javascript';
    step2Affiliate?: 'stripe' | 'chargebee' | 'recurly' | 'restApi';
    /**
     * `baskHealth`, `telegra`, `mdIntegrations`, `lithos`, and `carevalidate` are
     * available only for programs with the `TELEHEALTH` goal.
     */
    step2Referral?:
      | 'restApi'
      | 'zapier'
      | 'stripe'
      | 'chargebee'
      | 'recurly'
      | 'paypal'
      | 'hubspot'
      | 'salesforce'
      | 'klaviyo'
      | 'customerio'
      | 'baskHealth'
      | 'telegra'
      | 'mdIntegrations'
      | 'lithos'
      | 'carevalidate';
    step3Affiliate?: 'paypal' | 'wise';
    /** `baskHealth` is available only for programs with the `TELEHEALTH` goal. */
    step3Referral?:
      | 'webhooks'
      | 'zapier'
      | 'paypal'
      | 'tangocard'
      | 'tremendous'
      | 'stripe'
      | 'chargebee'
      | 'recurly'
      | 'baskHealth';
  };
}

export interface CampaignInstallationBase<TMobile> {
  referralTrigger?: 'CUSTOM' | 'ON_SIGNUP';
  signupEvent?: 'FORM_DETECTION' | 'PROGRAMMATIC';
  shareUrl?: string;
  useGrowSurfHostedLinks?: boolean;
  /** Seconds the hosted offer page waits before redirecting. `null` turns the page off. */
  offerPageRedirectSeconds?: 5 | 10 | 15 | null;
  allowedUrls?: string[];
  signup?: CampaignInstallationSignup;
  mobile?: TMobile;
  instructionSelections?: CampaignInstallationInstructionSelections;
  [key: string]: unknown;
}

export type CampaignInstallation = CampaignInstallationBase<CampaignInstallationMobile>;

/**
 * A partial `CampaignInstallation` — only the fields you send are changed. Known
 * fields are typed, and the object stays open for newer API fields.
 */
export type InstallationUpdateParams = CampaignInstallationBase<CampaignInstallationMobileUpdate>;

export declare namespace Installation {
  export {
    type CampaignInstallation as CampaignInstallation,
    type CampaignInstallationMobile as CampaignInstallationMobile,
    type CampaignInstallationMobileUpdate as CampaignInstallationMobileUpdate,
    type CampaignInstallationSignup as CampaignInstallationSignup,
    type CampaignInstallationSignupForm as CampaignInstallationSignupForm,
    type CampaignInstallationSignupFormField as CampaignInstallationSignupFormField,
    type CampaignInstallationInstructionSelections as CampaignInstallationInstructionSelections,
    type InstallationUpdateParams as InstallationUpdateParams,
  };
}
