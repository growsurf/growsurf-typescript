// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CampaignAPI from './campaign';
import * as CommissionAPI from './commission';
import {
  Commission as CommissionAPICommission,
  CommissionApproveParams,
  CommissionApproveResponse,
  CommissionDeleteParams,
  CommissionDeleteResponse,
} from './commission';
import * as ParticipantAPI from './participant';
import {
  FraudRiskLevel,
  Participant,
  ParticipantAddParams,
  ParticipantDeleteParams,
  ParticipantDeleteResponse,
  ParticipantListCommissionsParams,
  ParticipantListPayoutsParams,
  ParticipantListReferralsParams,
  ParticipantListRewardsParams,
  ParticipantListRewardsResponse,
  ParticipantRecordTransactionParams,
  ParticipantRecordTransactionResponse,
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
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CampaignResource extends APIResource {
  participant: ParticipantAPI.ParticipantResource = new ParticipantAPI.ParticipantResource(this._client);
  reward: RewardAPI.Reward = new RewardAPI.Reward(this._client);
  commission: CommissionAPI.Commission = new CommissionAPI.Commission(this._client);

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

    referralDescription?: string | null;

    referredRewardUpfront?: boolean;
  }
}

export interface CommissionStructure {
  amount?: number | null;

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

  type?: 'PERCENT' | 'AMOUNT' | null;

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

    amount: number;

    createdAt: number;

    currencyISO: string;

    referredId: string;

    referrerId: string;

    saleAmount: number;

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

    saleAmountAmountInCampaignCurrency?: number | null;
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

export interface CampaignRetrieveAnalyticsResponse {
  analytics: CampaignRetrieveAnalyticsResponse.Analytics;

  endDate: number;

  startDate: number;
}

export namespace CampaignRetrieveAnalyticsResponse {
  export interface Analytics {
    blueskyShares?: number;

    emailShares?: number;

    facebookShares?: number;

    impressions?: number;

    invites?: number;

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
   * Start date of the analytics timeframe as a Unix timestamp in milliseconds.
   * Required if `days` is not set.
   */
  startDate?: number;
}

CampaignResource.ParticipantResource = ParticipantResource;
CampaignResource.Reward = RewardAPIReward;
CampaignResource.Commission = CommissionAPICommission;

export declare namespace CampaignResource {
  export {
    type Campaign as Campaign,
    type CommissionStructure as CommissionStructure,
    type ParticipantCommissionList as ParticipantCommissionList,
    type ParticipantList as ParticipantList,
    type ParticipantPayoutList as ParticipantPayoutList,
    type ReferralList as ReferralList,
    type CampaignListResponse as CampaignListResponse,
    type CampaignRetrieveAnalyticsResponse as CampaignRetrieveAnalyticsResponse,
    type CampaignListCommissionsParams as CampaignListCommissionsParams,
    type CampaignListLeaderboardParams as CampaignListLeaderboardParams,
    type CampaignListParticipantsParams as CampaignListParticipantsParams,
    type CampaignListPayoutsParams as CampaignListPayoutsParams,
    type CampaignListReferralsParams as CampaignListReferralsParams,
    type CampaignRetrieveAnalyticsParams as CampaignRetrieveAnalyticsParams,
  };

  export {
    ParticipantResource as ParticipantResource,
    type FraudRiskLevel as FraudRiskLevel,
    type Participant as Participant,
    type ParticipantReward as ParticipantReward,
    type ReferralSource as ReferralSource,
    type ReferralStatus as ReferralStatus,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantListRewardsResponse as ParticipantListRewardsResponse,
    type ParticipantRecordTransactionResponse as ParticipantRecordTransactionResponse,
    type ParticipantSendInvitesResponse as ParticipantSendInvitesResponse,
    type ParticipantTriggerReferralResponse as ParticipantTriggerReferralResponse,
    type ParticipantRetrieveParams as ParticipantRetrieveParams,
    type ParticipantUpdateParams as ParticipantUpdateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
    type ParticipantAddParams as ParticipantAddParams,
    type ParticipantListCommissionsParams as ParticipantListCommissionsParams,
    type ParticipantListPayoutsParams as ParticipantListPayoutsParams,
    type ParticipantListReferralsParams as ParticipantListReferralsParams,
    type ParticipantListRewardsParams as ParticipantListRewardsParams,
    type ParticipantRecordTransactionParams as ParticipantRecordTransactionParams,
    type ParticipantSendInvitesParams as ParticipantSendInvitesParams,
    type ParticipantTriggerReferralParams as ParticipantTriggerReferralParams,
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
}
