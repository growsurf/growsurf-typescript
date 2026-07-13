// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CampaignAPI from './campaign';
import * as CommissionAPI from './commission';
import * as DesignAPI from './design';
import { CampaignDesign, Design as DesignAPIDesign, DesignUpdateParams } from './design';
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
   * Creates a new program pre-populated with type-appropriate defaults, plus any
   * optional inline rewards. The new program is created in `DRAFT` status and owned
   * by the API key's bound team. Requires the team owner's verified email.
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
   * Retrieves a paged list of all participant commissions in an affiliate program.
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
   * Retrieves a paged list of all participant payouts in an affiliate program.
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
   * Retrieves analytics for a program.
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
}

export interface Campaign {
  id: string;

  impressionCount: number;

  inviteCount: number;

  name: string;

  participantCount: number;

  referralCount: number;

  rewards: Array<Campaign.Reward>;

  status: 'DRAFT' | 'IN_PROGRESS' | 'COMPLETE' | 'DELETED';

  type: 'REFERRAL' | 'AFFILIATE';

  winnerCount: number;

  currencyISO?: string;
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

    imageUrl?: string | null;

    /**
     * `-1` represents an unlimited reward in REST responses.
     */
    limit?: number | null;

    limitDuration?: 'IN_TOTAL' | 'PER_MONTH' | null;

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
     * Tax valuation for the referred friend's side of a double-sided reward. Defaults
     * to not tax-reportable (a purchase rebate).
     */
    referredValue?: RewardsAPI.RewardTaxValuation | null;

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

  event?: string | null;

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

    referredId: string;

    referrerId: string;

    saleAmount: number | null;

    status: 'PENDING' | 'APPROVED' | 'PAID' | 'REVERSED' | 'DELETED';

    amountInCampaignCurrency?: number | null;

    approvedAt?: number;

    campaignCurrencyISO?: string | null;

    exchangeRate?: number | null;

    exchangeRateAt?: number;

    fxError?: string | null;

    holdDuration?: number | null;

    paidAt?: number;

    payoutQueuedAt?: number;

    provider?: string | null;

    reversedAt?: number;

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

    status: 'UPCOMING' | 'QUEUED' | 'ISSUED' | 'FAILED';

    amountInCampaignCurrency?: number | null;

    campaignCurrencyISO?: string | null;

    exchangeRate?: number | null;

    exchangeRateAt?: number;

    failedAt?: number;

    fxError?: string | null;

    issuedAt?: number;

    provider?: string | null;

    queuedAt?: number | null;
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

export interface CampaignRetrieveAnalyticsResponse {
  analytics: CampaignRetrieveAnalyticsResponse.Analytics;

  endDate: number;

  startDate: number;

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

    uniqueImpressions?: number;

    wechatShares?: number;

    whatsAppShares?: number;
  }

  export interface Series {
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

    uniqueImpressions?: number;

    wechatShares?: number;

    whatsAppShares?: number;
  }

  /**
   * Totals for the equal-length window immediately preceding the requested one.
   */
  export interface PreviousPeriod {
    analytics?: CampaignRetrieveAnalyticsResponse.Analytics;

    endDate?: number;

    startDate?: number;
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

      upcoming?: StatusCounts.PayoutStatusMetric;
    }

    export interface PayoutStatusMetric {
      count?: number;

      /**
       * Total payout amount in minor currency units.
       */
      totalAmount?: number;
    }

    export interface RewardStatus {
      approved?: number;

      /**
       * Unapproved rewards awaiting fulfillment.
       */
      pending?: number;
    }
  }
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
   * The program name. Defaults to "Untitled Program".
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
  status?: 'UPCOMING' | 'QUEUED' | 'ISSUED' | 'FAILED';
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
    | 'updatedAt'
    | 'createdAt'
    | 'email'
    | 'firstName'
    | 'lastName'
    | 'referralStatus'
    | 'referralTriggeredAt';
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
   * Comma-separated list of optional enrichments (opt-in to keep the default response
   * lean). Any of `previousPeriod` (totals for the equal-length window immediately
   * before the requested one), `statusCounts` (reward and, for affiliate programs,
   * affiliate/commission/payout status breakdowns), and `rates` (derived referral
   * rates).
   */
  include?: string;

  /**
   * When set to `day`, `week`, or `month`, the response also includes a `series` array
   * with per-period totals. Defaults to `total` (no series).
   */
  interval?: 'day' | 'week' | 'month' | 'total';

  /**
   * Start date of the analytics timeframe as a Unix timestamp in milliseconds.
   * Required if `days` is not set.
   */
  startDate?: number;
}

CampaignResource.ParticipantResource = ParticipantResource;
CampaignResource.Reward = RewardAPIReward;
CampaignResource.Commission = CommissionAPICommission;
CampaignResource.Rewards = RewardsAPIRewards;
CampaignResource.Webhooks = WebhooksAPIWebhooks;
CampaignResource.Design = DesignAPIDesign;
CampaignResource.Emails = EmailsAPIEmails;
CampaignResource.Options = OptionsAPIOptions;
CampaignResource.Installation = InstallationAPIInstallation;

export declare namespace CampaignResource {
  export {
    type Campaign as Campaign,
    type CommissionStructure as CommissionStructure,
    type ParticipantCommissionList as ParticipantCommissionList,
    type ParticipantList as ParticipantList,
    type ParticipantPayoutList as ParticipantPayoutList,
    type ReferralList as ReferralList,
    type CampaignListResponse as CampaignListResponse,
    type CampaignCreateMobileParticipantTokenResponse as CampaignCreateMobileParticipantTokenResponse,
    type CampaignRetrieveAnalyticsResponse as CampaignRetrieveAnalyticsResponse,
    type CampaignCreateParams as CampaignCreateParams,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignCreateMobileParticipantTokenParams as CampaignCreateMobileParticipantTokenParams,
    type CampaignListCommissionsParams as CampaignListCommissionsParams,
    type CampaignListLeaderboardParams as CampaignListLeaderboardParams,
    type CampaignListParticipantsParams as CampaignListParticipantsParams,
    type CampaignListPayoutsParams as CampaignListPayoutsParams,
    type CampaignListReferralsParams as CampaignListReferralsParams,
    type CampaignRetrieveAnalyticsParams as CampaignRetrieveAnalyticsParams,
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
