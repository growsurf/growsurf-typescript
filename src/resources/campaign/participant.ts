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
   * Updates a participant by GrowSurf participant ID or email address. For affiliate
   * programs, set `affiliateStatus` to `APPROVED`, `SUSPENDED`, or `BANNED`. `APPROVED`
   * enrolls the participant as an affiliate. `SUSPENDED` and `BANNED` require an
   * existing affiliate. This endpoint does not accept `isAffiliate`, and affiliate
   * enrollment cannot be removed through REST.
   *
   * @example
   * ```ts
   * const participant =
   *   await client.campaign.participant.update(
   *     'participantIdOrEmail',
   *     {
   *       id: 'id',
   *       affiliateStatus: 'APPROVED',
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
   * Deletes a list of participants from a program in one request. Each entry in
   * `participants` is a GrowSurf participant ID or an email address (mixed lists
   * are allowed). Up to `200` entries per request — chunk larger lists across
   * multiple calls. The response reports a per-row `status` for every submitted
   * entry, so a `200` can include rows that were `NOT_FOUND` or failed. Deletion is
   * permanent and removes the participants' referrals, rewards, commissions, and
   * payout records.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.bulkDelete('id', {
   *     participants: ['gavin@hooli.com', 'f8g9nl'],
   *   });
   * ```
   */
  bulkDelete(
    id: string,
    body: ParticipantBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantBulkDeleteResponse> {
    return this._client.post(path`/campaign/${id}/participants/bulk-delete`, { body, ...options });
  }

  /**
   * Adds a new participant to the program. If the email already exists, the existing
   * participant is returned unchanged. For affiliate programs, set `isAffiliate` to
   * `true` to enroll a new participant as an approved affiliate or `false` to create a
   * non-affiliate. If you omit `isAffiliate`, a valid `referredBy` creates a referred
   * non-affiliate; without a valid referrer, the new participant is enrolled as an
   * approved affiliate. You can send a valid `referredBy` with `isAffiliate: true` to
   * keep the referral attribution and enroll the participant as an affiliate.
   *
   * @example
   * ```ts
   * const participant = await client.campaign.participant.add(
   *   'id',
   *   {
   *     email: 'gavin@hooli.com',
   *     firstName: 'Gavin',
   *     isAffiliate: true,
   *     ipAddress: '203.0.113.10',
   *     lastName: 'Belson',
   *     metadata: {
   *       companyName: 'Hooli',
   *       industry: 'Software',
   *     },
   *     mobileInstanceId:
   *       '5f7d0f4c-3e7c-4aa9-8c41-d81d998f0bb1',
   *     referredBy: 'richard-h8kp6l',
   *   },
   * );
   * ```
   */
  add(id: string, body: ParticipantAddParams, options?: RequestOptions): APIPromise<Participant> {
    return this._client.post(path`/campaign/${id}/participant`, { body, ...options });
  }

  /**
   * **Affiliate programs only.** Retrieves a paged list of commissions earned by a
   * participant.
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
   * **Affiliate programs only.** Retrieves a paged list of payouts that belong to a
   * participant.
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
   * **Affiliate programs only.** Records a sale made by a referred customer and
   * generates affiliate commissions for their referrer when applicable. Requires at
   * least one transaction identifier (externalId, transactionId, orderId, paymentId,
   * invoiceId, paymentIntentId, or chargeId) so repeated requests can be de-duplicated
   * — without one, a resent sale would create a second commission. Reuse the same
   * identifier(s) when refunding.
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
   * **Affiliate programs only.** Records an amendment (refund, partial refund, refund
   * cancellation, or chargeback) against a previously recorded transaction and reverses
   * or adjusts the referrer's commission. The inverse of Record Affiliate Transaction.
   * Identify the original transaction with the same identifier(s) you sent when
   * recording it. Commissions already paid out to the affiliate are not clawed back;
   * the amendment is recorded for tax reporting only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.refundTransaction(
   *     'participantIdOrEmail',
   *     {
   *       id: 'id',
   *       amendmentType: 'REFUND',
   *       amountRefunded: 9900,
   *       description: 'Customer refunded the Pro subscription',
   *       invoiceId: 'invoice_54',
   *     },
   *   );
   * ```
   */
  refundTransaction(
    participantIDOrEmail: string,
    params: ParticipantRefundTransactionParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantRefundTransactionResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/transaction/refund`, {
      body,
      ...options,
    });
  }

  /**
   * Sends email invites on behalf of a participant to a list of email addresses.
   * Sending invites via the API requires a **verified custom email domain** on the
   * program; the request fails until one is verified.
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
   * participant ID or email address. Optionally pass `delayInDays` to hold the
   * credit for a number of days before it is awarded (for example, to cover your own
   * refund window). A delayed trigger can be cancelled before it is awarded with the
   * Cancel delayed referral trigger request (DELETE on this same path).
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
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/ref`, {
      body,
      ...options,
    });
  }

  /**
   * Cancels a pending delayed referral trigger for a participant (the companion to a
   * delayed Trigger referral request). Use this to undo a scheduled referral credit
   * before it is awarded, for example when a refund occurs inside your refund
   * window. If the participant has no pending delayed trigger, `success` is returned
   * as `false`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.cancelDelayedReferral(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  cancelDelayedReferral(
    participantIDOrEmail: string,
    params: ParticipantCancelDelayedReferralParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantCancelDelayedReferralResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/participant/${participantIDOrEmail}/ref`, options);
  }

  /**
   * Sends an email to a participant. Provide EITHER `emailType` to trigger one of the
   * program's configured email templates, OR `subject` + `body` for a free-form email.
   * Free-form emails are sent with the same compliance handling (company name,
   * postal address, and an unsubscribe link are added automatically, and unsubscribed
   * participants are suppressed). Sending requires the team to be verified by GrowSurf.
   * Requires a **verified custom email domain** on the program (which can be completed
   * in *Campaign Editor > 3. Emails > Email Settings*). Returns `400` until one is
   * verified. The email is accepted for delivery.
   *
   * @example
   * ```ts
   * const response = await client.campaign.participant.email(
   *   'participantIdOrEmail',
   *   { id: 'id' },
   * );
   * ```
   */
  email(
    participantIDOrEmail: string,
    params: ParticipantEmailParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantEmailResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/participant/${participantIDOrEmail}/email`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves analytics for a single participant — all-time engagement counters,
   * leaderboard ranks, and per-channel share counts (plus affiliate revenue,
   * commission, and payout metrics for affiliate programs). Pass `include=email` for
   * `sent` (accepted for delivery), `delivered`, `opened`, `clicked`, `bounced`, and
   * `spamComplaints` metrics attributed to this participant, including invitations
   * they sent. Use `include=email,series` to include the same counts in each UTC
   * series bucket.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.retrieveAnalytics(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieveAnalytics(
    participantIDOrEmail: string,
    params: ParticipantRetrieveAnalyticsParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantRetrieveAnalyticsResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}/analytics`, {
      query,
      ...options,
    });
  }

  /**
   * Returns a participant's activity logs, most recent first (offset/limit
   * paginated).
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.listActivityLogs(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  listActivityLogs(
    participantIDOrEmail: string,
    params: ParticipantListActivityLogsParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantListActivityLogsResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/campaign/${id}/participant/${participantIDOrEmail}/activity-logs`, {
      query,
      ...options,
    });
  }

  /**
   * Returns a participant's payout-destination status across every payout provider
   * enabled for the program (PayPal and/or Wise). For each provider it reports the
   * current status, the confirmed claim email, the legal recipient type, and — when a
   * delivery bounced or a recipient was invalidated — the repair reason. `activeProvider`
   * is the provider that currently gets paid, or `null` until the participant confirms
   * one.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.getPayoutDestination(
   *     'participantIdOrEmail',
   *     { id: 'id' },
   *   );
   * ```
   */
  getPayoutDestination(
    participantIDOrEmail: string,
    params: ParticipantGetPayoutDestinationParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantGetPayoutDestinationResponse> {
    const { id } = params;
    return this._client.get(
      path`/campaign/${id}/participant/${participantIDOrEmail}/payout-destination`,
      options,
    );
  }

  /**
   * Sends the participant a one-time link to confirm their payout destination for the
   * chosen provider. Only the participant can open the link and confirm — this endpoint
   * just triggers the message. The provider must be enabled for the program.
   *
   * @example
   * ```ts
   * const response =
   *   await client.campaign.participant.requestPayoutDestinationConfirmation(
   *     'participantIdOrEmail',
   *     { id: 'id', provider: 'PAYPAL' },
   *   );
   * ```
   */
  requestPayoutDestinationConfirmation(
    participantIDOrEmail: string,
    params: ParticipantRequestPayoutDestinationConfirmationParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantRequestPayoutDestinationConfirmationResponse> {
    const { id, ...body } = params;
    return this._client.post(
      path`/campaign/${id}/participant/${participantIDOrEmail}/payout-destination/request-confirmation`,
      { body, ...options },
    );
  }
}

export interface Create {
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

export type FraudRiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Participant {
  id: string;

  email: string;

  monthlyRank: number;

  monthlyReferralCount: number;

  rank: number;

  referralCount: number;

  rewards: Array<ParticipantReward>;

  /**
   * The unique share URL of the participant. Omitted for affiliate program
   * participants who are not approved affiliates.
   */
  shareUrl?: string;

  /**
   * Affiliate programs only. How the affiliate enrolled (`OPEN_ENROLLMENT`,
   * `APPLICATION`, `PARTICIPANT_AUTH`, `INVITE`, `REST_API`, `CSV`, or `DASHBOARD`).
   * `null` when not recorded.
   */
  affiliateEnrollmentSource?: string | null;

  /**
   * Affiliate programs only. The enrolled affiliate's status (`APPROVED`,
   * `SUSPENDED`, or `BANNED`). `null` for participants who are not affiliates.
   */
  affiliateStatus?: string | null;

  allMatchingFraudsters?: Array<{ [key: string]: unknown }>;

  createdAt?: number;

  fingerprint?: string | null;

  firstName?: string | null;

  fraudReasonCode?: string;

  fraudRiskLevel?: FraudRiskLevel;

  impressionCount?: number;

  inviteCount?: number;

  ipAddress?: string | null;

  /**
   * Affiliate programs only. Whether this participant is an enrolled affiliate. A
   * referred customer who has not joined the program is `false`.
   */
  isAffiliate?: boolean;

  isNew?: boolean;

  isWinner?: boolean;

  lastName?: string | null;

  /**
   * Shallow custom metadata object.
   */
  metadata?: { [key: string]: unknown };

  /**
   * App-install scoped mobile identifier used for anti-fraud matching when provided
   * by native mobile apps. The official mobile SDKs generate this as a lowercase
   * UUID. Not stored when strict GDPR/CCPA mode is enabled.
   */
  mobileInstanceId?: string | null;

  monthlyReferrals?: Array<string>;

  notes?: string | null;

  /**
   * Payout-related actions the participant must complete before a payout can be
   * released (e.g. configuring a payout destination or submitting a W-9/W-8 tax form).
   * Always present; the requiredActions array is empty when no action is required.
   */
  payoutSettings?: Participant.PayoutSettings;

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
  /**
   * Payout-related actions the participant must complete before a payout can be
   * released (e.g. configuring a payout destination or submitting a W-9/W-8 tax form).
   * Always present; the requiredActions array is empty when no action is required.
   */
  export interface PayoutSettings {
    requiredActions?: Array<'PAYOUT_DESTINATION' | 'TAX_INFO'>;
  }

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

export interface ParticipantBulkDeleteResponse {
  /**
   * One entry per submitted identifier, in the same order as the request.
   */
  results: Array<ParticipantBulkDeleteResponse.Result>;

  summary: ParticipantBulkDeleteResponse.Summary;
}

export namespace ParticipantBulkDeleteResponse {
  export interface Result {
    /**
     * The submitted participant ID or email address, echoed back as received.
     */
    identifier: string;

    /**
     * Zero-based position of this entry in the submitted `participants` array.
     */
    index: number;

    /**
     * Per-row outcome. `DELETED` — the participant was resolved and removed.
     * `NOT_FOUND` — no participant matches the ID or email. `DUPLICATE` — the entry
     * resolves to the same participant as an earlier entry in the same request.
     * `ERROR` — the lookup or deletion failed for this row.
     */
    status: 'DELETED' | 'NOT_FOUND' | 'DUPLICATE' | 'ERROR';

    /**
     * The resolved participant's email address. Present on `DELETED` rows.
     */
    email?: string;

    /**
     * Human-readable detail for `NOT_FOUND`, `DUPLICATE`, and `ERROR` rows.
     */
    message?: string;

    /**
     * The resolved GrowSurf participant ID. Present when the entry resolved to a
     * participant.
     */
    participantId?: string;
  }

  export interface Summary {
    /**
     * Entries that resolved to a participant and were deleted.
     */
    deletedCount: number;

    /**
     * Entries that resolved to the same participant as an earlier entry.
     */
    duplicateCount: number;

    /**
     * Entries that failed to look up or delete.
     */
    errorCount: number;

    /**
     * Entries that did not match any participant.
     */
    notFoundCount: number;

    /**
     * Number of entries submitted in this request.
     */
    total: number;
  }
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

export interface ParticipantRefundTransactionResponse {
  /**
   * Number of commissions partially adjusted.
   */
  adjusted: number;

  amendmentType: 'REFUND' | 'CHARGEBACK';

  deleted: number;

  /**
   * Number of commissions found for the provided identifiers.
   */
  matched: number;

  matchingCommissionIds: Array<string>;

  message: string;

  /**
   * Number of commissions reversed (set to zero amount).
   */
  reversed: number;

  /**
   * true when the amendment was processed (including the tax-only case for
   * already-paid commissions); false when no matching transaction was found.
   */
  success: boolean;

  /**
   * Present and true when no commission matched the provided identifiers.
   */
  notFound?: boolean;
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

export interface ParticipantCancelDelayedReferralResponse {
  success: boolean;

  message?: string;
}

export interface ParticipantEmailResponse {
  /**
   * The email was accepted for delivery.
   */
  status: 'queued';

  success: boolean;
}

export interface ParticipantRetrieveAnalyticsResponse {
  analytics: ParticipantRetrieveAnalyticsResponse.Analytics;

  ranks: ParticipantRetrieveAnalyticsResponse.Ranks;

  /**
   * Per-channel share counts (e.g. `email`, `facebook`, `twitter`, ...).
   */
  shareCount: { [key: string]: number };

  /**
   * Present only when `include` contains `email`.
   */
  email?: ParticipantRetrieveAnalyticsResponse.Email;

  /**
   * Present only when `include` contains `series` or `email`. Window end (Unix ms).
   */
  endDate?: number;

  /**
   * Present only when `include=series`. This participant's own referral-link activity
   * per period (ascending), windowed by `days`/`startDate`/`endDate` and bucketed by
   * `interval`.
   */
  series?: Array<ParticipantRetrieveAnalyticsResponse.Series>;

  /**
   * Present only when `include` contains `series` or `email`. Window start (Unix ms).
   */
  startDate?: number;
}

export namespace ParticipantRetrieveAnalyticsResponse {
  /**
   * Accepted-send and lifecycle metrics attributed to this participant, including
   * invitations they sent.
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

  export interface Analytics {
    currencyISO?: string;

    expiredReferrals?: number;

    impressions?: number;

    invitesSent?: number;

    leads?: number;

    monthlyReferrals?: number;

    pendingRewards?: number;

    /**
     * Affiliate only. Revenue attributed to this participant's referrals, in minor
     * currency units.
     */
    referralRevenue?: number;

    referrals?: number;

    rewardsEarned?: number;

    /**
     * Affiliate only. Total commissions earned, in minor currency units.
     */
    totalCommissions?: number;

    /**
     * Affiliate only. Total paid out, in minor currency units.
     */
    totalPaidOut?: number;

    uniqueImpressions?: number;

    /**
     * Affiliate only. Approved commissions ready to pay, in minor currency units.
     */
    upcomingPayout?: number;
  }

  export interface Ranks {
    monthlyRank?: number | null;

    prevMonthlyRank?: number | null;

    /**
     * All-time rank (1-indexed), or null when unranked.
     */
    rank?: number | null;
  }

  export interface Series {
    androidNativeShares?: number;

    blueskyShares?: number;

    copyRefLinkShares?: number;

    emailShares?: number;

    /**
     * Per-period email counts when both `series` and `email` are requested.
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
}

export interface ParticipantListActivityLogsResponse {
  activityLogs: Array<ParticipantListActivityLogsResponse.ActivityLog>;

  limit: number;

  /**
   * The offset for the next page, or null when there are no more logs.
   */
  offset?: number | null;
}

export namespace ParticipantListActivityLogsResponse {
  export interface ActivityLog {
    /**
     * When the activity occurred, as a Unix timestamp in milliseconds.
     */
    createdAt: number;

    text: string;

    /**
     * The activity family (e.g. `REFERRAL`, `SHARE`, `REWARD`, `EMAIL`, `COMMON`).
     */
    type: string;
  }
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
   * Body param: Affiliate programs only. Sets the affiliate status. `APPROVED` also
   * enrolls a participant who is not yet an affiliate. `SUSPENDED` and `BANNED` are
   * rejected for non-affiliates.
   */
  affiliateStatus?: 'APPROVED' | 'SUSPENDED' | 'BANNED';

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
   * Body param: Freeform internal notes about the participant (internal only, never
   * exposed to participants).
   */
  notes?: string;

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

export interface ParticipantBulkDeleteParams {
  /**
   * GrowSurf participant IDs and/or email addresses to delete. Mixed entries are
   * allowed.
   */
  participants: Array<string>;
}

export interface ParticipantAddParams {
  email: string;

  fingerprint?: string;

  firstName?: string;

  ipAddress?: string;

  /**
   * Affiliate programs only. Controls affiliate enrollment for a new participant.
   * `true` enrolls the participant with `affiliateStatus: APPROVED`; `false` creates a
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

export interface ParticipantGetPayoutDestinationResponse {
  /**
   * The provider that currently gets paid, or null until the participant confirms one.
   */
  activeProvider?: string | null;

  /**
   * One entry per enabled payout provider describing the participant's destination for
   * it.
   */
  destinations?: Array<ParticipantGetPayoutDestinationResponse.Destination>;

  /**
   * The payout providers enabled for this program.
   */
  enabledProviders?: Array<string>;
}

export namespace ParticipantGetPayoutDestinationResponse {
  export interface Destination {
    /**
     * The confirmed payout email for this provider.
     */
    claimEmail?: string | null;

    /**
     * When the destination was confirmed, in epoch milliseconds.
     */
    confirmedAt?: number | null;

    /**
     * The legal recipient type the participant confirmed, if any.
     */
    legalEntityType?: 'INDIVIDUAL' | 'BUSINESS' | null;

    /**
     * When status is `NEEDS_REPAIR`, why (e.g. a bounced delivery).
     */
    needsRepairReason?: string | null;

    /**
     * The payout provider this entry describes.
     */
    provider?: string;

    /**
     * The customer-facing provider name (e.g. "PayPal", "Wise").
     */
    providerDisplayName?: string;

    /**
     * The destination's current status: `NONE` (not set up), `PENDING_CONFIRMATION`,
     * `CONFIRMED`, `ACTIVE`, `NEEDS_REPAIR`, or `EXPIRED`. Historical superseded or
     * revoked destinations are projected as `NONE`.
     */
    status?: string;
  }
}

export interface ParticipantRequestPayoutDestinationConfirmationResponse {
  /**
   * When the confirmation link expires, in epoch milliseconds.
   */
  expiresAt?: number | null;

  /**
   * The provider the participant was asked to confirm.
   */
  provider?: string;

  /**
   * The customer-facing provider name (e.g. "PayPal", "Wise").
   */
  providerDisplayName?: string;

  /**
   * Confirms the message was requested.
   */
  status?: 'CONFIRMATION_REQUESTED';
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
  status?: 'UPCOMING' | 'QUEUED' | 'ISSUED' | 'FAILED' | 'REVERSED';
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

export interface ParticipantRefundTransactionParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: REFUND covers full refunds, partial refunds, and refund
   * cancellations; CHARGEBACK is always a full reversal.
   */
  amendmentType?: 'REFUND' | 'CHARGEBACK';

  /**
   * Body param: Original sale gross (minor units). Optional — the value stored when
   * the transaction was recorded is used when available; only needed for partial
   * refunds of older records.
   */
  amount?: number;

  /**
   * Body param: Cumulative amount refunded so far, in the currency's minor unit. Omit
   * for a full refund. For a partial refund send the running total, not the
   * per-refund delta.
   */
  amountRefunded?: number;

  /**
   * Body param
   */
  chargeId?: string;

  /**
   * Body param: 3-letter ISO currency. Optional — resolved from the original
   * commission when available.
   */
  currency?: string;

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
  orderId?: string;

  /**
   * Body param
   */
  paymentId?: string;

  /**
   * Body param
   */
  paymentIntentId?: string;

  /**
   * Body param: The per-refund delta (minor units). Optional bookkeeping field.
   */
  refundAmount?: number;

  /**
   * Body param: Stable per-refund identifier. Recommended for partial refunds so
   * repeated calls stay idempotent.
   */
  refundId?: string;

  /**
   * Body param: Refund status. Send "canceled" with a lowered amountRefunded to
   * restore a previously reduced commission.
   */
  refundStatus?: string;

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
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: Number of whole days to hold referral credit before it is awarded.
   * Useful for honoring a refund window before crediting a referrer. Omit this field
   * to award credit immediately. The credit is awarded automatically once the delay
   * elapses, and can be cancelled before then with the Cancel delayed referral
   * trigger request.
   */
  delayInDays?: number;
}

export interface ParticipantCancelDelayedReferralParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface ParticipantEmailParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: HTML body for a free-form email. You can personalize it with dynamic text,
   * inserting `{{...}}` tokens like `{{firstName}}` or `{{shareUrl}}`. See
   * [Guide to using dynamic text in GrowSurf emails](https://support.growsurf.com/article/213-guide-to-using-dynamic-text-in-growsurf-emails).
   */
  body?: string;

  /**
   * Body param: The program email template to send (template mode). Send the camelCase
   * email-type key. The sendable types depend on the program type; the template's
   * `isEnabled` setting only controls automatic sends. Referral programs: `welcomeNonReferred`,
   * `referralLinkViewedFirstTime`, `referralLinkUsed`, `referredSignup`,
   * `welcomeReferred`, `goalAchieved`, `campaignEndedWinners`, `campaignEndedNonWinners`,
   * `progressUpdateMonthly`. Affiliate programs: `welcomeNonReferred`,
   * `referralLinkViewedFirstTime`, `referredSignup`, `commissionGenerated`,
   * `commissionAdjusted`, `payoutPending`, `payoutSentSuccess`, `progressUpdateMonthly`.
   * System/transactional types (login link, PayPal confirmation, tax) and the invite
   * email cannot be sent here.
   */
  emailType?: string;

  /**
   * Body param: Optional preheader text for a free-form email.
   */
  preheader?: string;

  /**
   * Body param: Subject line for a free-form email. Supports dynamic text (`{{...}}` tokens),
   * the same as the body.
   */
  subject?: string;
}

export interface ParticipantRetrieveAnalyticsParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Query param: Last number of days to retrieve analytics for. Defaults to 365.
   * Maximum 1825.
   */
  days?: number;

  /**
   * Query param: End date of the analytics timeframe as a Unix timestamp in
   * milliseconds. Required if `days` is not set.
   */
  endDate?: number;

  /**
   * Query param: Comma-separated optional data. `series` returns this participant's
   * own activity per period; `email` returns `sent`, `delivered`, `opened`,
   * `clicked`, `bounced`, `spamComplaints`, and per-email-type metrics attributed to
   * the participant for the requested analytics window (including invitations they
   * sent). Request both in either order to add email counts to every series item for
   * emails sent during that period. Only documented tokens are accepted; an unknown
   * token returns `400`.
   */
  include?: string;

  /**
   * Query param: Bucket size for the `series` (only used when `include` contains
   * `series`). Defaults to `day`.
   */
  interval?: 'day' | 'week' | 'month';

  /**
   * Query param: Start date of the analytics timeframe as a Unix timestamp in
   * milliseconds. Required if `days` is not set.
   */
  startDate?: number;
}

export interface ParticipantListActivityLogsParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Query param: Number of logs to return (1–100, default 20).
   */
  limit?: number;

  /**
   * Query param: Number of logs to skip.
   */
  offset?: number;
}

export interface ParticipantGetPayoutDestinationParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface ParticipantRequestPayoutDestinationConfirmationParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: The payout provider the participant should confirm a destination for.
   */
  provider: 'PAYPAL' | 'WISECOM';
}

export declare namespace ParticipantResource {
  export {
    type Create as Create,
    type FraudRiskLevel as FraudRiskLevel,
    type Participant as Participant,
    type ParticipantReward as ParticipantReward,
    type ReferralSource as ReferralSource,
    type ReferralStatus as ReferralStatus,
    type ParticipantDeleteResponse as ParticipantDeleteResponse,
    type ParticipantBulkDeleteResponse as ParticipantBulkDeleteResponse,
    type ParticipantListRewardsResponse as ParticipantListRewardsResponse,
    type ParticipantRecordTransactionResponse as ParticipantRecordTransactionResponse,
    type ParticipantRefundTransactionResponse as ParticipantRefundTransactionResponse,
    type ParticipantSendInvitesResponse as ParticipantSendInvitesResponse,
    type ParticipantTriggerReferralResponse as ParticipantTriggerReferralResponse,
    type ParticipantCancelDelayedReferralResponse as ParticipantCancelDelayedReferralResponse,
    type ParticipantEmailResponse as ParticipantEmailResponse,
    type ParticipantRetrieveAnalyticsResponse as ParticipantRetrieveAnalyticsResponse,
    type ParticipantListActivityLogsResponse as ParticipantListActivityLogsResponse,
    type ParticipantGetPayoutDestinationResponse as ParticipantGetPayoutDestinationResponse,
    type ParticipantRequestPayoutDestinationConfirmationResponse as ParticipantRequestPayoutDestinationConfirmationResponse,
    type ParticipantRetrieveParams as ParticipantRetrieveParams,
    type ParticipantUpdateParams as ParticipantUpdateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
    type ParticipantBulkDeleteParams as ParticipantBulkDeleteParams,
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
    type ParticipantEmailParams as ParticipantEmailParams,
    type ParticipantRetrieveAnalyticsParams as ParticipantRetrieveAnalyticsParams,
    type ParticipantListActivityLogsParams as ParticipantListActivityLogsParams,
    type ParticipantGetPayoutDestinationParams as ParticipantGetPayoutDestinationParams,
    type ParticipantRequestPayoutDestinationConfirmationParams as ParticipantRequestPayoutDestinationConfirmationParams,
  };
}
