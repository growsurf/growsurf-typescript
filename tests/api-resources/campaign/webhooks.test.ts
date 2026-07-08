// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.campaign.webhooks.list('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.campaign.webhooks.create('id', {
      payloadUrl: 'https://piedpiper.com/growsurf/webhook',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.campaign.webhooks.create('id', {
      payloadUrl: 'https://piedpiper.com/growsurf/webhook',
      events: ['NEW_PARTICIPANT_ADDED', 'PARTICIPANT_REACHED_A_GOAL'],
      isEnabled: true,
      secret: 'whsec_middleout',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.campaign.webhooks.update('webhookId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.campaign.webhooks.update('webhookId', {
      id: 'id',
      events: ['NEW_PARTICIPANT_ADDED'],
      isEnabled: false,
      payloadUrl: 'https://piedpiper.com/growsurf/webhook',
      secret: 'whsec_middleout',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.campaign.webhooks.delete('webhookId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.campaign.webhooks.delete('webhookId', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('test: only required params', async () => {
    const responsePromise = client.campaign.webhooks.test('webhookId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('test: required and optional params', async () => {
    const response = await client.campaign.webhooks.test('webhookId', {
      id: 'id',
      event: 'NEW_PARTICIPANT_ADDED',
    });
  });
});
