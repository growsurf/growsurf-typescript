// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/** Enforces request invariants that cannot be expressed by the generated TypeScript surface. */
function validateProgramResourceUpdate(body: Omit<ProgramResourceUpdateParams, 'id'>): void {
  if (Object.keys(body).length === 0) {
    throw new Error('Program Resource update requires at least one field');
  }
  if (
    body.position !== undefined &&
    (!Number.isInteger(body.position) || body.position < 0 || body.position > 99)
  ) {
    throw new RangeError('Program Resource position must be an integer from 0 through 99');
  }
}

/** Enforces the public upload-ticket filename limit before making a request. */
function validateProgramResourceUploadTicket(body: ProgramResourceUploadTicketParams): void {
  if (body.fileName.length < 1 || body.fileName.length > 120) {
    throw new RangeError('Program Resource fileName must contain 1 through 120 characters');
  }
}

/** Program Resources configuration and secure FILE upload operations. */
export class ProgramResources extends APIResource {
  list(id: string, options?: RequestOptions): APIPromise<ProgramResourceListResponse> {
    return this._client.get(path`/campaign/${id}/resources`, options);
  }

  create(
    id: string,
    body: ProgramResourceCreateParams,
    options?: RequestOptions,
  ): APIPromise<ProgramResource> {
    return this._client.post(path`/campaign/${id}/resources`, { body, ...options });
  }

  update(
    resourceID: string,
    params: ProgramResourceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProgramResource> {
    const { id, ...body } = params;
    validateProgramResourceUpdate(body);
    return this._client.patch(path`/campaign/${id}/resources/${resourceID}`, { body, ...options });
  }

  delete(
    resourceID: string,
    params: ProgramResourceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DeleteProgramResourceResponse> {
    const { id } = params;
    return this._client.delete(path`/campaign/${id}/resources/${resourceID}`, options);
  }

  createUploadTicket(
    id: string,
    body: ProgramResourceUploadTicketParams,
    options?: RequestOptions,
  ): APIPromise<ProgramResourceUploadTicket> {
    validateProgramResourceUploadTicket(body);
    return this._client.post(path`/campaign/${id}/resource-upload-tickets`, { body, ...options });
  }
}

export type ProgramResourceType = 'FILE' | 'LINK' | 'TEXT';
export type ProgramResourceModerationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface ProgramResourceFile {
  fileName: string;
  mimeType: string;
  bytes: number;
  format: string;
  moderationStatus: ProgramResourceModerationStatus;
}

export interface ProgramResource {
  id: string;
  type: ProgramResourceType;
  title: string;
  description: string | null;
  category: string | null;
  url: string | null;
  text: string | null;
  file: ProgramResourceFile | null;
  isPublished: boolean;
  position: number;
  /** Unix time in milliseconds when the resource was created. */
  createdAt: number;
  /** Unix time in milliseconds when the resource was last updated. */
  updatedAt: number;
}

export interface ProgramResourceListResponse {
  resources: Array<ProgramResource>;
}

export interface ProgramResourceUploadResult {
  public_id: string;
  version: number;
  signature: string;
  resource_type: 'image' | 'raw';
  type: 'authenticated';
  bytes: number;
  secure_url: string;
  asset_id?: string;
  format?: string;
  [key: string]: unknown;
}

interface ProgramResourceCommonCreateParams {
  title: string;
  description?: string | null;
  category?: string | null;
  isPublished?: boolean;
}

export type ProgramResourceCreateParams = ProgramResourceCommonCreateParams &
  (
    | {
        type: 'FILE';
        uploadTicket: string;
        uploadResult: ProgramResourceUploadResult;
        url?: never;
        text?: never;
      }
    | {
        type: 'LINK';
        url: string;
        text?: never;
        uploadTicket?: never;
        uploadResult?: never;
      }
    | {
        type: 'TEXT';
        text: string;
        url?: never;
        uploadTicket?: never;
        uploadResult?: never;
      }
  );

interface ProgramResourceCommonUpdateParams {
  /** GrowSurf program ID. */
  id: string;
  title?: string;
  description?: string | null;
  category?: string | null;
  isPublished?: boolean;
  /** Zero-based destination. Must be an integer from 0 through 99 and within the current list. */
  position?: number;
}

export type ProgramResourceUpdateParams = ProgramResourceCommonUpdateParams &
  (
    | {
        type?: ProgramResourceType;
        url?: never;
        text?: never;
        uploadTicket?: never;
        uploadResult?: never;
      }
    | {
        type?: 'LINK';
        url: string;
        text?: never;
        uploadTicket?: never;
        uploadResult?: never;
      }
    | {
        type?: 'TEXT';
        text: string;
        url?: never;
        uploadTicket?: never;
        uploadResult?: never;
      }
    | {
        type?: 'FILE';
        uploadTicket: string;
        uploadResult: ProgramResourceUploadResult;
        url?: never;
        text?: never;
      }
  );

export interface ProgramResourceDeleteParams {
  /** GrowSurf program ID. */
  id: string;
}

export interface DeleteProgramResourceResponse {
  id: string;
  success: true;
}

export interface ProgramResourceUploadTicketParams {
  /** File name sent to GrowSurf. Must contain 1 through 120 characters. */
  fileName: string;
  mimeType: string;
  bytes: number;
}

export interface ProgramResourceUploadTicket {
  ticket: string;
  expiresIn: number;
  uploadUrl: string;
  /** Opaque signed scalar fields that must be sent unchanged with the file upload. */
  uploadParameters: Record<string, string | number | boolean>;
}

export declare namespace ProgramResources {
  export {
    type ProgramResource,
    type ProgramResourceFile,
    type ProgramResourceType,
    type ProgramResourceModerationStatus,
    type ProgramResourceListResponse,
    type ProgramResourceUploadResult,
    type ProgramResourceCreateParams,
    type ProgramResourceUpdateParams,
    type ProgramResourceDeleteParams,
    type DeleteProgramResourceResponse,
    type ProgramResourceUploadTicketParams,
    type ProgramResourceUploadTicket,
  };
}
