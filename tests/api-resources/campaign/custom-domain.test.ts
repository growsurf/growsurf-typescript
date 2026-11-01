// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customDomain', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.campaign.customDomain.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.campaign.customDomain.set('id', { domain: 'refer.piedpiper.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('verify', async () => {
    const responsePromise = client.campaign.customDomain.verify('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.campaign.customDomain.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sends each operation with its REST v2 method and path', async () => {
    const requestFetch = jest.fn(
      async (_url: string | URL | Request, _init?: RequestInit) =>
        new Response(JSON.stringify({}), { status: 200, headers: { 'content-type': 'application/json' } }),
    );
    const fetchClient = new Growsurf({
      apiKey: 'My API Key',
      baseURL: 'http://localhost:4010',
      fetch: requestFetch,
    });

    await fetchClient.campaign.customDomain.retrieve('abc123');
    await fetchClient.campaign.customDomain.set('abc123', { domain: 'refer.piedpiper.com' });
    await fetchClient.campaign.customDomain.verify('abc123');
    await fetchClient.campaign.customDomain.delete('abc123');

    const calls = requestFetch.mock.calls.map(([url, init]) => [init?.method, String(url)]);
    expect(calls).toEqual([
      ['GET', 'http://localhost:4010/campaign/abc123/custom-domain'],
      ['PUT', 'http://localhost:4010/campaign/abc123/custom-domain'],
      ['POST', 'http://localhost:4010/campaign/abc123/custom-domain/verify'],
      ['DELETE', 'http://localhost:4010/campaign/abc123/custom-domain'],
    ]);
    expect(JSON.parse(String(requestFetch.mock.calls[1]?.[1]?.body))).toEqual({
      domain: 'refer.piedpiper.com',
    });
  });
});
