// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ParticipantAPI from './participant';
import * as CampaignAPI from './campaign';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ParticipantResource extends APIResource {
  /**
   * Retrieves a single participant by GrowSurf participant ID or email address.
   *
   * @example
   * ```ts
   * const participant =
   *   await client.campaign.participant.retrieve(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    participantIDOrEmail: string,
    params: ParticipantRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Participant> {
    const { id } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}`, options);
  }

  /**
   * Updates a participant by GrowSurf participant ID or email address.
   *
   * @example
   * ```ts
   * const participant =
   *   await client.campaign.participant.update(
   *     'participantIdOrEmail',
   *     {
   *       id: 'id',
   *       firstName: 'Gavin',
   *       lastName: 'Belson',
   *       metadata: { company: 'Hooli, Inc' },
   *     },
   *   );
   * ```
   */
  update(
    participantIDOrEmail: string,
    params: ParticipantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Participant> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}`, { body, ...options });
  }

  /**
   * Removes a participant by GrowSurf participant ID or email address.
   *
   * @example
   * ```ts
   * const participant =
   *   await client.campaign.participant.delete(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  delete(
    participantIDOrEmail: string,
    params: ParticipantDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/participant/${participantIDOrEmail}`, options);
  }

  /**
   * Adds a new participant to the program. If the email already exists, the existing
   * participant is returned.
   *
   * @example
   * ```ts
   * const participant = await client.campaign.participant.add(
   *   'id',
   *   {
   *     email: 'gavin@hooli.com',
   *     firstName: 'Gavin',
   *     ipAddress: '203.0.113.10',
   *     lastName: 'Belson',
   *     metadata: {
   *       companyName: 'Hooli',
   *       industry: 'Software',
   *     },
   *     referredBy: 'richard-h8kp6l',
   *   },
   * );
   * ```
   */
  add(id: string, body: ParticipantAddParams, options?: RequestOptions): APIPromise<Participant> {
    return this._client.post(path`/campaign/${id}/participant`, { body, ...options });
  }

  /**
   * Creates a participant-scoped token for GrowSurf mobile SDK participant
   * endpoints. The program must have mobile SDK access enabled.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.createMobileToken(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  createMobileToken(
    participantIDOrEmail: string,
    params: ParticipantCreateMobileTokenParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantCreateMobileTokenResponse> {
    const { id } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/mobile-token`, options);
  }

  /**
   * Retrieves a paged list of commissions earned by a participant.
   *
   * @example
   * ```ts
   * const participantCommissionList =
   *   await client.campaign.participant.listCommissions(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  listCommissions(
    participantIDOrEmail: string,
    params: ParticipantListCommissionsParams,
    options?: RequestOptions,
  ): APIPromise<CampaignAPI.ParticipantCommissionList> {
    const { id, ...query } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}/commissions`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a paged list of payouts that belong to a participant.
   *
   * @example
   * ```ts
   * const participantPayoutList =
   *   await client.campaign.participant.listPayouts(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  listPayouts(
    participantIDOrEmail: string,
    params: ParticipantListPayoutsParams,
    options?: RequestOptions,
  ): APIPromise<CampaignAPI.ParticipantPayoutList> {
    const { id, ...query } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}/payouts`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves referrals and email invites made by a participant.
   *
   * @example
   * ```ts
   * const referralList =
   *   await client.campaign.participant.listReferrals(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  listReferrals(
    participantIDOrEmail: string,
    params: ParticipantListReferralsParams,
    options?: RequestOptions,
  ): APIPromise<CampaignAPI.ReferralList> {
    const { id, ...query } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}/referrals`, {
      query,
      ...options,
    });
  }

  /**
   * Retrieves a paged list of rewards earned by a participant.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.listRewards(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  listRewards(
    participantIDOrEmail: string,
    params: ParticipantListRewardsParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantListRewardsResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}/rewards`, {
      query,
      ...options,
    });
  }

  /**
   * Records a sale made by a referred customer and generates affiliate commissions
   * for their referrer when applicable.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.recordTransaction(
   *     'participantIdOrEmail',
   *     {
   *       id: 'id',
   *       currency: 'USD',
   *       grossAmount: 9900,
   *       amountCashNet: 7900,
   *       description: 'Renewal for Pro subscription',
   *       invoiceId: 'invoice_54',
   *       paidAt: 1733702400000,
   *     },
   *   );
   * ```
   */
  recordTransaction(
    participantIDOrEmail: string,
    params: ParticipantRecordTransactionParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantRecordTransactionResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/transaction`, {
      body,
      ...options,
    });
  }

  /**
   * Sends email invites on behalf of a participant to a list of email addresses.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.sendInvites(
   *     'participantIdOrEmail',
   *     {
   *       id: 'id',
   *       emailAddresses: ['erlich@aviato.com'],
   *       messageText:
   *         '{{referrerFirstName}} invited you with {{referrerShareUrl}}.',
   *       subjectText: 'Join me on Pied Piper',
   *     },
   *   );
   * ```
   */
  sendInvites(
    participantIDOrEmail: string,
    params: ParticipantSendInvitesParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantSendInvitesResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/invites`, {
      body,
      ...options,
    });
  }

  /**
   * Triggers referral credit for an existing referred participant by GrowSurf
   * participant ID or email address.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.triggerReferral(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  triggerReferral(
    participantIDOrEmail: string,
    params: ParticipantTriggerReferralParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantTriggerReferralResponse> {
    const { id } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/ref`, options);
  }
}

export type FraudRiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Participant {
  id: string;

  email: string;

  monthlyRank: number;

  monthlyReferralCount: number;

  rank: number;

  referralCount: number;

  rewards: Array<ParticipantReward>;

  shareUrl: string;

  allMatchingFraudsters?: Array<{ [key: string]: unknown }>;

  createdAt?: number;

  fingerprint?: string | null;

  firstName?: string | null;

  fraudReasonCode?: string;

  fraudRiskLevel?: FraudRiskLevel;

  impressionCount?: number;

  inviteCount?: number;

  ipAddress?: string | null;

  isNew?: boolean;

  isWinner?: boolean;

  lastName?: string | null;

  /**
   * Shallow custom metadata object.
   */
  metadata?: { [key: string]: unknown };

  monthlyReferrals?: Array<string>;

  notes?: string | null;

  paypalEmailAddress?: string;

  prevMonthlyRank?: number;

  prevMonthlyReferralCount?: number;

  referrals?: Array<string>;

  referralSource?: ReferralSource;

  referralStatus?: ReferralStatus;

  referredBy?: string;

  referrer?: Participant.Referrer | null;

  shareCount?: { [key: string]: number };

  uniqueImpressionCount?: number;

  unreadCommissionsCount?: number;

  unreadPayoutsCount?: number;

  unsubscribed?: boolean;

  vanityKeys?: Array<string>;
}

export namespace Participant {
  export interface Referrer {
    id?: string;

    createdAt?: number;

    email?: string;

    fingerprint?: string | null;

    firstName?: string | null;

    fraudReasonCode?: string;

    fraudRiskLevel?: ParticipantAPI.FraudRiskLevel;

    impressionCount?: number;

    inviteCount?: number;

    ipAddress?: string | null;

    isWinner?: boolean;

    lastName?: string | null;

    /**
     * Shallow custom metadata object.
     */
    metadata?: { [key: string]: unknown };

    monthlyRank?: number;

    monthlyReferralCount?: number;

    monthlyReferrals?: Array<string>;

    prevMonthlyRank?: number;

    prevMonthlyReferralCount?: number;

    rank?: number;

    referralCount?: number;

    referrals?: Array<string>;

    referralSource?: ParticipantAPI.ReferralSource;

    referralStatus?: ParticipantAPI.ReferralStatus;

    shareCount?: { [key: string]: number };

    shareUrl?: string;

    uniqueImpressionCount?: number;

    unsubscribed?: boolean;
  }
}

export interface ParticipantReward {
  id: string;

  rewardId: string;

  status: 'PENDING' | 'FULFILLED';

  approved?: boolean;

  approvedAt?: number;

  commissionStructure?: CampaignAPI.CommissionStructure | null;

  fulfilledAt?: number;

  isAvailable?: boolean;

  isFulfilled?: boolean;

  isReferrer?: boolean;

  referredId?: string;

  referrerId?: string;

  unread?: boolean;
}

export type ReferralSource = 'DIRECT' | 'PARTICIPANT';

export type ReferralStatus = 'CREDIT_PENDING' | 'CREDIT_AWARDED' | 'CREDIT_EXPIRED' | 'INVITE_SENT';

export interface ParticipantDeleteResponse {
  success: boolean;
}

export interface ParticipantCreateMobileTokenResponse {
  /**
   * Token lifetime in seconds.
   */
  expiresIn: number;

  /**
   * Participant-scoped bearer token for GrowSurf mobile SDK participant endpoints.
   */
  participantToken: string;
}

export interface ParticipantListRewardsResponse {
  limit: number;

  nextId: string | null;

  rewards: Array<ParticipantReward>;
}

export type ParticipantRecordTransactionResponse =
  | ParticipantRecordTransactionResponse.UnionMember0
  | ParticipantRecordTransactionResponse.UnionMember1;

export namespace ParticipantRecordTransactionResponse {
  export interface UnionMember0 {
    duplicate: false;

    firstSale: boolean;

    message: string;

    success: true;
  }

  export interface UnionMember1 {
    commissionsCreated: number;

    duplicate: true;

    duplicateFields: Array<string>;

    matchingCommissionIds: Array<string>;

    message: string;

    success: false;
  }
}

export interface ParticipantSendInvitesResponse {
  invitesSent: number;

  messageType: string;

  success: boolean;
}

export interface ParticipantTriggerReferralResponse {
  success: boolean;

  message?: string;
}

export interface ParticipantRetrieveParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface ParticipantUpdateParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param
   */
  email?: string;

  /**
   * Body param
   */
  firstName?: string;

  /**
   * Body param
   */
  lastName?: string;

  /**
   * Body param: Shallow custom metadata object.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  referralStatus?: 'CREDIT_PENDING' | 'CREDIT_AWARDED' | 'CREDIT_EXPIRED';

  /**
   * Body param
   */
  referredBy?: string;

  /**
   * Body param
   */
  unsubscribed?: boolean;

  /**
   * Body param
   */
  vanityKeys?: Array<string>;
}

export interface ParticipantDeleteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface ParticipantAddParams {
  email: string;

  fingerprint?: string;

  firstName?: string;

  ipAddress?: string;

  lastName?: string;

  /**
   * Shallow custom metadata object.
   */
  metadata?: { [key: string]: unknown };

  referralStatus?: 'CREDIT_PENDING' | 'CREDIT_AWARDED';

  /**
   * Referrer participant ID or email address.
   */
  referredBy?: string;
}

export interface ParticipantCreateMobileTokenParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface ParticipantListCommissionsParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Query param: Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * Query param: ID to start the next paged result set with.
   */
  nextId?: string;

  /**
   * Query param: Participant commission status.
   */
  status?: 'PENDING' | 'APPROVED' | 'PAID' | 'REVERSED' | 'DELETED';
}

export interface ParticipantListPayoutsParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Query param: Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * Query param: ID to start the next paged result set with.
   */
  nextId?: string;

  /**
   * Query param: Participant payout status.
   */
  status?: 'UPCOMING' | 'QUEUED' | 'ISSUED' | 'FAILED';
}

export interface ParticipantListReferralsParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Query param: Return results in descending order when true.
   */
  desc?: boolean;

  /**
   * Query param: URL-encoded email value to filter referral results.
   */
  email?: string;

  /**
   * Query param: First name value to filter results.
   */
  firstName?: string;

  /**
   * Query param: Last name value to filter results.
   */
  lastName?: string;

  /**
   * Query param: Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * Query param: ID to start the next paged result set with.
   */
  nextId?: string;

  /**
   * Query param: Offset number used to skip through a result set.
   */
  offset?: number;

  /**
   * Query param
   */
  referralStatus?: ReferralStatus;

  /**
   * Query param: Field used to sort referral results.
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

export interface ParticipantListRewardsParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Query param: Number of results to return. Maximum 100.
   */
  limit?: number;

  /**
   * Query param: ID to start the next paged result set with.
   */
  nextId?: string;
}

export interface ParticipantRecordTransactionParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param
   */
  currency: string;

  /**
   * Body param
   */
  grossAmount: number;

  /**
   * Body param
   */
  amountCashNet?: number;

  /**
   * Body param
   */
  amountPaid?: number;

  /**
   * Body param
   */
  chargeId?: string;

  /**
   * Body param
   */
  customerId?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  externalId?: string;

  /**
   * Body param
   */
  invoiceId?: string;

  /**
   * Body param
   */
  invoiceSubtotalExcludingTax?: number;

  /**
   * Body param
   */
  invoiceTotal?: number;

  /**
   * Body param
   */
  invoiceTotalExcludingTax?: number;

  /**
   * Body param
   */
  netAmount?: number;

  /**
   * Body param
   */
  orderId?: string;

  /**
   * Body param
   */
  paidAt?: number;

  /**
   * Body param
   */
  paymentId?: string;

  /**
   * Body param
   */
  paymentIntentId?: string;

  /**
   * Body param
   */
  subscriptionId?: string;

  /**
   * Body param
   */
  taxAmount?: number;

  /**
   * Body param
   */
  totalTaxAmount?: number;

  /**
   * Body param
   */
  totalTaxAmounts?: Array<{ [key: string]: unknown }>;

  /**
   * Body param
   */
  totalTaxes?: Array<{ [key: string]: unknown }>;

  /**
   * Body param
   */
  transactionId?: string;
}

export interface ParticipantSendInvitesParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param
   */
  emailAddresses: Array<string>;

  /**
   * Body param
   */
  messageText: string;

  /**
   * Body param
   */
  subjectText: string;
}

export interface ParticipantTriggerReferralParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export declare namespace ParticipantResource {
  export {
    type FraudRiskLevel as FraudRiskLevel,
    type Participant as Participant,
    type ParticipantReward as ParticipantReward,
    type ReferralSource as ReferralSource,
    type ReferralStatus as ReferralStatus,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantCreateMobileTokenResponse as ParticipantCreateMobileTokenResponse,
    type ParticipantListRewardsResponse as ParticipantListRewardsResponse,
    type ParticipantRecordTransactionResponse as ParticipantRecordTransactionResponse,
    type ParticipantSendInvitesResponse as ParticipantSendInvitesResponse,
    type ParticipantTriggerReferralResponse as ParticipantTriggerReferralResponse,
    type ParticipantRetrieveParams as ParticipantRetrieveParams,
    type ParticipantUpdateParams as ParticipantUpdateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
    type ParticipantAddParams as ParticipantAddParams,
    type ParticipantCreateMobileTokenParams as ParticipantCreateMobileTokenParams,
    type ParticipantListCommissionsParams as ParticipantListCommissionsParams,
    type ParticipantListPayoutsParams as ParticipantListPayoutsParams,
    type ParticipantListReferralsParams as ParticipantListReferralsParams,
    type ParticipantListRewardsParams as ParticipantListRewardsParams,
    type ParticipantRecordTransactionParams as ParticipantRecordTransactionParams,
    type ParticipantSendInvitesParams as ParticipantSendInvitesParams,
    type ParticipantTriggerReferralParams as ParticipantTriggerReferralParams,
  };
}
