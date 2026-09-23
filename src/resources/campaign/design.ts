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
   * copy configured from payout integration cards, the website widget under `widget`, and the
   * participant Traffic report under `trafficInsights` (its labels cannot be blank). Only the
   * fields you send are changed; anything
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
 * its colors under `theme.referredExperienceOfferPopup`. `widget` is the website widget shown in a
 * corner of your own site, with its colors under `theme.widget`. `trafficInsights` is the
 * participant Traffic report. `GET` returns the fields configured for the program;
 * `payoutDestinationConfirmation` is omitted when no confirmation fields are stored. Stored
 * `null` fields are returned as `null`; omitted and `null` fields use localized defaults. `PATCH`
 * back only the sections or fields you want to change (arrays such as `signup.fields` replace
 * wholesale). `participantAvatarStyle` accepts `CHARACTERS`, `INITIALS`, `ANIMALS`, or `GRADIENT`;
 * new programs use `CHARACTERS`, while missing or unknown stored values return `INITIALS`. Known
 * structured fields are typed. Sections whose nested fields are intentionally open in the REST
 * contract remain open here. `resources` controls the participant-facing Resources destination;
 * resource items and their order use the Program Resources operations.
 */
export type CampaignDesign = {
  participantAvatarStyle?: 'CHARACTERS' | 'INITIALS' | 'ANIMALS' | 'GRADIENT';
  window?: CampaignDesignOpenSection;
  header?: CampaignDesignOpenSection;
  stats?: CampaignDesignOpenSection;
  share?: CampaignDesignOpenSection;
  signup?: CampaignDesignOpenSection;
  login?: ParticipantLoginDesign;
  payoutDestinationConfirmation?: PayoutDestinationConfirmationDesign;
  countryLabels?: Record<string, string | null>;
  referralStatus?: CampaignDesignOpenSection;
  leaderboard?: CampaignDesignOpenSection;
  referredExperience?: CampaignDesignReferredExperience;
  widget?: CampaignDesignWidget;
  trafficInsights?: CampaignDesignTrafficInsights;
  referralSummary?: CampaignDesignOpenSection;
  affiliateSummary?: CampaignDesignOpenSection;
  commissions?: CampaignDesignOpenSection;
  payouts?: CampaignDesignOpenSection;
  rewards?: CampaignDesignOpenSection;
  resources?: CampaignDesignResources;
  participantSettings?: CampaignDesignOpenSection;
  landingPages?: CampaignDesignOpenSection;
  theme?: CampaignDesignTheme;
  [key: string]: unknown;
};

/** A design section whose nested fields are intentionally open in the REST contract. */
export type CampaignDesignOpenSection = Record<string, unknown>;

/** Participant sign-in text. */
export type ParticipantLoginDesign = {
  heading?: string;
  description?: string;
  fieldLabel?: string;
  fieldPlaceholder?: string;
  buttonText?: string;
  successHeading?: string;
  successBody?: string;
  resendPrompt?: string;
  resend?: string;
  resent?: string;
  invalidEmail?: string;
  cooldown?: string;
  serverError?: string;
  invalidLink?: string;
};

/** Validation and link-status messages for payout-destination confirmation. */
export type PayoutDestinationConfirmationErrorMessages = {
  invalidEmail?: string | null;
  emailMismatch?: string | null;
  tokenExpired?: string | null;
  tokenUsed?: string | null;
  alreadyConfirmed?: string | null;
  generic?: string | null;
};

/** Participant-facing payout-destination confirmation text. */
export type PayoutDestinationConfirmationDesign = {
  headline?: string | null;
  description?: string | null;
  emailLabel?: string | null;
  emailPlaceholder?: string | null;
  emailAgainLabel?: string | null;
  emailAgainPlaceholder?: string | null;
  legalNameLabel?: string | null;
  legalNamePlaceholder?: string | null;
  legalTypeLabel?: string | null;
  legalTypeIndividual?: string | null;
  legalTypeBusiness?: string | null;
  button?: string | null;
  success?: string | null;
  claimPending?: string | null;
  errorMessages?: PayoutDestinationConfirmationErrorMessages;
};

/** Copy and behavior shown to visitors who arrive through a referral link. */
export type CampaignDesignReferredExperience = {
  isOfferPopupEnabled?: boolean;
  offerPopupTitle?: string | null;
  offerPopupDescription?: string | null;
  offerPopupButtonText?: string | null;
  offerPopupImageUrl?: string | null;
  isOfferPopupReferrerImageShown?: boolean;
  offerPopupPlacement?: 'CENTER' | 'BOTTOM' | 'BOTTOM_RIGHT' | 'BOTTOM_LEFT' | 'TOP';
  offerPopupDelaySeconds?: 0 | 3 | 5 | 10;
  offerPopupThankYouText?: string | null;
  offerPopupThankYouButtonText?: string | null;
  isOfferPopupConfettiEnabled?: boolean;
  isOfferPopupShownOnAllPages?: boolean;
  offerPopupSecondaryLinkText?: string | null;
  offerPopupSecondaryLinkUrl?: string | null;
  isOfferPopupOverlayDimmed?: boolean;
  offerPopupEmailPlaceholder?: string | null;
  offerPopupPromoCodeCopyLabel?: string | null;
  offerPopupSubmitError?: string | null;
  isBannerEnabled?: boolean;
  bannerText?: string | null;
  bannerPlacement?: 'TOP' | 'BOTTOM';
  isBannerClickableToSignupUrl?: boolean;
  isHeadingEnabled?: boolean;
  headingText?: string | null;
  headingTarget?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
  headingPlacement?: 'PREPEND' | 'APPEND' | 'REPLACE';
  isHeadingStyled?: boolean;
  isHeadingClickableToSignupUrl?: boolean;
  pageTitleReplacement?: string | null;
  referrerNameFormat?: 'FIRST' | 'FIRST_LAST_INITIAL' | 'FIRST_LAST';
  referrerNameFallback?: string | null;
};

/** Which pages the website widget appears on. */
export type CampaignDesignWidgetPageRules = {
  /**
   * `ALL` shows it everywhere, `ONLY` shows it just on the listed pages, and `EXCEPT` shows it
   * everywhere but the listed pages. With no pages listed, `ONLY` and `EXCEPT` behave as `ALL`.
   */
  mode?: 'ALL' | 'ONLY' | 'EXCEPT';

  /**
   * The pages to match. Use `*` to stand in for anything, as in `/portal/*`. A path on its own,
   * such as `/pricing`, matches that path on every domain you have installed. Web addresses are
   * matched without their query string. Up to 20 entries of at most 500 characters each.
   */
  patterns?: Array<string>;
};

/**
 * The website widget — the invite that sits in a corner of your own site. It renders as a button
 * or as a card, and its card folds back into the button when a visitor closes it. Both audience
 * switches start off, so a program shows nothing until you turn one on.
 */
export type CampaignDesignWidget = {
  /** Whether people who have not joined your program see the widget. */
  isShownToNewVisitors?: boolean;

  /** Whether people who have already joined see the widget. */
  isShownToParticipants?: boolean;

  /**
   * `BUTTON` is a single button in the corner. `CARD` is a small card with a heading, a line of
   * text, and a button, which a visitor can close.
   */
  appearance?: 'BUTTON' | 'CARD';

  /** Whether the card shows a picture above its text. Ignored by the button. */
  isArtShown?: boolean;

  /** The picture shown at the top of the card. Maximum 500 characters. */
  artImageUrl?: string | null;

  /**
   * What people who have not joined read. It is the button's label, and the card's heading.
   * Maximum 100 characters.
   */
  newVisitorText?: string | null;

  /**
   * What people who have already joined read. It is the button's label, and the card's heading.
   * Maximum 100 characters.
   */
  participantText?: string | null;

  /** The line under the heading for people who have not joined. Card only. Maximum 255 characters. */
  newVisitorDescription?: string | null;

  /**
   * The line under the heading for people who have already joined. Card only. Maximum 255
   * characters.
   */
  participantDescription?: string | null;

  /** The label on the card's button, which opens your program. Maximum 100 characters. */
  buttonText?: string | null;

  /**
   * The small drawing on the widget. It takes the color you chose for the widget, so it matches
   * on any background. Send `null` for no drawing.
   */
  markKey?:
    | 'GIFT'
    | 'TICKET'
    | 'DISCOUNT'
    | 'CASH'
    | 'PERK'
    | 'SHARE'
    | 'LINK'
    | 'INVITE'
    | 'FRIENDS'
    | 'THANKS'
    | null;

  /**
   * Your own uploaded image instead of a `markKey` drawing. `CUSTOM` uses `iconImageUrl`; `NONE`
   * shows no image. `DEFAULT` is the old GrowSurf image: a program already set to it keeps it and
   * can read it back, but it cannot be set. Requires a paid plan.
   */
  icon?: 'CUSTOM' | 'NONE' | 'DEFAULT';

  /** Your own image, used when `icon` is `CUSTOM`. Maximum 500 characters. Requires a paid plan. */
  iconImageUrl?: string | null;

  /** Which corner or edge of the page the widget sits against. */
  placement?: 'TOP_LEFT' | 'TOP_CENTER' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_CENTER' | 'BOTTOM_RIGHT';

  /**
   * How far in from the left or right edge, in pixels, following `placement`. For a centered
   * placement it becomes an even gap on both sides. 0 to 400.
   */
  offsetSide?: number;

  /**
   * How far in from the top or bottom edge, in pixels, following `placement`. Raise it to clear a
   * chat button that already sits in that corner. 0 to 400.
   */
  offsetEdge?: number;

  /**
   * When the card appears: right away, after `revealDelaySeconds`, or once the visitor scrolls
   * halfway down the page. The button always appears right away.
   */
  reveal?: 'IMMEDIATE' | 'DELAY' | 'SCROLL';

  /** Seconds to wait before showing the card, when `reveal` is `DELAY`. 0 to 120. */
  revealDelaySeconds?: number;

  /**
   * Days before the card is offered again to someone who closed it. Until then they keep the
   * button, so they can still open your program. `0` never offers it again. 0 to 365.
   */
  returnAfterDays?: number;

  /**
   * Whether to leave phones alone. On small screens the card fills the bottom of the page, so
   * some programs turn it off there.
   */
  isHiddenOnMobile?: boolean;

  /**
   * Which pages the widget appears on. This controls the widget only — referral tracking,
   * embedded elements, and opening the window from your own code keep working on every page
   * where GrowSurf is installed.
   */
  pageRules?: CampaignDesignWidgetPageRules;
};

/** Claim Offer Popup theme colors. */
export type CampaignDesignOfferPopupTheme = {
  color?: string | null;
  backgroundColor?: string | null;
};

/** Website widget theme colors. */
export type CampaignDesignWidgetTheme = {
  /** Text and drawing color on the button, and on the card's own button. */
  color?: string | null;

  /** Fill color of the button, and of the card's own button. */
  backgroundColor?: string | null;

  /** Corner rounding, as a CSS length such as `12px`. */
  borderRadius?: string | null;
};

/** Design theme fields documented by the REST contract. */
export type CampaignDesignTheme = {
  referredExperienceOfferPopup?: CampaignDesignOfferPopupTheme;
  widget?: CampaignDesignWidgetTheme;
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

/** A Traffic report date range. */
export type CampaignDesignTrafficInsightsDateRange =
  'LAST_7_DAYS' | 'LAST_30_DAYS' | 'LAST_90_DAYS' | 'ALL_TIME';

/** One visit count at the top of the Traffic report. */
export type CampaignDesignTrafficInsightsMetric = {
  /** Whether participants see this count. */
  isVisible?: boolean;

  /** The count's name. Maximum 100 characters. */
  label?: string;

  /** A short explanation under the name. Send an empty string to hide it. Maximum 255 characters. */
  helperText?: string;
};

/** One breakdown table in the Traffic report. */
export type CampaignDesignTrafficInsightsBreakdown = {
  /** Whether participants can choose this breakdown. */
  isVisible?: boolean;

  /** The breakdown's name in the picker. Maximum 100 characters. */
  label?: string;

  /**
   * Names for the levels this breakdown can be read at (`utm`, `geo`, and `technology` only),
   * such as `country` or `city` for `geo`.
   */
  levels?: Record<string, string>;

  /**
   * Names for rows from a fixed set (`referrer`, `technology`, and `trigger` only), such as
   * `DIRECT` for `referrer` or `QR_CODE` for `trigger`.
   */
  values?: Record<string, string>;
};

/**
 * The Traffic report participants can open from the GrowSurf window. It shows visits to their
 * share link over time and where those visits came from. It starts on for new affiliate programs
 * and hidden for referral programs. `GET` returns every setting, with the default copy for anything
 * you have not changed. `PATCH` only the settings you want to change; the rest keep their current
 * values. Labels cannot be blank.
 */
export type CampaignDesignTrafficInsights = {
  /** Whether participants can open the Traffic report. */
  isPublicDisplayed?: boolean;

  /** The report heading. Maximum 100 characters. */
  title?: string;

  /** The label in front of the share link picker. Maximum 100 characters. */
  trafficForLabel?: string;

  /** The share link picker option that combines all of the participant's links. Maximum 100 characters. */
  allLinksLabel?: string;

  /** The heading above the visits chart. Maximum 100 characters. */
  visitsOverTimeTitle?: string;

  /** The heading above the breakdown table. Maximum 100 characters. */
  breakdownsTitle?: string;

  /** The text of the row or tab that opens the report. Maximum 100 characters. */
  viewTrafficInsightsLinkText?: string;

  /** The text of the link back from the report. Maximum 100 characters. */
  backLinkText?: string;

  /** The message shown before the participant's link has any visits. Can be empty. Maximum 255 characters. */
  emptyState?: string;

  /** The row name for visits that have no value for the chosen breakdown. Maximum 100 characters. */
  notSetLabel?: string;

  /**
   * Messages shown when the report cannot show everything: `error`, `unavailable`, `partial`,
   * `partialFrom` (`{{date}}` is replaced with the first available date), `breakdownPartial`, and
   * `breakdownEmpty`. Maximum 255 characters each.
   */
  messages?: {
    error?: string;
    unavailable?: string;
    partial?: string;
    partialFrom?: string;
    breakdownPartial?: string;
    breakdownEmpty?: string;
  };

  /** The date range picker labels. Maximum 100 characters each. */
  dateRangeLabels?: Partial<Record<CampaignDesignTrafficInsightsDateRange, string>>;

  /** The date range the report opens with. */
  defaultDateRange?: CampaignDesignTrafficInsightsDateRange;

  /** The two visit counts at the top of the report. */
  metrics?: {
    visits?: CampaignDesignTrafficInsightsMetric;
    uniqueVisitors?: CampaignDesignTrafficInsightsMetric;
  };

  /** The tables that show where visits came from. You can hide or rename each one. */
  breakdowns?: {
    utm?: CampaignDesignTrafficInsightsBreakdown;
    referrer?: CampaignDesignTrafficInsightsBreakdown;
    destination?: CampaignDesignTrafficInsightsBreakdown;
    geo?: CampaignDesignTrafficInsightsBreakdown;
    technology?: CampaignDesignTrafficInsightsBreakdown;
    trigger?: CampaignDesignTrafficInsightsBreakdown;
  };
};

/**
 * A partial `CampaignDesign` — only the fields you send are changed. The set of keys
 * is intentionally left open. `GET` the configured fields first, then `PATCH` back only
 * the fields you want to change.
 */
export type DesignUpdateParams = CampaignDesign;

export declare namespace Design {
  export {
    type CampaignDesign as CampaignDesign,
    type CampaignDesignOfferPopupTheme as CampaignDesignOfferPopupTheme,
    type CampaignDesignOpenSection as CampaignDesignOpenSection,
    type CampaignDesignReferredExperience as CampaignDesignReferredExperience,
    type CampaignDesignResources as CampaignDesignResources,
    type CampaignDesignResourcesIcon as CampaignDesignResourcesIcon,
    type CampaignDesignTheme as CampaignDesignTheme,
    type CampaignDesignTrafficInsights as CampaignDesignTrafficInsights,
    type CampaignDesignTrafficInsightsBreakdown as CampaignDesignTrafficInsightsBreakdown,
    type CampaignDesignTrafficInsightsDateRange as CampaignDesignTrafficInsightsDateRange,
    type CampaignDesignTrafficInsightsMetric as CampaignDesignTrafficInsightsMetric,
    type CampaignDesignWidget as CampaignDesignWidget,
    type CampaignDesignWidgetPageRules as CampaignDesignWidgetPageRules,
    type CampaignDesignWidgetTheme as CampaignDesignWidgetTheme,
    type DesignUpdateParams as DesignUpdateParams,
    type ParticipantLoginDesign as ParticipantLoginDesign,
    type PayoutDestinationConfirmationDesign as PayoutDestinationConfirmationDesign,
    type PayoutDestinationConfirmationErrorMessages as PayoutDestinationConfirmationErrorMessages,
  };
}
