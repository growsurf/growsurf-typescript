// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Campaign emails (`CampaignEmails`) configuration operations — the dashboard
 * Program Editor's **Emails** tab.
 */
export class Emails extends APIResource {
  /**
   * Retrieves a program's email configuration — the same surface as the dashboard
   * Program Editor's **Emails** tab. Returns each editable email template
   * (`subject`, `preheader`, `body`, `isEnabled`) plus the `settings` block (sender,
   * contact, and design). The set of email templates returned depends on the program
   * type (referral vs affiliate).
   *
   * @example
   * ```ts
   * const email = await client.campaign.emails.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CampaignEmails> {
    return this._client.get(path`/campaign/${id}/emails`, options);
  }

  /**
   * Updates a program's email configuration. Only the fields you send are changed;
   * omitted fields are left untouched. You may only write the email templates the
   * dashboard exposes for the program type — writing a template that is not available
   * for the program type returns a `400`. Some fields are read-only
   * (`settings.sender.fromEmail`, whose custom value requires dashboard domain
   * verification).
   *
   * @example
   * ```ts
   * const email = await client.campaign.emails.update('id', {});
   * ```
   */
  update(id: string, body: EmailUpdateParams, options?: RequestOptions): APIPromise<CampaignEmails> {
    return this._client.patch(path`/campaign/${id}/emails`, { body, ...options });
  }
}

/**
 * A program's email configuration (dashboard Program Editor **Emails** tab): the
 * editable email templates plus the `settings` block. The set of keys is
 * intentionally left open; to see the full object with every field and its current
 * value, `GET` this resource, then `PATCH` back only the fields you want to change.
 */
export type CampaignEmails = { [key: string]: unknown };

/**
 * A partial `CampaignEmails` — only the fields you send are changed. The set of keys
 * is intentionally left open; to see the full object with every field and its
 * current value, `GET` this resource, then `PATCH` back only the fields you want to
 * change.
 */
export type EmailUpdateParams = { [key: string]: unknown };

export declare namespace Emails {
  export { type CampaignEmails as CampaignEmails, type EmailUpdateParams as EmailUpdateParams };
}
