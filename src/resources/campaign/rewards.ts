// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CampaignAPI from './campaign';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign reward (`CampaignReward`) configuration operations.
 */
export class Rewards extends APIResource {
  /**
   * Retrieves the list of a program's configured rewards (`CampaignReward`s) — the same
   * set embedded in the `rewards` array of the campaign response. Delete a reward with
   * `DELETE /campaign/{id}/reward-configs/{campaignRewardId}`.
   *
   * @example
   * ```ts
   * const rewards = await client.campaign.rewards.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<CampaignRewardListResponse> {
    return this._client.get(path`/campaign/${id}/reward-configs`, options);
  }

  /**
   * Creates a new campaign reward (`CampaignReward`) with a GrowSurf-assigned ID. The
   * reward type must be compatible with the program type (affiliate programs support
   * only `AFFILIATE` rewards; referral programs support all other types). Enabling an
   * active reward of a type automatically enables that reward type on the program.
   *
   * @example
   * ```ts
   * const reward = await client.campaign.rewards.create('id', {
   *   type: 'SINGLE_SIDED',
   * });
   * ```
   */
  create(id: string, body: RewardCreateParams, options?: RequestOptions): APIPromise<Reward> {
    return this._client.post(path`/campaign/${id}/reward-configs`, { body, ...options });
  }

  /**
   * Updates an existing campaign reward (`CampaignReward`). The reward `type` is
   * immutable and cannot be changed. When the update replaces `metadata`, renamed keys
   * automatically rewrite any `{{campaignReward[…]}}` references in campaign copy;
   * removing a key that campaign copy still references returns a `409` listing the
   * referencing fields.
   *
   * @example
   * ```ts
   * const reward = await client.campaign.rewards.update('campaignRewardId', {
   *   id: 'id',
   * });
   * ```
   */
  update(campaignRewardID: string, params: RewardUpdateParams, options?: RequestOptions): APIPromise<Reward> {
    const { id, ...body } = params;
    return this._client.patch(path`/campaign/${id}/reward-configs/${campaignRewardID}`, { body, ...options });
  }

  /**
   * Deletes a campaign reward (`CampaignReward`). The reward is deactivated, removed
   * from the program's reward set, and any connected upfront-discount coupons are
   * cleaned up. If campaign copy still references any of the reward's metadata keys via
   * `{{campaignReward[…]}}` tokens, the delete returns a `409` listing the referencing
   * fields — update those fields first.
   *
   * @example
   * ```ts
   * const reward = await client.campaign.rewards.delete('campaignRewardId', {
   *   id: 'id',
   * });
   * ```
   */
  delete(
    campaignRewardID: string,
    params: RewardDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeleteRewardResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/reward-configs/${campaignRewardID}`, options);
  }
}

/**
 * A single campaign reward (also known as a `CampaignReward`). This is different from
 * a `ParticipantReward`, which is a reward earned by a participant.
 */
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
   * and webhook (double-sided rewards). Display text only (GrowSurf does not create or
   * validate it); superseded by a connected billing integration's issued coupon when
   * one exists.
   */
  referralCouponCode?: string | null;

  referralDescription?: string | null;

  referredRewardUpfront?: boolean;

  /**
   * Tax treatment override for the referred friend's side of a double-sided reward. Defaults
   * to the program's confirmed default.
   */
  referredValue?: RewardTaxValuation | null;

  /**
   * The reward title (internal label).
   */
  title?: string | null;

  /**
   * Tax valuation for the reward (the referrer's side of a double-sided reward).
   * Used by tax documentation / 1099 reporting.
   */
  value?: RewardTaxValuation | null;
}

/**
 * Tax valuation settings for a reward. Only relevant when the program collects tax
 * documentation.
 */
export interface RewardTaxValuation {
  /**
   * Manual fair-market value in USD (major units) used as the fallback when the
   * reward value cannot be resolved automatically. `null` = no manual value.
   */
  fairMarketValueUSD?: number | null;

  /**
   * The reason the recipient earns this reward. `null` inherits the program's confirmed
   * tax treatment for configurable non-commission rewards. Commission rewards always
   * use `NONEMPLOYEE_SERVICES`.
   */
  taxCharacter?:
    | 'NONEMPLOYEE_SERVICES'
    | 'PRIZE_OR_AWARD'
    | 'PURCHASE_REBATE'
    | 'OTHER_INCOME'
    | 'REVIEW_REQUIRED'
    | null;
}

export interface CampaignRewardListResponse {
  /**
   * The program's configured rewards.
   */
  rewards: Array<Reward>;
}

export interface DeleteRewardResponse {
  /**
   * The deleted reward ID.
   */
  id: string;

  success: boolean;
}

export interface RewardCreateParams {
  /**
   * The reward type. Immutable after creation.
   */
  type: 'SINGLE_SIDED' | 'DOUBLE_SIDED' | 'MILESTONE' | 'LEADERBOARD' | 'AFFILIATE';

  /**
   * The affiliate commission structure (AFFILIATE rewards only).
   */
  commissionStructure?: CampaignAPI.CommissionStructure;

  /**
   * The number of referrals required to earn the reward.
   */
  conversionsRequired?: number;

  /**
   * Legacy static coupon code shown to the referrer in the reward-won email and
   * webhook. Display text only (GrowSurf does not create or validate it); superseded
   * by a connected billing integration's issued coupon when one exists.
   */
  couponCode?: string | null;

  /**
   * The reward description shown to the referrer.
   */
  description?: string;

  /**
   * An image URL for the reward.
   */
  imageUrl?: string | null;

  /**
   * Whether the reward can be earned an unlimited number of times. Defaults to `true`,
   * except `MILESTONE` rewards, which can only be earned once.
   */
  isUnlimited?: boolean;

  /**
   * Whether the reward is enabled (visible and awardable). When `false`, the reward is
   * disabled: hidden from participants and no longer awarded, including participants
   * who already earned it.
   */
  isVisible?: boolean;

  /**
   * The number of times a participant can earn the reward (overridden by
   * `isUnlimited`).
   */
  limit?: number;

  /**
   * The window over which `limit` applies.
   */
  limitDuration?: 'IN_TOTAL' | 'PER_MONTH' | 'PER_YEAR';

  /**
   * Custom key/value metadata (single-level; values are stored as strings).
   */
  metadata?: { [key: string]: unknown };

  /**
   * Text shown before a participant's referral count in milestone progress copy
   * (`MILESTONE` rewards).
   */
  nextMilestonePrefix?: string | null;

  /**
   * Text shown after a participant's referral count in milestone progress copy
   * (`MILESTONE` rewards).
   */
  nextMilestoneSuffix?: string | null;

  /**
   * The number of winners. Only applies to `LEADERBOARD` rewards. With `limitDuration`
   * `PER_MONTH` this many win each month, otherwise this many win in total; defaults to
   * `3` when omitted.
   */
  numberOfWinners?: number;

  /**
   * The display order of the reward.
   */
  order?: number;

  /**
   * Legacy static coupon code shown to the referred friend in the reward-won email
   * and webhook (double-sided rewards). Display text only (GrowSurf does not create or
   * validate it); superseded by a connected billing integration's issued coupon when
   * one exists.
   */
  referralCouponCode?: string | null;

  /**
   * The reward description shown to the referred friend (double-sided rewards).
   */
  referralDescription?: string | null;

  /**
   * For double-sided rewards, deliver the referred friend's reward upfront as a
   * discount.
   */
  referredRewardUpfront?: boolean;

  /**
   * Tax treatment override for the referred friend's side of a double-sided reward. Defaults
   * to the program's confirmed default.
   */
  referredValue?: RewardTaxValuation | null;

  /**
   * The reward title (internal label).
   */
  title?: string;

  /**
   * Tax valuation for the reward (the referrer's side of a double-sided reward).
   * Used by tax documentation / 1099 reporting.
   */
  value?: RewardTaxValuation | null;
}

export interface RewardUpdateParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: The affiliate commission structure (AFFILIATE rewards only).
   */
  commissionStructure?: CampaignAPI.CommissionStructure;

  /**
   * Body param: The number of referrals required to earn the reward.
   */
  conversionsRequired?: number;

  /**
   * Body param: Legacy static coupon code shown to the referrer in the reward-won
   * email and webhook. Display text only (GrowSurf does not create or validate it);
   * superseded by a connected billing integration's issued coupon when one exists.
   */
  couponCode?: string | null;

  /**
   * Body param: The reward description shown to the referrer.
   */
  description?: string;

  /**
   * Body param: An image URL for the reward.
   */
  imageUrl?: string | null;

  /**
   * Body param: Whether the reward can be earned an unlimited number of times. Defaults
   * to `true`, except `MILESTONE` rewards, which can only be earned once.
   */
  isUnlimited?: boolean;

  /**
   * Body param: Whether the reward is enabled (visible and awardable). When `false`,
   * the reward is disabled: hidden from participants and no longer awarded, including
   * participants who already earned it.
   */
  isVisible?: boolean;

  /**
   * Body param: The number of times a participant can earn the reward (overridden by
   * `isUnlimited`).
   */
  limit?: number;

  /**
   * Body param: The window over which `limit` applies.
   */
  limitDuration?: 'IN_TOTAL' | 'PER_MONTH' | 'PER_YEAR';

  /**
   * Body param: Custom key/value metadata (single-level; values are stored as
   * strings).
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Text shown before a participant's referral count in milestone progress
   * copy (`MILESTONE` rewards).
   */
  nextMilestonePrefix?: string | null;

  /**
   * Body param: Text shown after a participant's referral count in milestone progress
   * copy (`MILESTONE` rewards).
   */
  nextMilestoneSuffix?: string | null;

  /**
   * Body param: The number of winners. Only applies to `LEADERBOARD` rewards. With
   * `limitDuration` `PER_MONTH` this many win each month, otherwise this many win in
   * total; defaults to `3` when omitted.
   */
  numberOfWinners?: number;

  /**
   * Body param: The display order of the reward.
   */
  order?: number;

  /**
   * Body param: Legacy static coupon code shown to the referred friend in the
   * reward-won email and webhook (double-sided rewards). Display text only (GrowSurf
   * does not create or validate it); superseded by a connected billing integration's
   * issued coupon when one exists.
   */
  referralCouponCode?: string | null;

  /**
   * Body param: The reward description shown to the referred friend (double-sided
   * rewards).
   */
  referralDescription?: string | null;

  /**
   * Body param: For double-sided rewards, deliver the referred friend's reward
   * upfront as a discount.
   */
  referredRewardUpfront?: boolean;

  /**
   * Body param: Tax treatment override for the referred friend's side of a double-sided
   * reward. Defaults to the program's confirmed default.
   */
  referredValue?: RewardTaxValuation | null;

  /**
   * Body param: The reward title (internal label).
   */
  title?: string;

  /**
   * Body param: Tax valuation for the reward (the referrer's side of a double-sided
   * reward). Used by tax documentation / 1099 reporting.
   */
  value?: RewardTaxValuation | null;
}

export interface RewardDeleteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export declare namespace Rewards {
  export {
    type Reward as Reward,
    type RewardTaxValuation as RewardTaxValuation,
    type CampaignRewardListResponse as CampaignRewardListResponse,
    type DeleteRewardResponse as DeleteRewardResponse,
    type RewardCreateParams as RewardCreateParams,
    type RewardUpdateParams as RewardUpdateParams,
    type RewardDeleteParams as RewardDeleteParams,
  };
}
