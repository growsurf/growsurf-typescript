// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign custom domain (`CampaignCustomDomain`) operations — the custom domain that serves a
 * program's landing pages.
 */
export class CustomDomain extends APIResource {
  /**
   * Retrieves the custom domain that serves a program's landing pages, and whether its DNS is
   * verified. When no custom domain is set, `domain` is `null`. This call does not check DNS; use
   * `verify` for a live check.
   *
   * @example
   * ```ts
   * const customDomain = await client.campaign.customDomain.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignCustomDomain> {
    return this._client.get(path`/campaign/${id}/custom-domain`, options);
  }

  /**
   * Sets the custom domain for a program's landing pages, or replaces the current one. Send a
   * hostname such as `refer.piedpiper.com`; `https://` is added if you leave it out. Paths, ports,
   * queries and `http://` return a `400`.
   *
   * Replacing a domain removes the old one right away, and its pages stop loading there. Sending
   * the current domain again changes nothing. A domain used by another program returns a `409`.
   *
   * A new domain starts unverified. Point a `CNAME` record from the hostname to the
   * `dnsRecord.value` in the response, then call `verify`.
   *
   * @example
   * ```ts
   * const customDomain = await client.campaign.customDomain.set('id', {
   *   domain: 'refer.piedpiper.com',
   * });
   * ```
   */
  set(id: string, body: CustomDomainSetParams, options?: RequestOptions): APIPromise<CampaignCustomDomain> {
    return this._client.put(path`/campaign/${id}/custom-domain`, { body, ...options });
  }

  /**
   * Checks the custom domain's DNS now and returns the result in `isVerified`. The first time the
   * check passes, GrowSurf sets up the domain's SSL certificate; pages can take a few minutes to
   * load over `https://` after that. If the record is wrong or has not propagated yet,
   * `isVerified` stays `false`; call again later. More than one `CNAME` record on the hostname
   * returns a `400`. Returns a `404` when no custom domain is set.
   * A domain that is already verified is returned as is, without a new check.
   *
   * @example
   * ```ts
   * const customDomain = await client.campaign.customDomain.verify('id');
   * ```
   */
  verify(id: string, options?: RequestOptions): APIPromise<CampaignCustomDomain> {
    return this._client.post(path`/campaign/${id}/custom-domain/verify`, options);
  }

  /**
   * Removes a program's custom domain. Its landing pages go back to their GrowSurf URL. Returns a
   * `404` when no custom domain is set.
   *
   * @example
   * ```ts
   * const customDomain = await client.campaign.customDomain.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DeleteCampaignCustomDomainResponse> {
    return this._client.delete(path`/campaign/${id}/custom-domain`, options);
  }
}

/** The DNS record to add at your DNS provider. */
export interface CampaignCustomDomainDNSRecord {
  /** The record type. Always `CNAME`. */
  type: 'CNAME';

  /** The hostname the record is for, such as `refer.piedpiper.com`. */
  name: string;

  /** The record's target, such as `grow.surf`. */
  value: string;
}

/** The custom domain that serves a program's landing pages. */
export interface CampaignCustomDomain {
  /** The custom domain, such as `https://refer.piedpiper.com`, or `null` when none is set. */
  domain: string | null;

  /**
   * Whether the domain's `CNAME` record pointed to `dnsRecord.value` at the last check. Landing
   * pages load on the domain only when this is `true`.
   */
  isVerified: boolean;

  /** When the DNS check passed, in epoch milliseconds. `null` while unverified. */
  verifiedAt: number | null;

  /** The DNS record to add at your DNS provider. `null` when no domain is set. */
  dnsRecord: CampaignCustomDomainDNSRecord | null;

  /** When the domain was set, in epoch milliseconds. `null` when no domain is set. */
  createdAt: number | null;

  /** When the domain record last changed, in epoch milliseconds. `null` when no domain is set. */
  updatedAt: number | null;
}

export interface DeleteCampaignCustomDomainResponse {
  /** The custom domain that was removed, such as `https://refer.piedpiper.com`. */
  domain: string;

  /** Whether the custom domain was removed. */
  success: boolean;
}

export interface CustomDomainSetParams {
  /**
   * The hostname to serve the program's landing pages from, with or without `https://`. Up to 255
   * characters.
   */
  domain: string;
}

export declare namespace CustomDomain {
  export {
    type CampaignCustomDomain as CampaignCustomDomain,
    type CampaignCustomDomainDNSRecord as CampaignCustomDomainDNSRecord,
    type DeleteCampaignCustomDomainResponse as DeleteCampaignCustomDomainResponse,
    type CustomDomainSetParams as CustomDomainSetParams,
  };
}
