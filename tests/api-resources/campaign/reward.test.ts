// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reward', () => {
  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.campaign.reward.delete('rewardId', { id: 'id' });
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
    const response = await client.campaign.reward.delete('rewardId', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('approve: only required params', async () => {
    const responsePromise = client.campaign.reward.approve('rewardId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('approve: required and optional params', async () => {
    const response = await client.campaign.reward.approve('rewardId', { id: 'id', fulfill: true });
  });

  // Mock server tests are disabled
  test.skip('fulfill: only required params', async () => {
    const responsePromise = client.campaign.reward.fulfill('rewardId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('fulfill: required and optional params', async () => {
    const response = await client.campaign.reward.fulfill('rewardId', { id: 'id' });
  });
});
