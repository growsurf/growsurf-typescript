// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign design (`CampaignDesign`) configuration operations — the Program Editor's **Design** tab
 * plus payout-destination confirmation page copy.
 */
export class Design extends APIResource {
  /**
   * Retrieves a program's configured design fields: the dashboard Program Editor's **Design** tab
   * plus the payout-destination confirmation page copy configured from payout integration cards.
   * This includes the GrowSurf window layout, header, share channels and invites, signup form,
   * portal and landing pages, theme styling, and referral or affiliate summary and status
   * sections. The available fields depend on the program type. `payoutDestinationConfirmation` is
   * omitted when no confirmation fields are stored. Stored `null` fields are returned as `null`;
   * omitted and `null` fields use localized defaults. `participantAvatarStyle` is `CHARACTERS`,
   * `INITIALS`, `ANIMALS`, or `GRADIENT`; missing or unknown values mean `INITIALS`.
   *
   * @example
   * ```ts
   * const design = await client.campaign.design.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignDesign> {
    return this._client.get(path`/campaign/${id}/design`, options);
  }

  /**
   * Updates a program's design configuration, including the payout-destination confirmation page
   * copy configured from payout integration cards. Only the fields you send are changed; anything
   * you leave out is untouched (arrays such as `signup.fields` replace wholesale). Unknown
   * fields, fields not available for the program type, and invalid values return a `400`.
   * Landing-page custom code and JavaScript are not editable via the API.
   *
   * @example
   * ```ts
   * const design = await client.campaign.design.update('id', {
   *   participantAvatarStyle: 'CHARACTERS',
   *   login: { heading: 'Sign in', buttonText: 'Send sign-in link', successHeading: 'Check your email' },
   *   resources: {
   *     isPublicDisplayed: true,
   *     title: 'Resources',
   *     viewResourcesLinkText: 'View resources',
   *     backLinkText: 'Back',
   *     copyButtonText: 'Copy',
   *     copiedText: 'Copied',
   *     icon: { type: 'IMAGE', imageUrl: 'https://example.com/resources-icon.png' },
   *   },
   *   payoutDestinationConfirmation: { headline: 'Confirm your {{payoutProvider}} payout email' },
   * });
   * ```
   */
  update(id: string, body: DesignUpdateParams, options?: RequestOptions): APIPromise<CampaignDesign> {
    return this._client.patch(path`/campaign/${id}/design`, { body, ...options });
  }
}

/**
 * A program's design configuration. It includes the dashboard Program Editor's Design tab and the
 * payout-destination confirmation page copy configured from payout integration cards. The exact
 * fields available depend on the program type (for example, `referralSummary` is referral-only,
 * while `affiliateSummary`, `commissions`, and `payouts` are affiliate-only).
 * `participantSettings` is available to both program types; its manual payout and Wise fields are
 * affiliate-only. `referredExperience` includes the Claim Offer Popup for both program types, with
 * its colors under `theme.referredExperienceOfferPopup`. `GET` returns the fields configured for the program;
 * `payoutDestinationConfirmation` is omitted when no confirmation fields are stored. Stored
 * `null` fields are returned as `null`; omitted and `null` fields use localized defaults. `PATCH`
 * back only the sections or fields you want to change (arrays such as `signup.fields` replace
 * wholesale). `participantAvatarStyle` accepts `CHARACTERS`, `INITIALS`, `ANIMALS`, or `GRADIENT`;
 * new programs use `CHARACTERS`, while missing or unknown stored values return `INITIALS`. The set
 * of keys is intentionally left open. `resources` controls the participant-facing Resources
 * destination; resource items and their order use the Program Resources operations.
 */
export type CampaignDesign = {
  resources?: CampaignDesignResources;
  [key: string]: unknown;
};

/** The icon shown for the participant Resources destination. */
export type CampaignDesignResourcesIcon = {
  /** Use the default icon, a configured image, or no icon. */
  type?: 'DEFAULT' | 'IMAGE' | 'NONE';

  /** LIST-mode icon image URL when `type` is `IMAGE`. Maximum 500 characters. */
  imageUrl?: string;
};

/** Participant presentation settings for Resources. Resource items use Program Resources operations. */
export type CampaignDesignResources = {
  /** Enables the destination. It stays hidden until at least one valid resource is published. */
  isPublicDisplayed?: boolean;

  /** Participant-visible section title. Maximum 100 characters. */
  title?: string;

  /** LIST-mode row text. Maximum 100 characters. */
  viewResourcesLinkText?: string;

  /** LIST-mode detail Back text. Maximum 100 characters. */
  backLinkText?: string;

  /** TEXT resource copy action. Maximum 100 characters. */
  copyButtonText?: string;

  /** Shown in place of the list when no resources are published. Maximum 500 characters. */
  emptyState?: string;

  /** TEXT resource copy confirmation. Maximum 100 characters. */
  copiedText?: string;

  /** Icon configuration for the destination. */
  icon?: CampaignDesignResourcesIcon;
};

/**
 * A partial `CampaignDesign` — only the fields you send are changed. The set of keys
 * is intentionally left open. `GET` the configured fields first, then `PATCH` back only
 * the fields you want to change.
 */
export type DesignUpdateParams = {
  resources?: CampaignDesignResources;
  [key: string]: unknown;
};

export declare namespace Design {
  export {
    type CampaignDesign as CampaignDesign,
    type CampaignDesignResources as CampaignDesignResources,
    type CampaignDesignResourcesIcon as CampaignDesignResourcesIcon,
    type DesignUpdateParams as DesignUpdateParams,
  };
}
