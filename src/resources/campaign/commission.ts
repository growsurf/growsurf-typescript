// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Affiliate transaction, commission, and payout operations.
 */
export class Commission extends APIResource {
  /**
   * **Affiliate programs only.** Removes a pending participant commission.
   *
   * @example
   * ```ts
   * const commission = await client.campaign.commission.delete(
   *   'commissionId',
   *   { id: 'id' },
   * );
   * ```
   */
  delete(
    commissionID: string,
    params: CommissionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CommissionDeleteResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/commission/${commissionID}`, options);
  }

  /**
   * **Affiliate programs only.** Approves a pending participant commission so it can
   * become eligible for payout.
   *
   * @example
   * ```ts
   * const response = await client.campaign.commission.approve(
   *   'commissionId',
   *   { id: 'id' },
   * );
   * ```
   */
  approve(
    commissionID: string,
    params: CommissionApproveParams,
    options?: RequestOptions,
  ): APIPromise<CommissionApproveResponse> {
    const { id } = params;
    return this._client.post(path`/campaign/${id}/commission/${commissionID}/approve`, options);
  }
}

export interface CommissionDeleteResponse {
  success: boolean;
}

export interface CommissionApproveResponse {
  success: boolean;
}

export interface CommissionDeleteParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export interface CommissionApproveParams {
  /**
   * GrowSurf program ID.
   */
  id: string;
}

export declare namespace Commission {
  export {
    type CommissionDeleteResponse as CommissionDeleteResponse,
    type CommissionApproveResponse as CommissionApproveResponse,
    type CommissionDeleteParams as CommissionDeleteParams,
    type CommissionApproveParams as CommissionApproveParams,
  };
}
