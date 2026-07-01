// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CampaignAPI from './campaign';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Program reward (`CampaignReward`) configuration operations.
 */
export class Rewards extends APIResource {
  /**
   * Retrieves the list of a program's configured rewards (`CampaignReward`s). Returns
   * the active, visible, and enabled rewards — the same set embedded in the `rewards`
   * array of the campaign response.
   *
   * @example
   * ```ts
   * const rewards = await client.campaign.rewards.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<CampaignRewardListResponse> {
    return this._client.get(path`/campaign/${id}/rewards`, options);
  }

  /**
   * Creates a new program reward (`CampaignReward`) with a server-generated ID. The
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
    return this._client.post(path`/campaign/${id}/rewards`, { body, ...options });
  }

  /**
   * Updates an existing program reward (`CampaignReward`). The reward `type` is
   * immutable and cannot be changed.
   *
   * @example
   * ```ts
   * const reward = await client.campaign.rewards.update('rewardId', {
   *   id: 'id',
   * });
   * ```
   */
  update(rewardID: string, params: RewardUpdateParams, options?: RequestOptions): APIPromise<Reward> {
    const { id, ...body } = params;
    return this._client.patch(path`/campaign/${id}/rewards/${rewardID}`, { body, ...options });
  }

  /**
   * Deletes a program reward (`CampaignReward`). The reward is deactivated, removed
   * from the program's reward set, and any connected upfront-discount coupons are
   * cleaned up.
   *
   * @example
   * ```ts
   * const reward = await client.campaign.rewards.delete('rewardId', {
   *   id: 'id',
   * });
   * ```
   */
  delete(
    rewardID: string,
    params: RewardDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeleteRewardResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/rewards/${rewardID}`, options);
  }
}

/**
 * A single program reward (also known as a `CampaignReward`). This is different from
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
   * `-1` represents an unlimited reward in REST responses.
   */
  limit?: number | null;

  limitDuration?: 'IN_TOTAL' | 'PER_MONTH' | 'PER_YEAR' | null;

  nextMilestonePrefix?: string | null;

  nextMilestoneSuffix?: string | null;

  numberOfWinners?: number | null;

  order?: number | null;

  referralDescription?: string | null;

  referredRewardUpfront?: boolean;
}

export interface CampaignRewardListResponse {
  /**
   * The program's active, visible, and enabled rewards.
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
   * Whether the reward is active (awardable).
   */
  isActive?: boolean;

  /**
   * Whether the reward can be earned an unlimited number of times.
   */
  isUnlimited?: boolean;

  /**
   * Whether the reward is visible.
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

  nextMilestonePrefix?: string | null;

  nextMilestoneSuffix?: string | null;

  /**
   * The maximum number of winners (LEADERBOARD rewards).
   */
  numberOfWinners?: number;

  /**
   * The display order of the reward.
   */
  order?: number;

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
   * The reward title (internal label).
   */
  title?: string;
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
   * Body param
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
   * Body param: Whether the reward is active (awardable).
   */
  isActive?: boolean;

  /**
   * Body param: Whether the reward can be earned an unlimited number of times.
   */
  isUnlimited?: boolean;

  /**
   * Body param: Whether the reward is visible.
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
   * Body param
   */
  nextMilestonePrefix?: string | null;

  /**
   * Body param
   */
  nextMilestoneSuffix?: string | null;

  /**
   * Body param: The maximum number of winners (LEADERBOARD rewards).
   */
  numberOfWinners?: number;

  /**
   * Body param: The display order of the reward.
   */
  order?: number;

  /**
   * Body param
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
   * Body param: The reward title (internal label).
   */
  title?: string;
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
    type CampaignRewardListResponse as CampaignRewardListResponse,
    type DeleteRewardResponse as DeleteRewardResponse,
    type RewardCreateParams as RewardCreateParams,
    type RewardUpdateParams as RewardUpdateParams,
    type RewardDeleteParams as RewardDeleteParams,
  };
}
