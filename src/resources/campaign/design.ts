// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign design (`CampaignDesign`) configuration operations — the dashboard
 * Program Editor's **Design** tab.
 */
export class Design extends APIResource {
  /**
   * Retrieves a program's design configuration — the same surface as the dashboard
   * Program Editor's **Design** tab: the GrowSurf window layout, header, share
   * channels + invite, signup form, portal/landing pages, theme styling, and the
   * referral/affiliate summary + status sections. This is a large object; the
   * available fields depend on the program type.
   *
   * @example
   * ```ts
   * const design = await client.campaign.design.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignDesign> {
    return this._client.get(path`/campaign/${id}/design`, options);
  }

  /**
   * Updates a program's design configuration. Only the fields you send are changed (a
   * surgical merge; arrays such as `signup.fields` replace wholesale). Unknown
   * fields, fields not available for the program type, and invalid values return a
   * `400`.
   *
   * @example
   * ```ts
   * const design = await client.campaign.design.update('id', {});
   * ```
   */
  update(id: string, body: DesignUpdateParams, options?: RequestOptions): APIPromise<CampaignDesign> {
    return this._client.patch(path`/campaign/${id}/design`, { body, ...options });
  }
}

/**
 * A program's design configuration (dashboard Program Editor **Design** tab). This
 * is a large, deeply-nested object whose available fields depend on the program
 * type. The set of keys is intentionally left open; see the API reference for the
 * full field list.
 */
export type CampaignDesign = { [key: string]: unknown };

/**
 * A partial `CampaignDesign` — only the fields you send are changed. The set of keys
 * is intentionally left open; see the API reference for the full field list.
 */
export type DesignUpdateParams = { [key: string]: unknown };

export declare namespace Design {
  export { type CampaignDesign as CampaignDesign, type DesignUpdateParams as DesignUpdateParams };
}
