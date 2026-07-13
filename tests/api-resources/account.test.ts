// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource account', () => {
  test.each([
    ['without an API key', undefined],
    ['with an API key configured', 'My API Key'],
  ])('create works %s and never sends Authorization', async (_label, apiKey) => {
    const originalAPIKey = process.env['GROWSURF_API_KEY'];
    delete process.env['GROWSURF_API_KEY'];
    const requestFetch = jest.fn(
      async (_url: string | URL | Request, init?: RequestInit) =>
        new Response(
          JSON.stringify({
            email: 'richard@piedpiper.com',
            apiKey: 'new_key',
            verificationStatus: 'NOT_REQUESTED',
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
    );

    try {
      const keylessClient = new Growsurf({
        ...(apiKey === undefined ? {} : { apiKey }),
        baseURL: 'http://localhost:4010',
        fetch: requestFetch,
      });

      await keylessClient.account.create({ email: 'richard@piedpiper.com' });

      expect(requestFetch).toHaveBeenCalledTimes(1);
      const headers = new Headers(requestFetch.mock.calls[0]?.[1]?.headers);
      expect(headers.has('authorization')).toBe(false);
    } finally {
      if (originalAPIKey === undefined) delete process.env['GROWSURF_API_KEY'];
      else process.env['GROWSURF_API_KEY'] = originalAPIKey;
    }
  });

  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.account.create({ email: 'richard@piedpiper.com' });
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
    await client.account.create({
      email: 'richard@piedpiper.com',
      company: 'Pied Piper',
      firstName: 'Richard',
      lastName: 'Hendricks',
    });
  });
});
