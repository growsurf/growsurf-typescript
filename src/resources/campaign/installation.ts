// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign installation (`CampaignInstallation`) configuration operations — the
 * dashboard Program Editor's **Installation** tab (plus the Mobile SDK settings).
 */
export class Installation extends APIResource {
  /**
   * Retrieves a program's installation configuration — the same surface as the
   * dashboard Program Editor's **Installation** tab (plus the Mobile SDK settings).
   * Includes the referral trigger (referral programs only), signup tracking method,
   * share URL and whitelist, custom-form signup settings, and mobile SDK settings.
   *
   * @example
   * ```ts
   * const installation =
   *   await client.campaign.installation.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignInstallation> {
    return this._client.get(path`/campaign/${id}/installation`, options);
  }

  /**
   * Updates a program's installation configuration. Only the fields you send are
   * changed; omitted fields are left untouched. `referralTrigger` is only available
   * for referral programs. `mobile.publicKey` is read-only; if no key exists yet,
   * enabling `mobile.isEnabled` creates one. Changing `shareUrl` re-resolves its
   * redirect destinations, which may take a moment to complete. URLs must include an
   * explicit `http://` or `https://` scheme.
   *
   * @example
   * ```ts
   * const installation = await client.campaign.installation.update(
   *   'id',
   *   {},
   * );
   * ```
   */
  update(
    id: string,
    body: InstallationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignInstallation> {
    return this._client.patch(path`/campaign/${id}/installation`, { body, ...options });
  }
}

/**
 * A program's installation configuration (dashboard Program Editor **Installation**
 * tab, plus Mobile SDK settings): referral trigger, signup tracking, share URL +
 * whitelist, custom-form signup, and mobile SDK settings. The set of keys is
 * intentionally left open; to see the full object with every field and its current
 * value, `GET` this resource, then `PATCH` back only the fields you want to change.
 */
export type CampaignInstallation = { [key: string]: unknown };

/**
 * A partial `CampaignInstallation` — only the fields you send are changed. The set
 * of keys is intentionally left open; to see the full object with every field and
 * its current value, `GET` this resource, then `PATCH` back only the fields you want
 * to change.
 */
export type InstallationUpdateParams = { [key: string]: unknown };

export declare namespace Installation {
  export {
    type CampaignInstallation as CampaignInstallation,
    type InstallationUpdateParams as InstallationUpdateParams,
  };
}
