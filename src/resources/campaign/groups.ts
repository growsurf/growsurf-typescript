// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Group operations. Groups give some participants a different reward list.
 */
export class Groups extends APIResource {
  /**
   * Lists the program's groups in display order. Groups give some participants a different reward
   * list. Each participant is in one group, and `groupId: null` is Default, which holds the program's
   * standard rewards and is not in this list. A group's rewards replace
   * Default's whole reward list for its members' new referrals. Leaderboard rewards stay
   * program-wide.
   *
   * @example
   * ```ts
   * const { groups } = await client.campaign.groups.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<RewardGroupListResponse> {
    return this._client.get(path`/campaign/${id}/groups`, options);
  }

  /**
   * Creates a group with a copy of each active Default reward, except Leaderboard rewards, which stay
   * program-wide. The copies have new IDs and this group's `groupId`; change them with Update a
   * campaign reward. `rules` place participants in the group: `EMAIL` matches an exact email,
   * `DOMAIN` matches a company domain (public email domains such as gmail.com are refused),
   * and `PARTICIPANT` moves an existing participant in now. Each email and domain can be in one group
   * only. Email and domain rules place new signups and affiliate approvals only; they do not move
   * existing participants. When more than one way matches, a move (a `PARTICIPANT` rule, Update
   * participant, or bulk move) wins, then the group's signup link, then `EMAIL`, then `DOMAIN`, then
   * Default.
   *
   * @example
   * ```ts
   * const group = await client.campaign.groups.create('id', {
   *   name: 'Partners',
   *   rules: [{ type: 'DOMAIN', value: 'hooli.com' }],
   * });
   * ```
   */
  create(id: string, body: RewardGroupCreateParams, options?: RequestOptions): APIPromise<RewardGroup> {
    return this._client.post(path`/campaign/${id}/groups`, { body, ...options });
  }

  /**
   * Retrieves one of the program's groups.
   *
   * @example
   * ```ts
   * const group = await client.campaign.groups.retrieve('grp_k7m2qp', { id: 'id' });
   * ```
   */
  retrieve(
    groupID: string,
    params: RewardGroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RewardGroup> {
    const { id } = params;
    return this._client.get(path`/campaign/${id}/groups/${groupID}`, options);
  }

  /**
   * Renames, reorders, or changes the rules of a group. Sending `rules` replaces the whole list. An
   * added `PARTICIPANT` rule moves that participant in now; a removed one moves them back to Default
   * if they are still in this group. Email and domain rule changes move no one. To change the group's
   * rewards, update its Campaign Rewards.
   *
   * @example
   * ```ts
   * const group = await client.campaign.groups.update('grp_k7m2qp', {
   *   id: 'id',
   *   name: 'Strategic partners',
   * });
   * ```
   */
  update(
    groupID: string,
    params: RewardGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RewardGroup> {
    const { id, ...body } = params;
    return this._client.patch(path`/campaign/${id}/groups/${groupID}`, { body, ...options });
  }

  /**
   * Deletes a group. Its members move to Default, and its Campaign Rewards are removed from the
   * program, so they no longer appear in `GET /campaign/{id}/reward-configs`. Rewards already earned
   * keep their amounts and can still be sent.
   *
   * @example
   * ```ts
   * const response = await client.campaign.groups.delete('grp_k7m2qp', { id: 'id' });
   * ```
   */
  delete(
    groupID: string,
    params: RewardGroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeleteRewardGroupResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/groups/${groupID}`, options);
  }
}

/**
 * How a participant got into their group. `MANUAL` — a move (a `PARTICIPANT` rule, Update
 * participant, bulk move, or the dashboard), including a move to Default. `LINK` — the group's signup
 * link. `EMAIL` — an `EMAIL` rule. `DOMAIN` — a `DOMAIN` rule.
 */
export type RewardGroupSource = 'MANUAL' | 'LINK' | 'EMAIL' | 'DOMAIN';

/**
 * `PARTICIPANT` — an existing participant ID; the participant moves in now. `EMAIL` — an exact email
 * address. `DOMAIN` — a company domain such as `hooli.com`, which also matches its
 * subdomains. Email and domain rules place new signups and affiliate approvals.
 */
export type RewardGroupRuleType = 'PARTICIPANT' | 'EMAIL' | 'DOMAIN';

export interface RewardGroupRule {
  /** The kind of rule. */
  type: RewardGroupRuleType;

  /** The participant ID, email address, or domain. 1 to 254 characters. */
  value: string;
}

/**
 * A group of participants who earn their own rewards. Its rewards are the Campaign Rewards whose
 * `groupId` is this group's `id`.
 */
export interface RewardGroup {
  /** The group ID. Participants, Campaign Rewards, and participant rewards name it as `groupId`. */
  id: string;

  /** When the group was created, in Unix milliseconds. */
  createdAt: number;

  /** The group name (internal only, never shown to participants). */
  name: string;

  /** The group's position in the program's group list. */
  order: number;

  /** The rules that place participants in this group. */
  rules: Array<RewardGroupRule>;

  /** The code for this group's signup link. A participant who signs up through the link joins this group. */
  signupCode: string;

  /** When the group was last changed, in Unix milliseconds. */
  updatedAt: number;
}

export interface RewardGroupListResponse {
  /** The program's groups in display order. Default is not listed. */
  groups: Array<RewardGroup>;
}

export interface RewardGroupCreateParams {
  /** The group name (internal only, never shown to participants). 1 to 100 characters. */
  name: string;

  /** The rules that place participants in this group. Each email and domain can be in one group only. Up to 500. */
  rules?: Array<RewardGroupRule>;
}

export interface RewardGroupRetrieveParams {
  /** GrowSurf program ID. */
  id: string;
}

export interface RewardGroupUpdateParams {
  /** Path param: GrowSurf program ID. */
  id: string;

  /** Body param: The group name (internal only, never shown to participants). 1 to 100 characters. */
  name?: string;

  /** Body param: The group's position in the program's group list. */
  order?: number;

  /** Body param: Replaces the group's whole rule list. Up to 500. */
  rules?: Array<RewardGroupRule>;
}

export interface RewardGroupDeleteParams {
  /** GrowSurf program ID. */
  id: string;
}

export interface DeleteRewardGroupResponse {
  /** The deleted group ID. */
  id: string;

  /** The number of members moved to Default. */
  movedToDefault: number;

  /** Whether the group was deleted. */
  success: boolean;
}

export declare namespace Groups {
  export {
    type RewardGroup as RewardGroup,
    type RewardGroupRule as RewardGroupRule,
    type RewardGroupRuleType as RewardGroupRuleType,
    type RewardGroupSource as RewardGroupSource,
    type RewardGroupListResponse as RewardGroupListResponse,
    type RewardGroupCreateParams as RewardGroupCreateParams,
    type RewardGroupRetrieveParams as RewardGroupRetrieveParams,
    type RewardGroupUpdateParams as RewardGroupUpdateParams,
    type RewardGroupDeleteParams as RewardGroupDeleteParams,
    type DeleteRewardGroupResponse as DeleteRewardGroupResponse,
  };
}
