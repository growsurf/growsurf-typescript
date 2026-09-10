// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Integration status operations. Connecting an integration is done in the GrowSurf
 * dashboard, so this resource is read-only.
 */
export class Integrations extends APIResource {
  /**
   * Lists every integration this program can connect, each with its current state.
   * Integrations that do not apply to the program type are omitted (for example,
   * Wise on a referral program). Read-only: connecting an integration is an OAuth or
   * credential handshake completed in the GrowSurf dashboard, so it cannot be done
   * over the API. `connected` means credentials are stored, `enabled` means the
   * integration is switched on and working, and `autoDisabled` means GrowSurf
   * switched it off after repeated delivery failures — its credentials are still
   * stored, but it delivers nothing until it is reconnected in the dashboard.
   *
   * @example
   * ```ts
   * const integrations = await client.campaign.integrations.list(
   *   'id',
   * );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get(path`/campaign/${id}/integrations`, options);
  }
}

/**
 * One integration a program can connect, with its current state.
 */
export interface Integration {
  /**
   * Stable integration key, the same value the GrowSurf dashboard uses for this
   * integration.
   */
  id: string;

  /**
   * Display name, matching what the GrowSurf dashboard calls this integration.
   */
  name: string;

  /**
   * Whether the program has stored credentials for this integration.
   */
  connected: boolean;

  /**
   * Whether the integration is switched on and currently working.
   */
  enabled: boolean;

  /**
   * Whether GrowSurf switched the integration off after repeated delivery failures.
   * Its credentials are still stored, but it delivers nothing until it is
   * reconnected in the GrowSurf dashboard.
   */
  autoDisabled: boolean;

  /**
   * Dashboard link that opens this integration's connect panel in the GrowSurf
   * Program Editor. Give it to the person running the program: connecting an account
   * is a step they complete in the dashboard, and the API cannot do it for them.
   */
  connectUrl: string;
}

export interface IntegrationListResponse {
  /**
   * Every integration this program can connect, in the order the GrowSurf dashboard
   * lists them.
   */
  integrations: Array<Integration>;
}

export declare namespace Integrations {
  export { type Integration as Integration, type IntegrationListResponse as IntegrationListResponse };
}
