// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CampaignAPI from './campaign';
import * as CommissionAPI from './commission';
import * as DesignAPI from './design';
import {
  CampaignDesign,
  CampaignDesignResources,
  CampaignDesignResourcesIcon,
  Design as DesignAPIDesign,
  DesignUpdateParams,
} from './design';
import * as EmailsAPI from './emails';
import { CampaignEmails, EmailUpdateParams, Emails as EmailsAPIEmails } from './emails';
import * as InstallationAPI from './installation';
import {
  CampaignInstallation,
  InstallationUpdateParams,
  Installation as InstallationAPIInstallation,
} from './installation';
import * as OptionsAPI from './options';
import { CampaignOptions, OptionUpdateParams, Options as OptionsAPIOptions } from './options';
import {
  Commission as CommissionAPICommission,
  CommissionApproveParams,
  CommissionApproveResponse,
  CommissionDeleteParams,
  CommissionDeleteResponse,
} from './commission';
import * as ParticipantAPI from './participant';
import * as ProgramResourcesAPI from './program-resources';
import {
  DeleteProgramResourceResponse,
  ProgramResource,
  ProgramResourceCreateParams,
  ProgramResourceDeleteParams,
  ProgramResourceFile,
  ProgramResourceListResponse,
  ProgramResourceModerationStatus,
  ProgramResources as ProgramResourcesAPIProgramResources,
  ProgramResourceType,
  ProgramResourceUpdateParams,
  ProgramResourceUploadResult,
  ProgramResourceUploadTicket,
  ProgramResourceUploadTicketParams,
} from './program-resources';
import {
  Create,
  FraudRiskLevel,
  Participant,
  ParticipantAddParams,
  ParticipantCancelDelayedReferralParams,
  ParticipantCancelDelayedReferralResponse,
  ParticipantDeleteParams,
  ParticipantDeleteResponse,
  ParticipantListCommissionsParams,
  ParticipantListPayoutsParams,
  ParticipantListReferralsParams,
  ParticipantListRewardsParams,
  ParticipantListRewardsResponse,
  ParticipantRecordTransactionParams,
  ParticipantRecordTransactionResponse,
  ParticipantRefundTransactionParams,
  ParticipantRefundTransactionResponse,
  ParticipantResource,
  ParticipantRetrieveParams,
  ParticipantReward,
  ParticipantSendInvitesParams,
  ParticipantSendInvitesResponse,
  ParticipantTriggerReferralParams,
  ParticipantTriggerReferralResponse,
  ParticipantUpdateParams,
  ReferralSource,
  ReferralStatus,
} from './participant';
import * as RewardAPI from './reward';
import {
  Reward as RewardAPIReward,
  RewardApproveParams,
  RewardApproveResponse,
  RewardDeleteParams,
  RewardDeleteResponse,
  RewardFulfillParams,
  RewardFulfillResponse,
} from './reward';
import * as RewardsAPI from './rewards';
import {
  CampaignRewardListResponse,
  DeleteRewardResponse,
  RewardCreateParams,
  RewardTaxValuation,
  RewardUpdateParams,
  Rewards as RewardsAPIRewards,
} from './rewards';
import * as WebhooksAPI from './webhooks';
import {
  DeleteWebhookResponse,
  Webhook,
  WebhookCreateParams,
  WebhookDeleteParams,
  WebhookEvent,
  WebhookListResponse,
  WebhookTestParams,
  WebhookTestResponse,
  WebhookUpdateParams,
  Webhooks as WebhooksAPIWebhooks,
} from './webhooks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CampaignResource extends APIResource {
  participant: ParticipantAPI.ParticipantResource = new ParticipantAPI.ParticipantResource(this._client);
  reward: RewardAPI.Reward = new RewardAPI.Reward(this._client);
  commission: CommissionAPI.Commission = new CommissionAPI.Commission(this._client);
  rewards: RewardsAPI.Rewards = new RewardsAPI.Rewards(this._client);
  resources: ProgramResourcesAPI.ProgramResources = new ProgramResourcesAPI.ProgramResources(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  design: DesignAPI.Design = new DesignAPI.Design(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  options: OptionsAPI.Options = new OptionsAPI.Options(this._client);
  installation: InstallationAPI.Installation = new InstallationAPI.Installation(this._client);

  /**
   * Retrieves a program for the given program ID.
   *
   * @example
   * ```ts
   * const campaign = await client.campaign.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.get(path`/campaign/${id}`, options);
  }

  /**
   * Retrieves a list of your programs. Deleted programs are not returned.
   *
   * @example
   * ```ts
   * const campaigns = await client.campaign.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/campaigns', options);
  }

  /**
   * Creates a new program, plus any optional campaign rewards. The new program is
   * created in `DRAFT` status and owned by the API key's bound team.
   *
   * @example
   * ```ts
   * const campaign = await client.campaign.create({
   *   type: 'REFERRAL',
   * });
   * ```
   */
  create(body: CampaignCreateParams, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post('/campaigns', { body, ...options });
  }

  /**
   * Updates a program's identity and lifecycle. Only the fields you send are
   * changed. `type`, `urlId`, and `currencyISO` are immutable. Editor-tab
   * configuration (design, emails, options, installation) is edited via the
   * dedicated config sub-resources, not here. The program cannot be deleted via
   * this endpoint.
   *
   * @example
   * ```ts
   * const campaign = await client.campaign.update('id', {});
   * ```
   */
  update(id: string, body: CampaignUpdateParams, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.patch(path`/campaign/${id}`, { body, ...options });
  }

  /**
   * Clones an existing program into a new `DRAFT` program. Integrations and
   * credentials are not copied; active rewards are cloned.
   *
   * @example
   * ```ts
   * const campaign = await client.campaign.clone('id');
   * ```
   */
  clone(id: string, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post(path`/campaign/${id}/clone`, options);
  }

  /**
   * Creates or returns a participant using the same input behavior as Add
   * Participant, then returns a participant-scoped token for GrowSurf mobile SDK
   * participant endpoints. Use this endpoint from your backend after your mobile app
   * authenticates a signed-in user. The program must have mobile SDK access enabled.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.createMobileParticipantToken('id', {
   *     email: 'gavin@hooli.com',
   *     firstName: 'Gavin',
   *     ipAddress: '203.0.113.10',
   *     lastName: 'Belson',
   *     metadata: {
   *       companyName: 'Hooli',
   *       industry: 'Software',
   *     },
   *     mobileInstanceId:
   *       '5f7d0f4c-3e7c-4aa9-8c41-d81d998f0bb1',
   *     referredBy: 'richard-h8kp6l',
   *   });
   * ```
   */
  createMobileParticipantToken(
    id: string,
    body: CampaignCreateMobileParticipantTokenParams,
    options?: RequestOptions,
  ): APIPromise<CampaignCreateMobileParticipantTokenResponse> {
    return this._client.post(path`/campaign/${id}/mobile-participant-token`, { body, ...options });
  }

  /**
   * Lists an affiliate program's applications, newest first. Applications exist on
   * programs that review public signups (an `affiliateApplicationMode` of
   * `MANUAL_REVIEW` or `AUTO_APPROVE`). A pending applicant is not a participant until
   * their application is approved.
   *
   * @example
   * ```ts
   * const affiliateApplications =
   *   await client.campaign.listAffiliateApplications('id');
   * ```
   */
  listAffiliateApplications(
    id: string,
    query: CampaignListAffiliateApplicationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AffiliateApplicationListResponse> {
    return this._client.get(path`/campaign/${id}/affiliate-applications`, { query, ...options });
  }

  /**
   * Returns one affiliate application, including its submitted form answers.
   *
   * @example
   * ```ts
   * const affiliateApplication =
   *   await client.campaign.retrieveAffiliateApplication(
   *     'applicationId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieveAffiliateApplication(
    applicationID: string,
    params: CampaignRetrieveAffiliateApplicationParams,
    options?: RequestOptions,
  ): APIPromise<AffiliateApplication> {
    const { id } = params;
    return this._client.get(path`/campaign/${id}/affiliate-applications/${applicationID}`, options);
  }

  /**
   * Decides a pending application. Set `status` to `APPROVED` to enroll the applicant
   * (this creates the participant, or upgrades an existing participant with the same
   * email), or to `DENIED` with an optional `rejectionReason`. A denied applicant may
   * reapply after the program's reapplication cooldown; send an earlier
   * `reapplyAllowedAt` (without `status`) to shorten that wait for one applicant.
   * Provide exactly one of `status` or `reapplyAllowedAt`. Denial-only fields are only
   * valid with `status: 'DENIED'`. Approval is idempotent: repeating it returns the
   * same participant.
   *
   * @example
   * ```ts
   * const affiliateApplication =
   *   await client.campaign.reviewAffiliateApplication(
   *     'applicationId',
   *     { id: 'id' },
   *   );
   * ```
   */
  reviewAffiliateApplication(
    applicationID: string,
    params: CampaignReviewAffiliateApplicationParams,
    options?: RequestOptions,
  ): APIPromise<AffiliateApplication> {
    const { id, ...body } = params;
    return this._client.patch(path`/campaign/${id}/affiliate-applications/${applicationID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists an affiliate program's enrollment invites, newest first.
   *
   * @example
   * ```ts
   * const affiliateInvites =
   *   await client.campaign.listAffiliateInvites('id');
   * ```
   */
  listAffiliateInvites(
    id: string,
    query: CampaignListAffiliateInvitesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AffiliateInviteListResponse> {
    return this._client.get(path`/campaign/${id}/affiliate-invites`, { query, ...options });
  }

  /**
   * Invites someone to join the affiliate program. GrowSurf emails them a single-use
   * accept link; accepting it enrolls them as an approved affiliate without going
   * through the public application. One active invite can exist per email address.
   *
   * @example
   * ```ts
   * const affiliateInvite = await client.campaign.createAffiliateInvite('id', {
   *   email: 'erlich@aviato.com',
   *   firstName: 'Erlich',
   *   lastName: 'Bachman',
   * });
   * ```
   */
  createAffiliateInvite(
    id: string,
    body: CampaignCreateAffiliateInviteParams,
    options?: RequestOptions,
  ): APIPromise<AffiliateInvite> {
    return this._client.post(path`/campaign/${id}/affiliate-invites`, { body, ...options });
  }

  /**
   * Revokes a pending invite. Its emailed accept link stops working immediately.
   *
   * @example
   * ```ts
   * const affiliateInvite =
   *   await client.campaign.revokeAffiliateInvite('inviteId', {
   *     id: 'id',
   *   });
   * ```
   */
  revokeAffiliateInvite(
    inviteID: string,
    params: CampaignRevokeAffiliateInviteParams,
    options?: RequestOptions,
  ): APIPromise<AffiliateInvite> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/affiliate-invites/${inviteID}`, options);
  }

  /**
   * Re-sends a pending invite with a fresh accept link (the previous link stops
   * working). Resends are rate limited per invite; retry after a few minutes if a
   * resend was just sent.
   *
   * @example
   * ```ts
   * const affiliateInvite =
   *   await client.campaign.resendAffiliateInvite('inviteId', {
   *     id: 'id',
   *   });
   * ```
   */
  resendAffiliateInvite(
    inviteID: string,
    params: CampaignResendAffiliateInviteParams,
    options?: RequestOptions,
  ): APIPromise<AffiliateInvite> {
    const { id } = params;
    return this._client.post(path`/campaign/${id}/affiliate-invites/${inviteID}/resend`, options);
  }

  /**
   * **Affiliate programs only.** Retrieves a paged list of all participant commissions
   * in an affiliate program.
   *
   * @example
   * ```ts
   * const participantCommissionList =
   *   await client.campaign.listCommissions('id');
   * ```
   */
  listCommissions(
    id: string,
    query: CampaignListCommissionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParticipantCommissionList> {
    return this._client.get(path`/campaign/${id}/commissions`, { query, ...options });
  }

  /**
   * Retrieves participants in leaderboard order for the specified leaderboard type.
   *
   * @example
   * ```ts
   * const participantList =
   *   await client.campaign.listLeaderboard('id');
   * ```
   */
  listLeaderboard(
    id: string,
    query: CampaignListLeaderboardParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParticipantList> {
    return this._client.get(path`/campaign/${id}/leaderboard`, { query, ...options });
  }

  /**
   * Retrieves a paged list of participants in a program.
   *
   * @example
   * ```ts
   * const participantList =
   *   await client.campaign.listParticipants('id');
   * ```
   */
  listParticipants(
    id: string,
    query: CampaignListParticipantsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParticipantList> {
    return this._client.get(path`/campaign/${id}/participants`, { query, ...options });
  }

  /**
   * **Affiliate programs only.** Retrieves a paged list of all participant payouts in
   * an affiliate program.
   *
   * @example
   * ```ts
   * const participantPayoutList =
   *   await client.campaign.listPayouts('id');
   * ```
   */
  listPayouts(
    id: string,
    query: CampaignListPayoutsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ParticipantPayoutList> {
    return this._client.get(path`/campaign/${id}/payouts`, { query, ...options });
  }

  /**
   * Retrieves a list of all referrals and email invites made by participants in a
   * program.
   *
   * @example
   * ```ts
   * const referralList = await client.campaign.listReferrals(
   *   'id',
   * );
   * ```
   */
  listReferrals(
    id: string,
    query: CampaignListReferralsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReferralList> {
    return this._client.get(path`/campaign/${id}/referrals`, { query, ...options });
  }

  /**
   * Retrieves analytics for a program. Pass `interval` to also get a time-series
   * (`series`) alongside the totals, and `include` to add previous-period totals,
   * status breakdowns, derived rates, email performance, or participant engagement.
   * Add `engagement` for covered participant activity totals, comparisons, series,
   * and breakdowns. Engagement returns explicit unavailable states when coverage is
   * unknown. Add `email` for `sent` (accepted for delivery), `delivered`, `opened`,
   * `clicked`, `bounced`, and `spamComplaints` metrics plus per-email-type
   * breakdowns. Email rates are ratios from `0` to `1`, and `isPartial` identifies
   * windows that begin before complete coverage.
   *
   * @example
   * ```ts
   * const response = await client.campaign.retrieveAnalytics(
   *   'id',
   * );
   * ```
   */
  retrieveAnalytics(
    id: string,
    query: CampaignRetrieveAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignRetrieveAnalyticsResponse> {
    return this._client.get(path`/campaign/${id}/analytics`, { query, ...options });
  }

  /**
   * Retrieves activation cohorts for a program. Each cohort follows eligible
   * participants from enrollment through portal views, sharing, referral visits,
   * leads, and credited referrals. Results include explicit coverage and unavailable
   * states so an unknown value is not mistaken for zero.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.retrieveActivationAnalytics(
   *     'id',
   *   );
   * ```
   */
  retrieveActivationAnalytics(
    id: string,
    query: CampaignRetrieveActivationAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CampaignActivationAnalyticsResponse> {
    return this._client.get(path`/campaign/${id}/analytics/activation`, { query, ...options });
  }
}

export interface Campaign {
  id: string;

  impressionCount: number;

  inviteCount: number;

  name: string;

  participantCount: number;

  referralCount: number;

  rewards: Array<Campaign.Reward>;

  status: 'DRAFT' | 'PENDING' | 'IN_PROGRESS' | 'COMPLETE' | 'CANCELLED' | 'DELETED';

  type: 'REFERRAL' | 'AFFILIATE';

  winnerCount: number;

  currencyISO?: string | null;
}

export namespace Campaign {
  export interface Reward {
    id: string;

    isUnlimited: boolean;

    /**
     * Shallow custom metadata object.
     */
    metadata: { [key: string]: unknown };

    type: 'SINGLE_SIDED' | 'DOUBLE_SIDED' | 'MILESTONE' | 'LEADERBOARD' | 'AFFILIATE';

    commissionStructure?: CampaignAPI.CommissionStructure | null;

    conversionsRequired?: number | null;

    couponCode?: string | null;

    description?: string | null;

    /**
     * The event that earns this Campaign Reward. Present only for `SINGLE_SIDED`,
     * `DOUBLE_SIDED`, and `MILESTONE` referral rewards. Legacy Campaign Rewards return
     * `CONVERSION`.
     */
    event?: 'LEAD' | 'CONVERSION';

    imageUrl?: string | null;

    /**
     * Whether the reward is enabled (visible and awardable). When `false`, the reward is
     * disabled: hidden from participants and no longer awarded, including participants
     * who already earned it.
     */
    isVisible?: boolean;

    /**
     * `-1` represents an unlimited reward in REST responses.
     */
    limit?: number | null;

    limitDuration?: 'IN_TOTAL' | 'PER_MONTH' | 'PER_YEAR' | null;

    nextMilestonePrefix?: string | null;

    nextMilestoneSuffix?: string | null;

    numberOfWinners?: number | null;

    order?: number | null;

    /**
     * Legacy static coupon code shown to the referred friend in the reward-won email
     * and webhook (double-sided rewards). Display text only; superseded by a connected
     * billing integration's issued coupon when one exists.
     */
    referralCouponCode?: string | null;

    referralDescription?: string | null;

    referredRewardUpfront?: boolean;

    /**
     * Tax treatment override for the referred friend's side of a double-sided reward. Defaults
     * to the program's confirmed default.
     */
    referredValue?: RewardsAPI.RewardTaxValuation | null;

    /**
     * The reward title (internal label).
     */
    title?: string | null;

    /**
     * Tax valuation for the reward (the referrer's side of a double-sided reward).
     * Used by tax documentation / 1099 reporting.
     */
    value?: RewardsAPI.RewardTaxValuation | null;
  }
}

export interface CommissionStructure {
  amount?: number | null;

  amountISO?: string | null;

  approvalRequired?: boolean | null;

  duration?: string | null;

  durationInMonths?: number | null;

  /**
   * The event that generates a commission. `CLICK` and `LEAD` require `FIXED`
   * with a positive `amount`; `amountISO` defaults to the program currency when
   * omitted. `SALE` supports `FIXED` or `PERCENT`. Missing legacy values read as
   * `SALE`.
   */
  event?: 'CLICK' | 'LEAD' | 'SALE' | null;

  hasIntro?: boolean | null;

  hasMaxAmount?: boolean | null;

  holdDuration?: number | null;

  introAmount?: number | null;

  introAmountISO?: string | null;

  introDuration?: string | null;

  introDurationInMonths?: number | null;

  introPercent?: number | null;

  introType?: string | null;

  maxAmount?: number | null;

  maxAmountISO?: string | null;

  minPaidReferrals?: number | null;

  percent?: number | null;

  type?: 'PERCENT' | 'FIXED' | null;

  [k: string]: unknown;
}

export interface ParticipantCommissionList {
  commissions: Array<ParticipantCommissionList.Commission>;

  limit: number;

  nextId: string | null;
}

export namespace ParticipantCommissionList {
  export interface Commission {
    id: string;

    amount: number | null;

    createdAt: number;

    currencyISO: string;

    /** The event that created the commission. */
    event: 'LEAD' | 'SALE';

    referredId: string;

    referrerId: string;

    saleAmount: number | null;

    status: 'PENDING' | 'APPROVED' | 'PAID' | 'REVERSED' | 'DELETED';

    amountInCampaignCurrency?: number | null;

    approvedAt?: number | null;

    campaignCurrencyISO?: string | null;

    exchangeRate?: number | null;

    exchangeRateAt?: number | null;

    fxError?: string | null;

    holdDuration?: number | null;

    paidAt?: number | null;

    payoutQueuedAt?: number | null;

    provider?: string | null;

    reversedAt?: number | null;

    saleAmountInCampaignCurrency?: number | null;
  }
}

export interface ParticipantList {
  limit: number;

  nextId: string | null;

  participants: Array<ParticipantAPI.Participant>;
}

export interface ParticipantPayoutList {
  limit: number;

  nextId: string | null;

  payouts: Array<ParticipantPayoutList.Payout>;
}

export namespace ParticipantPayoutList {
  export interface Payout {
    id: string;

    amount: number;

    commissionIds: Array<string>;

    createdAt: number;

    currencyISO: string;

    participantId: string;

    status: 'UPCOMING' | 'QUEUED' | 'ISSUED' | 'FAILED' | 'REVERSED';

    amountInCampaignCurrency?: number | null;

    campaignCurrencyISO?: string | null;

    exchangeRate?: number | null;

    exchangeRateAt?: number | null;

    failedAt?: number | null;

    fxError?: string | null;

    issuedAt?: number | null;

    provider?: string | null;

    queuedAt?: number | null;

    reversedAt?: number | null;
  }
}

export interface ReferralList {
  limit: number;

  more: boolean;

  referrals: Array<ReferralList.Referral>;

  nextId?: string | null;

  nextOffset?: number | null;
}

export namespace ReferralList {
  export interface Referral {
    id: string;

    createdAt: number;

    email: string;

    referralStatus: ParticipantAPI.ReferralStatus;

    referredBy: string;

    updatedAt: number;

    firstName?: string | null;

    lastName?: string | null;
  }
}

export interface CampaignListResponse {
  campaigns: Array<Campaign>;
}

export interface CampaignCreateMobileParticipantTokenResponse {
  /**
   * Token lifetime in seconds.
   */
  expiresIn: number;

  /**
   * Whether this request created a new participant. Returns false when the
   * participant already existed.
   */
  isNew: boolean;

  participant: ParticipantAPI.Participant;

  /**
   * Participant-scoped bearer token for GrowSurf mobile SDK participant endpoints.
   */
  participantToken: string;
}

export type AnalyticsAvailability = 'AVAILABLE' | 'PARTIAL' | 'UNAVAILABLE';

export type AnalyticsUnavailableReason =
  | 'COVERAGE_UNAVAILABLE'
  | 'PRE_COVERAGE'
  | 'PARTIAL_COVERAGE'
  | 'INSUFFICIENT_COVERAGE'
  | 'EMPTY_DENOMINATOR'
  | 'QUERY_LIMIT_EXCEEDED'
  | 'PARTICIPANT_NOT_ELIGIBLE';

/**
 * Current participant engagement for the selected program, period, and platform.
 */
export interface CampaignEngagementAnalytics {
  coverageStartAt: number | null;

  metricContractVersion: number;

  programType: 'REFERRAL' | 'AFFILIATE';

  timezone: string;

  interval: 'day' | 'week' | 'month';

  platform: CampaignEngagementAnalytics.PlatformFilter;

  period: CampaignEngagementAnalytics.Period;

  state: AnalyticsAvailability;

  reason: AnalyticsUnavailableReason | null;

  totals: CampaignEngagementAnalytics.Totals;

  previousPeriod: CampaignEngagementAnalytics.PreviousPeriod;

  comparison: CampaignEngagementAnalytics.Comparison;

  series: Array<CampaignEngagementAnalytics.SeriesPoint>;

  breakdowns: CampaignEngagementAnalytics.Breakdowns;
}

export namespace CampaignEngagementAnalytics {
  export interface Metric {
    state: AnalyticsAvailability;

    value: number | null;

    reason: AnalyticsUnavailableReason | null;

    delta?: number;
  }

  export interface Totals {
    activeParticipants: Metric;

    sharingParticipants: Metric;

    sharingRate: Metric;

    repeatActiveParticipants: Metric;

    repeatSharingParticipants: Metric;

    retainedActiveParticipants: Metric;

    portalViews: Metric;

    shareActions: Metric;
  }

  export interface Period {
    from: number;

    to: number;

    effectiveFrom: number | null;

    previousFrom: number;

    previousTo: number;
  }

  export interface PlatformFilter {
    requested: 'ALL' | 'WEB' | 'IOS' | 'ANDROID';

    applied: 'ALL' | 'WEB' | 'IOS' | 'ANDROID';

    state: AnalyticsAvailability;
  }

  export interface PreviousPeriod {
    state: AnalyticsAvailability;

    reason: AnalyticsUnavailableReason | null;

    totals: Totals | null;
  }

  export interface ComparisonMetrics {
    activeParticipants?: Metric;

    sharingParticipants?: Metric;

    repeatActiveParticipants?: Metric;

    repeatSharingParticipants?: Metric;

    portalViews?: Metric;

    shareActions?: Metric;
  }

  export interface Comparison {
    state: AnalyticsAvailability;

    reason: AnalyticsUnavailableReason | null;

    metrics: ComparisonMetrics | null;
  }

  export interface SeriesPoint {
    from: number;

    to: number;

    activeParticipants: number;

    sharingParticipants: number;

    portalViews: number;

    shareActions: number;
  }

  export interface PlatformBreakdown {
    key: 'WEB' | 'IOS' | 'ANDROID';

    activeParticipants: number;

    sharingParticipants: number;

    portalViews: number;

    shareActions: number;
  }

  export interface PortalSourceBreakdown {
    key:
      | 'DEFAULT_LAUNCHER'
      | 'SDK_OPEN'
      | 'CSS_CLASS'
      | 'EMBEDDABLE_ELEMENT'
      | 'HOSTED_PORTAL'
      | 'NATIVE_WINDOW'
      | 'UNKNOWN';

    activeParticipants: number;

    portalViews: number;
  }

  export interface ShareChannelBreakdown {
    key: string;

    sharingParticipants: number;

    shareActions: number;
  }

  export interface FirstShareChannelBreakdown {
    key: string;

    sharingParticipants: number;
  }

  export interface Breakdowns {
    platforms: Array<PlatformBreakdown>;

    portalViewSources: Array<PortalSourceBreakdown>;

    shareChannels: Array<ShareChannelBreakdown>;

    firstShareChannels: Array<FirstShareChannelBreakdown>;
  }
}

/**
 * Activation cohorts for eligible participants in a referral or affiliate program.
 */
export interface CampaignActivationAnalyticsResponse {
  coverageStartAt: number | null;

  metricContractVersion: number;

  programType: 'REFERRAL' | 'AFFILIATE';

  timezone: string;

  cohortInterval: 'day' | 'week' | 'month';

  observationWindowDays: 7 | 30;

  portalViewedLabel: 'Referral portal viewed' | 'Affiliate portal viewed';

  portalViewedHelperText: string;

  aggregate: CampaignActivationAnalyticsResponse.CohortResult;

  cohorts: Array<CampaignActivationAnalyticsResponse.CohortResult>;
}

export namespace CampaignActivationAnalyticsResponse {
  export type StageKey =
    'ELIGIBLE' | 'PORTAL_VIEWED' | 'SHARE_ACTION' | 'UNIQUE_REFERRAL_VISIT' | 'LEAD' | 'CREDITED_REFERRAL';

  export type StalledSegmentKey =
    | 'ELIGIBLE_NO_PORTAL_VIEW'
    | 'PORTAL_VIEWED_NO_SHARE_ACTION'
    | 'SHARED_NO_UNIQUE_REFERRAL_VISIT'
    | 'UNIQUE_VISIT_NO_LEAD'
    | 'LEAD_NO_CREDITED_REFERRAL';

  export interface CohortBounds {
    from: number;

    to: number;

    effectiveFrom: number | null;

    maturedAt: number;

    asOf: number;

    anchorField: 'enrolledAsAdvocateAt' | 'approvedAsAffiliateAt';
  }

  export interface Stage {
    key: StageKey;

    count: number;

    conversionRateFromPrior: number | null;

    conversionRateFromEligible: number | null;

    dropOffCount: number | null;

    dropOffRate: number | null;

    medianTimeToStageMs: number | null;

    stalledSegmentKey: StalledSegmentKey | null;
  }

  export interface StageCounts {
    ELIGIBLE: number;

    PORTAL_VIEWED: number;

    SHARE_ACTION: number;

    UNIQUE_REFERRAL_VISIT: number;

    LEAD: number;

    CREDITED_REFERRAL: number;
  }

  export interface StalledSegment {
    key: StalledSegmentKey;

    fromStage: Exclude<StageKey, 'CREDITED_REFERRAL'>;

    toStage: Exclude<StageKey, 'ELIGIBLE'>;

    count: number;
  }

  export interface OutcomeCount {
    count: number;
  }

  export interface Outcomes {
    FIRST_REWARD?: OutcomeCount;

    FIRST_COMMISSION?: OutcomeCount;

    PAYOUT_SETUP_COMPLETED?: OutcomeCount;
  }

  export interface LargestDrop {
    fromStage: string;

    toStage: string;

    count: number;

    rate: number;

    stalledSegmentKey: string;

    improvementAreaKey:
      | 'PORTAL_ACCESS'
      | 'SHARING_EXPERIENCE'
      | 'SHARE_EFFECTIVENESS'
      | 'VISITOR_SIGNUP'
      | 'ATTRIBUTION_AND_QUALIFICATION';

    improvementArea: string;
  }

  export interface CohortResult {
    state: AnalyticsAvailability;

    reason: AnalyticsUnavailableReason | null;

    cohort: CohortBounds;

    strictStages: Array<Stage> | null;

    rawStageCounts: StageCounts | null;

    stalledSegments: Array<StalledSegment> | null;

    outcomes: Outcomes | null;

    largestDrop: LargestDrop | null;
  }
}

export interface CampaignRetrieveAnalyticsResponse {
  analytics: CampaignRetrieveAnalyticsResponse.Analytics;

  endDate: number;

  startDate: number;

  /**
   * Present only when `include` contains `email`.
   */
  email?: CampaignRetrieveAnalyticsResponse.Email;

  /**
   * Present only when `include` contains `engagement`.
   */
  engagement?: CampaignEngagementAnalytics;

  /**
   * Present only when `include` contains `previousPeriod`.
   */
  previousPeriod?: CampaignRetrieveAnalyticsResponse.PreviousPeriod;

  /**
   * Present only when `include` contains `rates`.
   */
  rates?: CampaignRetrieveAnalyticsResponse.Rates;

  /**
   * Present only when `interval` is `day`, `week`, or `month`. Per-period totals,
   * ascending.
   */
  series?: Array<CampaignRetrieveAnalyticsResponse.Series>;

  /**
   * Present only when `include` contains `statusCounts`.
   */
  statusCounts?: CampaignRetrieveAnalyticsResponse.StatusCounts;
}

export namespace CampaignRetrieveAnalyticsResponse {
  export interface Analytics {
    androidNativeShares?: number;

    blueskyShares?: number;

    copyRefLinkShares?: number;

    emailShares?: number;

    facebookShares?: number;

    impressions?: number;

    invites?: number;

    iosNativeShares?: number;

    linkedInShares?: number;

    messengerShares?: number;

    participants?: number;

    pinterestShares?: number;

    qrcodeShares?: number;

    redditShares?: number;

    referralCreditExpireds?: number;

    referralCreditPendings?: number;

    referrals?: number;

    smsShares?: number;

    telegramShares?: number;

    threadsShares?: number;

    /**
     * Affiliate programs only. Number of commission records.
     */
    totalCommissionCount?: number;

    /**
     * Affiliate programs only. Commissions in the smallest unit of the program
     * currency.
     */
    totalCommissions?: number;

    /**
     * Affiliate programs only. Revenue in the smallest unit of the program currency.
     */
    totalRevenue?: number;

    tumblrShares?: number;

    twitterShares?: number;

    /**
     * Affiliate programs only. Number of unique referred participants represented by
     * commissions in the requested timeframe.
     */
    uniqueCommissionReferrals?: number;

    uniqueImpressions?: number;

    wechatShares?: number;

    whatsAppShares?: number;
  }

  export interface Series {
    androidNativeShares?: number;

    blueskyShares?: number;

    copyRefLinkShares?: number;

    emailShares?: number;

    /**
     * Per-period email counts. Present only when `include` contains `email`.
     */
    email?: Series.Email;

    facebookShares?: number;

    impressions?: number;

    invites?: number;

    iosNativeShares?: number;

    linkedInShares?: number;

    messengerShares?: number;

    participants?: number;

    /**
     * Start of the period, as a Unix timestamp in milliseconds (UTC).
     */
    periodStart?: number;

    pinterestShares?: number;

    qrcodeShares?: number;

    redditShares?: number;

    referralCreditExpireds?: number;

    referralCreditPendings?: number;

    referrals?: number;

    smsShares?: number;

    telegramShares?: number;

    threadsShares?: number;

    /**
     * Affiliate programs only. Number of commission records.
     */
    totalCommissionCount?: number;

    /**
     * Affiliate programs only. Commissions in the smallest unit of the program
     * currency.
     */
    totalCommissions?: number;

    /**
     * Affiliate programs only. Revenue in the smallest unit of the program currency.
     */
    totalRevenue?: number;

    tumblrShares?: number;

    twitterShares?: number;

    /**
     * Affiliate programs only. Number of unique referred participants represented by
     * commissions in the requested timeframe.
     */
    uniqueCommissionReferrals?: number;

    uniqueImpressions?: number;

    wechatShares?: number;

    whatsAppShares?: number;
  }

  export namespace Series {
    export interface Email {
      bounced: number;
      clicked: number;
      delivered: number;
      opened: number;
      sent: number;
      spamComplaints: number;
    }
  }

  /**
   * Accepted-send and lifecycle metrics for program emails in the requested window.
   */
  export interface Email {
    bounceRate: number;
    bounced: number;
    byType: Array<Email.ByType>;
    clickRate: number;
    clicked: number;
    coverageStartDate: number | null;
    delivered: number;
    deliveryRate: number;
    isPartial: boolean;
    opened: number;
    openRate: number;
    sent: number;
    spamComplaints: number;
  }

  export namespace Email {
    export interface ByType {
      bounceRate: number;
      bounced: number;
      clickRate: number;
      clicked: number;
      delivered: number;
      deliveryRate: number;
      emailType: string;
      opened: number;
      openRate: number;
      sent: number;
      spamComplaints: number;
    }
  }

  /**
   * Totals for the equal-length window immediately preceding the requested one.
   */
  export interface PreviousPeriod {
    analytics: CampaignRetrieveAnalyticsResponse.Analytics;

    /**
     * Present when the parent request includes both `previousPeriod` and `email`.
     */
    email?: CampaignRetrieveAnalyticsResponse.Email;

    endDate: number;

    startDate: number;
  }

  /**
   * Derived referral rates, each a ratio in the range 0–1 (0 when its denominator is
   * 0).
   */
  export interface Rates {
    /**
     * `participants` divided by `uniqueImpressions`.
     */
    participationRate?: number;

    /**
     * `referrals` divided by `uniqueImpressions`.
     */
    referralConversionRate?: number;

    /**
     * Total shares across all channels divided by `participants`.
     */
    sharesPerParticipant?: number;
  }

  /**
   * Status-count breakdowns. `rewardStatus` is present for every program;
   * `affiliateStatus`, `commissionStatus`, and `payoutStatus` are present only for
   * affiliate programs. Money amounts are in minor units of `currencyISO`.
   */
  export interface StatusCounts {
    /**
     * Affiliate only. Participant counts keyed by affiliate status.
     */
    affiliateStatus?: { [key: string]: number };

    /**
     * Affiliate only. Commission counts and amounts by status.
     */
    commissionStatus?: StatusCounts.CommissionStatus;

    currencyISO?: string;

    /**
     * Affiliate only. Payout counts and amounts by status.
     */
    payoutStatus?: StatusCounts.PayoutStatus;

    rewardStatus?: StatusCounts.RewardStatus;
  }

  export namespace StatusCounts {
    /**
     * Affiliate only. Commission counts and amounts by status.
     */
    export interface CommissionStatus {
      approved?: StatusCounts.CommissionStatusMetric;

      paid?: StatusCounts.CommissionStatusMetric;

      pending?: StatusCounts.CommissionStatusMetric;

      reversed?: StatusCounts.CommissionStatusMetric;
    }

    export interface CommissionStatusMetric {
      count?: number;

      /**
       * Total commission amount in minor currency units.
       */
      totalAmount?: number;

      /**
       * Total attributed revenue in minor currency units.
       */
      totalRevenue?: number;
    }

    /**
     * Affiliate only. Payout counts and amounts by status.
     */
    export interface PayoutStatus {
      failed?: StatusCounts.PayoutStatusMetric;

      issued?: StatusCounts.PayoutStatusMetric;

      queued?: StatusCounts.PayoutStatusMetric;

      reversed?: StatusCounts.PayoutStatusMetric;

      upcoming?: StatusCounts.PayoutStatusMetric;
    }

    export interface PayoutStatusMetric {
      count?: number;

      /**
       * Total payout amount in minor currency units.
       */
      totalAmount?: number;
    }

    /**
     * Reward counts grouped by review and fulfillment status.
     */
    export interface RewardStatus {
      /**
       * Approved rewards that are fulfilled.
       */
      completed?: number;

      /**
       * Unapproved rewards awaiting review.
       */
      unapproved?: number;

      /**
       * Rewards that are approved but not fulfilled.
       */
      unfulfilled?: number;
    }
  }
}

export interface AffiliateApplication {
  /**
   * Public application ID.
   */
  id: string;

  /**
   * Configurable application responses captured from the saved form. Use `fieldId`
   * as the stable question identifier.
   */
  answers: Array<AffiliateApplication.Answer>;

  /**
   * When the application was submitted, as a Unix timestamp in milliseconds.
   */
  createdAt: number;

  /**
   * When the decision was made, in Unix milliseconds, or `null` while pending.
   */
  decidedAt: number | null;

  /**
   * Required applicant email address, or `null` after applicant data is removed under
   * the Program's retention policy.
   */
  email: string | null;

  /**
   * Required applicant first name, or `null` after applicant data is removed under the
   * Program's retention policy.
   */
  firstName: string | null;

  /**
   * Required applicant last name, or `null` after applicant data is removed under the
   * Program's retention policy.
   */
  lastName: string | null;

  /**
   * Public participant ID created or upgraded by approval, or `null` before approval.
   */
  participantId: string | null;

  /**
   * When a denied applicant may apply again, in Unix milliseconds, or `null` when not
   * applicable.
   */
  reapplyAllowedAt: number | null;

  /**
   * Reason recorded when the application was denied, or `null` before denial.
   */
  rejectionReason: string | null;

  /**
   * When the application was reviewed, in Unix milliseconds, or `null` while pending.
   */
  reviewedAt: number | null;

  /**
   * GrowSurf risk assessment. Applications that are not `LOW` risk are held for manual
   * review; `null` means no assessment was recorded.
   */
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | null;

  /**
   * Where the application is in review. Only `PENDING` applications can be decided.
   */
  status: 'PENDING' | 'APPROVED' | 'DENIED';

  /**
   * When the applicant accepted the Program Terms, in Unix milliseconds, or `null` when
   * acceptance was not required.
   */
  termsAcceptedAt: number | null;
}

export namespace AffiliateApplication {
  export interface Answer {
    /**
     * Stable key of the saved application-form field this answer belongs to.
     */
    fieldId: string;

    /**
     * Customer-configured field label captured when the applicant submitted.
     */
    label: string;

    /**
     * Saved field type that determined how the scalar answer was validated.
     */
    type: 'text' | 'textarea' | 'url' | 'country' | 'number' | 'dropdown' | 'radio' | 'checkbox';

    /**
     * Applicant answer. Text, URL, country, dropdown, and radio values are strings;
     * number values are numbers; checkbox values are booleans.
     */
    value: string | number | boolean;
  }
}

export interface AffiliateApplicationListResponse {
  /**
   * One page of the program's applications, newest first.
   */
  applications: Array<AffiliateApplication>;

  /**
   * Total number of applications matching the filter.
   */
  total: number;

  /**
   * The page size used.
   */
  limit?: number;

  /**
   * The offset this page started at.
   */
  offset?: number;
}

export interface AffiliateInvite {
  /**
   * Invite ID.
   */
  id?: string;

  /**
   * When the invite was accepted, in Unix milliseconds. `null` until accepted.
   */
  acceptedAt?: number | null;

  /**
   * When the invite was created, in Unix milliseconds.
   */
  createdAt?: number;

  /**
   * Invitee email address.
   */
  email?: string;

  /**
   * When the emailed accept link stops working, in Unix milliseconds.
   */
  expiresAt?: number;

  /**
   * Invitee first name, when provided.
   */
  firstName?: string | null;

  /**
   * Invitee last name, when provided.
   */
  lastName?: string | null;

  /**
   * When the invite email was last sent, in Unix milliseconds.
   */
  lastSentAt?: number;

  /**
   * When the invite was revoked, in Unix milliseconds. `null` unless revoked.
   */
  revokedAt?: number | null;

  /**
   * The invite's lifecycle state. Accepting a pending invite enrolls the invitee as an
   * approved affiliate.
   */
  status?: 'PENDING' | 'ACCEPTED' | 'EXPIRED' | 'REVOKED';
}

export interface AffiliateInviteListResponse {
  /**
   * One page of the program's invites, newest first.
   */
  invites: Array<AffiliateInvite>;

  /**
   * Total number of invites matching the filter.
   */
  total: number;

  /**
   * The page size used.
   */
  limit?: number;

  /**
   * The offset this page started at.
   */
  offset?: number;
}

export interface CampaignCreateParams {
  /**
   * The program type. Immutable after creation.
   */
  type: 'REFERRAL' | 'AFFILIATE';

  companyLogoImageUrl?: string;

  companyName?: string;

  /**
   * ISO 4217 currency code. Defaults to USD. Chosen when the program is created and
   * immutable afterward — it cannot be changed on update.
   */
  currencyISO?: string;

  /**
   * What the program is for, which seeds share settings that suit that audience.
   * Programs selling to businesses (`CUSTOMERS`, `USERS`, `B2B_SAAS_SELF_SERVICE`,
   * `B2B_SAAS_ENTERPRISE`) start with the LinkedIn share button visible; consumer,
   * financial, education, insurance, newsletter, and waitlist programs
   * (`B2C_SUBSCRIPTIONS`, `FINANCIAL_SERVICES`, `ONLINE_EDUCATION`,
   * `ONLINE_INSURANCE`, `SUBSCRIBERS`, `WAITLIST`) start with it hidden. Omit it and
   * every share button keeps its standard default. Set only when the program is
   * created; it is not accepted on update.
   */
  goal?:
    | 'CUSTOMERS'
    | 'USERS'
    | 'SUBSCRIBERS'
    | 'WAITLIST'
    | 'B2B_SAAS_SELF_SERVICE'
    | 'B2B_SAAS_ENTERPRISE'
    | 'B2C_SUBSCRIPTIONS'
    | 'FINANCIAL_SERVICES'
    | 'ONLINE_EDUCATION'
    | 'ONLINE_INSURANCE';

  /**
   * The program name. Defaults to a generated friendly label plus the creation date.
   */
  name?: string;

  /**
   * Optional inline rewards to create with the program.
   */
  rewards?: Array<RewardsAPI.RewardCreateParams>;
}

export interface CampaignUpdateParams {
  companyLogoImageUrl?: string;

  companyName?: string;

  name?: string;

  /**
   * The requested program status. `IN_PROGRESS` publishes or resumes the program;
   * `COMPLETE` ends it. Any other value returns a `400`.
   */
  status?: 'IN_PROGRESS' | 'COMPLETE';
}

export interface CampaignCreateMobileParticipantTokenParams {
  email: string;

  fingerprint?: string;

  firstName?: string;

  ipAddress?: string;

  /**
   * Affiliate programs only. Controls affiliate enrollment for a new participant. `true`
   * enrolls the participant with `affiliateStatus: APPROVED`; `false` creates a
   * non-affiliate without `affiliateStatus`. Existing participants are returned
   * unchanged.
   */
  isAffiliate?: boolean;

  lastName?: string;

  /**
   * Shallow custom metadata object.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Optional app-install scoped identifier for native mobile anti-fraud. Recommended
   * for mobile participant creation and mobile participant token flows. The official
   * mobile SDKs generate this as a lowercase UUID.
   */
  mobileInstanceId?: string;

  /**
   * Referral credit status; only meaningful when `referredBy` resolves to a referrer.
   * When omitted, it is derived from the program's referral trigger (`CREDIT_AWARDED`,
   * `CREDIT_PENDING`, or `CREDIT_EXPIRED`), and left unset when no referrer resolves.
   */
  referralStatus?: 'CREDIT_PENDING' | 'CREDIT_AWARDED';

  /**
   * Referrer participant ID or email address.
   */
  referredBy?: string;
}

export interface CampaignListCommissionsParams {
  /**
   * Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * ID to start the next paged result set with.
   */
  nextId?: string;

  /**
   * Participant commission status.
   */
  status?: 'PENDING' | 'APPROVED' | 'PAID' | 'REVERSED' | 'DELETED';
}

export interface CampaignListLeaderboardParams {
  /**
   * Deprecated. Use `leaderboardType=CURRENT_MONTH` instead.
   */
  isMonthly?: boolean;

  /**
   * Leaderboard ordering mode.
   */
  leaderboardType?:
    | 'ALL_TIME'
    | 'CURRENT_MONTH'
    | 'PREV_MONTH'
    | 'TOTAL_IMPRESSION_COUNT'
    | 'UNIQUE_IMPRESSION_COUNT'
    | 'BY_COMMISSIONS'
    | 'BY_REVENUE'
    | 'BY_REFERRALS'
    | 'BY_LEADS';

  /**
   * Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * ID to start the next paged result set with.
   */
  nextId?: string;
}

export interface CampaignListParticipantsParams {
  /**
   * Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * ID to start the next paged result set with.
   */
  nextId?: string;
}

export interface CampaignListPayoutsParams {
  /**
   * Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * ID to start the next paged result set with.
   */
  nextId?: string;

  /**
   * Participant payout status.
   */
  status?: 'UPCOMING' | 'QUEUED' | 'ISSUED' | 'FAILED' | 'REVERSED';
}

export interface CampaignListReferralsParams {
  /**
   * Return results in descending order when true.
   */
  desc?: boolean;

  /**
   * URL-encoded email value to filter referral results.
   */
  email?: string;

  /**
   * First name value to filter results.
   */
  firstName?: string;

  /**
   * Last name value to filter results.
   */
  lastName?: string;

  /**
   * Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * ID to start the next paged result set with.
   */
  nextId?: string;

  /**
   * Offset number used to skip through a result set.
   */
  offset?: number;

  referralStatus?: ParticipantAPI.ReferralStatus;

  /**
   * Field used to sort referral results.
   */
  sortBy?:
    'updatedAt' | 'createdAt' | 'email' | 'firstName' | 'lastName' | 'referralStatus' | 'referralTriggeredAt';
}

export interface CampaignRetrieveAnalyticsParams {
  /**
   * Last number of days to retrieve analytics for. Defaults to 365. Maximum 1825.
   */
  days?: number;

  /**
   * End date of the analytics timeframe as a Unix timestamp in milliseconds.
   * Required if `days` is not set.
   */
  endDate?: number;

  /**
   * Comma-separated list of optional data to include: `previousPeriod` adds totals for
   * the equal-length window immediately before the requested one; `statusCounts` adds
   * reward (and, for affiliate programs, affiliate/commission/payout) status breakdowns;
   * `rates` adds derived referral rates; `email` adds `sent`, `delivered`, `opened`,
   * `clicked`, `bounced`, `spamComplaints`, and per-email-type metrics. When `email` and
   * an interval are both requested, each `series` item also contains counts for emails
   * sent during that period. Combine `email` with `previousPeriod` to include the same
   * email metrics in both windows. `engagement` adds covered participant activity
   * totals, comparisons, series, and breakdowns.
   */
  include?: string;

  /**
   * When set to `day`, `week`, or `month`, the response also includes a `series` array
   * with per-period totals and uses the same bucket size for `engagement.series`.
   * Defaults to `total` (no legacy series); `engagement.series` uses daily buckets when
   * `interval` is `total` or omitted.
   */
  interval?: 'day' | 'week' | 'month' | 'total';

  /**
   * Participant platform used for `engagement`. Defaults to `ALL`.
   */
  platform?: 'ALL' | 'WEB' | 'IOS' | 'ANDROID';

  /**
   * Start date of the analytics timeframe as a Unix timestamp in milliseconds.
   * Required if `days` is not set.
   */
  startDate?: number;

  /**
   * IANA timezone used for engagement periods and buckets. Defaults to `UTC`.
   */
  timezone?: string;
}

export interface CampaignRetrieveActivationAnalyticsParams {
  /**
   * Inclusive cohort enrollment start as a Unix timestamp in milliseconds.
   */
  cohortFrom?: number;

  /**
   * Cohort bucket size. Defaults to `day`.
   */
  cohortInterval?: 'day' | 'week' | 'month';

  /**
   * Exclusive cohort enrollment end as a Unix timestamp in milliseconds.
   */
  cohortTo?: number;

  /**
   * Days after enrollment allowed for each participant to reach a stage. Defaults to
   * `30`.
   */
  observationWindowDays?: 7 | 30;

  /**
   * IANA timezone used for cohort bounds. Defaults to `UTC`.
   */
  timezone?: string;
}

export interface CampaignListAffiliateApplicationsParams {
  /**
   * How many applications to return per page (1-100).
   */
  limit?: number;

  /**
   * Offset number used to skip through a result set.
   */
  offset?: number;

  /**
   * Only return applications with this status.
   */
  status?: 'PENDING' | 'APPROVED' | 'DENIED';
}

export interface CampaignRetrieveAffiliateApplicationParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

/**
 * Either decide a pending application with `status`, or move a denied application's
 * reapplication window with `reapplyAllowedAt`. Provide exactly one of those fields.
 */
export interface CampaignReviewAffiliateApplicationParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: When denying, let the applicant reapply right away instead of waiting
   * out the program's reapplication cooldown. Only valid when `status` is `DENIED`.
   */
  allowImmediateReapply?: boolean;

  /**
   * Body param: For an already-denied application, move the reapplication window to
   * this earlier time, in Unix milliseconds. Send without `status`.
   */
  reapplyAllowedAt?: number;

  /**
   * Body param: Short reason recorded with a denial. Only valid when `status` is
   * `DENIED`. Maximum 255 characters.
   */
  rejectionReason?: string;

  /**
   * Body param: Private note recorded with a denial. Only valid when `status` is
   * `DENIED`; never shown to the applicant. Maximum 500 characters.
   */
  reviewNote?: string;

  /**
   * Body param: The decision. `APPROVED` enrolls the applicant as an affiliate;
   * `DENIED` closes the application.
   */
  status?: 'APPROVED' | 'DENIED';
}

export interface CampaignListAffiliateInvitesParams {
  /**
   * How many invites to return per page (1-100).
   */
  limit?: number;

  /**
   * Offset number used to skip through a result set.
   */
  offset?: number;

  /**
   * Only return invites with this status.
   */
  status?: 'PENDING' | 'ACCEPTED' | 'EXPIRED' | 'REVOKED';
}

export interface CampaignCreateAffiliateInviteParams {
  /**
   * Valid email address to invite. Maximum 255 characters.
   */
  email: string;

  /**
   * Invitee first name, used in the invite email. Maximum 255 characters.
   */
  firstName?: string;

  /**
   * Invitee last name. Maximum 255 characters.
   */
  lastName?: string;
}

export interface CampaignRevokeAffiliateInviteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface CampaignResendAffiliateInviteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

CampaignResource.ParticipantResource = ParticipantResource;
CampaignResource.Reward = RewardAPIReward;
CampaignResource.Commission = CommissionAPICommission;
CampaignResource.Rewards = RewardsAPIRewards;
CampaignResource.ProgramResources = ProgramResourcesAPIProgramResources;
CampaignResource.Webhooks = WebhooksAPIWebhooks;
CampaignResource.Design = DesignAPIDesign;
CampaignResource.Emails = EmailsAPIEmails;
CampaignResource.Options = OptionsAPIOptions;
CampaignResource.Installation = InstallationAPIInstallation;

export declare namespace CampaignResource {
  export {
    type Campaign as Campaign,
    type CommissionStructure as CommissionStructure,
    type AnalyticsAvailability as AnalyticsAvailability,
    type AnalyticsUnavailableReason as AnalyticsUnavailableReason,
    type CampaignEngagementAnalytics as CampaignEngagementAnalytics,
    type ParticipantCommissionList as ParticipantCommissionList,
    type ParticipantList as ParticipantList,
    type ParticipantPayoutList as ParticipantPayoutList,
    type ReferralList as ReferralList,
    type CampaignListResponse as CampaignListResponse,
    type CampaignCreateMobileParticipantTokenResponse as CampaignCreateMobileParticipantTokenResponse,
    type CampaignRetrieveAnalyticsResponse as CampaignRetrieveAnalyticsResponse,
    type CampaignActivationAnalyticsResponse as CampaignActivationAnalyticsResponse,
    type AffiliateApplication as AffiliateApplication,
    type AffiliateApplicationListResponse as AffiliateApplicationListResponse,
    type AffiliateInvite as AffiliateInvite,
    type AffiliateInviteListResponse as AffiliateInviteListResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignCreateMobileParticipantTokenParams as CampaignCreateMobileParticipantTokenParams,
    type CampaignListCommissionsParams as CampaignListCommissionsParams,
    type CampaignListLeaderboardParams as CampaignListLeaderboardParams,
    type CampaignListParticipantsParams as CampaignListParticipantsParams,
    type CampaignListPayoutsParams as CampaignListPayoutsParams,
    type CampaignListReferralsParams as CampaignListReferralsParams,
    type CampaignRetrieveAnalyticsParams as CampaignRetrieveAnalyticsParams,
    type CampaignRetrieveActivationAnalyticsParams as CampaignRetrieveActivationAnalyticsParams,
    type CampaignListAffiliateApplicationsParams as CampaignListAffiliateApplicationsParams,
    type CampaignRetrieveAffiliateApplicationParams as CampaignRetrieveAffiliateApplicationParams,
    type CampaignReviewAffiliateApplicationParams as CampaignReviewAffiliateApplicationParams,
    type CampaignListAffiliateInvitesParams as CampaignListAffiliateInvitesParams,
    type CampaignCreateAffiliateInviteParams as CampaignCreateAffiliateInviteParams,
    type CampaignRevokeAffiliateInviteParams as CampaignRevokeAffiliateInviteParams,
    type CampaignResendAffiliateInviteParams as CampaignResendAffiliateInviteParams,
  };

  export {
    ParticipantResource as ParticipantResource,
    type Create as Create,
    type FraudRiskLevel as FraudRiskLevel,
    type Participant as Participant,
    type ParticipantReward as ParticipantReward,
    type ReferralSource as ReferralSource,
    type ReferralStatus as ReferralStatus,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantListRewardsResponse as ParticipantListRewardsResponse,
    type ParticipantRecordTransactionResponse as ParticipantRecordTransactionResponse,
    type ParticipantRefundTransactionResponse as ParticipantRefundTransactionResponse,
    type ParticipantSendInvitesResponse as ParticipantSendInvitesResponse,
    type ParticipantTriggerReferralResponse as ParticipantTriggerReferralResponse,
    type ParticipantCancelDelayedReferralResponse as ParticipantCancelDelayedReferralResponse,
    type ParticipantRetrieveParams as ParticipantRetrieveParams,
    type ParticipantUpdateParams as ParticipantUpdateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
    type ParticipantAddParams as ParticipantAddParams,
    type ParticipantListCommissionsParams as ParticipantListCommissionsParams,
    type ParticipantListPayoutsParams as ParticipantListPayoutsParams,
    type ParticipantListReferralsParams as ParticipantListReferralsParams,
    type ParticipantListRewardsParams as ParticipantListRewardsParams,
    type ParticipantRecordTransactionParams as ParticipantRecordTransactionParams,
    type ParticipantRefundTransactionParams as ParticipantRefundTransactionParams,
    type ParticipantSendInvitesParams as ParticipantSendInvitesParams,
    type ParticipantTriggerReferralParams as ParticipantTriggerReferralParams,
    type ParticipantCancelDelayedReferralParams as ParticipantCancelDelayedReferralParams,
  };

  export {
    RewardAPIReward as Reward,
    type RewardDeleteResponse as RewardDeleteResponse,
    type RewardApproveResponse as RewardApproveResponse,
    type RewardFulfillResponse as RewardFulfillResponse,
    type RewardDeleteParams as RewardDeleteParams,
    type RewardApproveParams as RewardApproveParams,
    type RewardFulfillParams as RewardFulfillParams,
  };

  export {
    CommissionAPICommission as Commission,
    type CommissionDeleteResponse as CommissionDeleteResponse,
    type CommissionApproveResponse as CommissionApproveResponse,
    type CommissionDeleteParams as CommissionDeleteParams,
    type CommissionApproveParams as CommissionApproveParams,
  };

  export {
    RewardsAPIRewards as Rewards,
    type RewardTaxValuation as RewardTaxValuation,
    type CampaignRewardListResponse as CampaignRewardListResponse,
    type DeleteRewardResponse as DeleteRewardResponse,
    type RewardCreateParams as RewardCreateParams,
    type RewardUpdateParams as RewardUpdateParams,
  };

  export {
    ProgramResourcesAPIProgramResources as ProgramResources,
    type ProgramResource as ProgramResource,
    type ProgramResourceFile as ProgramResourceFile,
    type ProgramResourceType as ProgramResourceType,
    type ProgramResourceModerationStatus as ProgramResourceModerationStatus,
    type ProgramResourceListResponse as ProgramResourceListResponse,
    type ProgramResourceUploadResult as ProgramResourceUploadResult,
    type ProgramResourceCreateParams as ProgramResourceCreateParams,
    type ProgramResourceUpdateParams as ProgramResourceUpdateParams,
    type ProgramResourceDeleteParams as ProgramResourceDeleteParams,
    type DeleteProgramResourceResponse as DeleteProgramResourceResponse,
    type ProgramResourceUploadTicketParams as ProgramResourceUploadTicketParams,
    type ProgramResourceUploadTicket as ProgramResourceUploadTicket,
  };

  export {
    WebhooksAPIWebhooks as Webhooks,
    type WebhookEvent as WebhookEvent,
    type Webhook as Webhook,
    type WebhookListResponse as WebhookListResponse,
    type DeleteWebhookResponse as DeleteWebhookResponse,
    type WebhookTestResponse as WebhookTestResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookTestParams as WebhookTestParams,
  };

  export {
    DesignAPIDesign as Design,
    type CampaignDesign as CampaignDesign,
    type CampaignDesignResources as CampaignDesignResources,
    type CampaignDesignResourcesIcon as CampaignDesignResourcesIcon,
    type DesignUpdateParams as DesignUpdateParams,
  };

  export {
    EmailsAPIEmails as Emails,
    type CampaignEmails as CampaignEmails,
    type EmailUpdateParams as EmailUpdateParams,
  };

  export {
    OptionsAPIOptions as Options,
    type CampaignOptions as CampaignOptions,
    type OptionUpdateParams as OptionUpdateParams,
  };

  export {
    InstallationAPIInstallation as Installation,
    type CampaignInstallation as CampaignInstallation,
    type InstallationUpdateParams as InstallationUpdateParams,
  };
}
