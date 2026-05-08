// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Participant reward retrieval and manual reward operations.
 */
export class Reward extends APIResource {
  /**
   * Removes a manually approved participant reward that has not already been
   * approved.
   *
   * @example
   * ```ts
   * const reward = await client.campaign.reward.delete(
   *   'rewardId',
   *   { id: 'id' },
   * );
   * ```
   */
  delete(
    rewardID: string,
    params: RewardDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RewardDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/reward/${rewardID}`, options);
  }

  /**
   * Approves a manually approved reward earned by a participant.
   *
   * @example
   * ```ts
   * const response = await client.campaign.reward.approve(
   *   'rewardId',
   *   { id: 'id' },
   * );
   * ```
   */
  approve(
    rewardID: string,
    params: RewardApproveParams,
    options?: RequestOptions,
  ): APIPromise<RewardApproveResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/campaign/${id}/reward/${rewardID}/approve`, { body, ...options });
  }

  /**
   * Marks an approved participant reward as fulfilled.
   *
   * @example
   * ```ts
   * const response = await client.campaign.reward.fulfill(
   *   'rewardId',
   *   { id: 'id' },
   * );
   * ```
   */
  fulfill(
    rewardID: string,
    params: RewardFulfillParams,
    options?: RequestOptions,
  ): APIPromise<RewardFulfillResponse> {
    const { id } = params;
    return this._client.post(path`/campaign/${id}/reward/${rewardID}/fulfill`, options);
  }
}

export interface RewardDeleteResponse {
  success: boolean;
}

export interface RewardApproveResponse {
  success: boolean;
}

export interface RewardFulfillResponse {
  success: boolean;
}

export interface RewardDeleteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface RewardApproveParams {
  /**
   * Path param: GrowSurf program ID.
   */
  id: string;

  /**
   * Body param: Set true to mark the reward as fulfilled after approval.
   */
  fulfill?: boolean;
}

export interface RewardFulfillParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export declare namespace Reward {
  export {
    type RewardDeleteResponse as RewardDeleteResponse,
    type RewardApproveResponse as RewardApproveResponse,
    type RewardFulfillResponse as RewardFulfillResponse,
    type RewardDeleteParams as RewardDeleteParams,
    type RewardApproveParams as RewardApproveParams,
    type RewardFulfillParams as RewardFulfillParams,
  };
}
