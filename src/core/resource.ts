// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Growsurf } from '../client';

export abstract class APIResource {
  protected _client: Growsurf;

  constructor(client: Growsurf) {
    this._client = client;
  }
}
