// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';
import { CampaignResource } from 'growsurf-typescript/resources/campaign/campaign';
import type {
  ProgramResource,
  ProgramResourceCreateParams,
  ProgramResourceUpdateParams,
  ProgramResourceUploadTicket,
} from 'growsurf-typescript/resources/campaign/program-resources';

const client = new Growsurf({ apiKey: 'My API Key', baseURL: 'http://127.0.0.1:4010' });

describe('resource program resources', () => {
  test('models expose epoch-millisecond timestamps and opaque scalar upload fields', () => {
    const resource: ProgramResource = {
      id: 'resource_abc123',
      type: 'TEXT',
      title: 'Launch notes',
      description: null,
      category: null,
      url: null,
      text: 'Welcome to Pied Piper.',
      file: null,
      isPublished: false,
      position: 0,
      createdAt: 1767225600000,
      updatedAt: 1767225600001,
    };
    const ticket: ProgramResourceUploadTicket = {
      ticket: 'one-time-ticket',
      expiresIn: 600,
      uploadUrl: 'https://upload.example.com/file',
      uploadParameters: { signature: 'signed', timestamp: 1767225600, overwrite: false },
    };

    expect(resource.createdAt).toBe(1767225600000);
    expect(ticket.uploadParameters).toEqual({
      signature: 'signed',
      timestamp: 1767225600,
      overwrite: false,
    });
    expect(ticket).not.toHaveProperty('cloudName');
    expect(CampaignResource.ProgramResources).toBeDefined();

    const link: ProgramResourceCreateParams = {
      type: 'LINK',
      title: 'Partner guide',
      url: 'https://example.com/guide',
    };
    const replacement: ProgramResourceUpdateParams = {
      id: 'program-id',
      uploadTicket: 'one-time-ticket',
      uploadResult: {
        public_id: 'program-resources/guide.pdf',
        version: 1,
        signature: 'signed',
        resource_type: 'raw',
        type: 'authenticated',
        bytes: 12,
        secure_url: 'https://downloads.example.com/guide.pdf',
      },
    };
    expect(link.type).toBe('LINK');
    expect(replacement.uploadTicket).toBe('one-time-ticket');
  });

  test.skip('list', async () => {
    await client.campaign.resources.list('id');
  });

  test('rejects update and upload-ticket bounds before HTTP', () => {
    expect(() => client.campaign.resources.update('resourceId', { id: 'id' })).toThrow(
      'requires at least one field',
    );
    expect(() => client.campaign.resources.update('resourceId', { id: 'id', position: 100 })).toThrow(
      'position must be an integer from 0 through 99',
    );
    expect(() => client.campaign.resources.update('resourceId', { id: 'id', type: 'LINK' } as never)).toThrow(
      'Changing a Program Resource to LINK requires url',
    );
    expect(() =>
      client.campaign.resources.createUploadTicket('id', {
        fileName: `${'a'.repeat(117)}.pdf`,
        mimeType: 'application/pdf',
        bytes: 42,
      }),
    ).toThrow('fileName must contain 1 through 120 characters');
  });
  test.skip('create', async () => {
    await client.campaign.resources.create('id', {
      type: 'LINK',
      title: 'Guide',
      url: 'https://example.com',
    });
  });
  test.skip('update', async () => {
    await client.campaign.resources.update('resourceId', { id: 'id', position: 1 });
  });
  test.skip('delete', async () => {
    await client.campaign.resources.delete('resourceId', { id: 'id' });
  });
  test.skip('createUploadTicket', async () => {
    await client.campaign.resources.createUploadTicket('id', {
      fileName: 'guide.pdf',
      mimeType: 'application/pdf',
      bytes: 42,
    });
  });
});
