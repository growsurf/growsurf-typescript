// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaign', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.campaign.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.campaign.list();
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
    const responsePromise = client.campaign.create({ type: 'REFERRAL' });
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
    const response = await client.campaign.create({
      type: 'REFERRAL',
      companyLogoImageUrl: 'companyLogoImageUrl',
      companyName: 'companyName',
      currencyISO: 'currencyISO',
      name: 'name',
      rewards: [{ type: 'SINGLE_SIDED' }],
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.campaign.update('id', {});
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
    const response = await client.campaign.update('id', {
      companyLogoImageUrl: 'companyLogoImageUrl',
      companyName: 'companyName',
      name: 'name',
      status: 'IN_PROGRESS',
    });
  });

  // Mock server tests are disabled
  test.skip('clone', async () => {
    const responsePromise = client.campaign.clone('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getReferralFlowScreenshots', async () => {
    const responsePromise = client.campaign.getReferralFlowScreenshots('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createMobileParticipantToken: only required params', async () => {
    const responsePromise = client.campaign.createMobileParticipantToken('id', {
      email: 'dev@stainless.com',
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
  test.skip('createMobileParticipantToken: required and optional params', async () => {
    const response = await client.campaign.createMobileParticipantToken('id', {
      email: 'dev@stainless.com',
      fingerprint: 'fingerprint',
      firstName: 'firstName',
      ipAddress: 'ipAddress',
      lastName: 'lastName',
      metadata: { foo: 'bar' },
      mobileInstanceId: 'mobileInstanceId',
      referralStatus: 'CREDIT_PENDING',
      referredBy: 'referredBy',
    });
  });

  // Mock server tests are disabled
  test.skip('listCommissions', async () => {
    const responsePromise = client.campaign.listCommissions('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listCommissions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listCommissions(
        'id',
        {
          limit: 1,
          nextId: 'nextId',
          status: 'PENDING',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listLeaderboard', async () => {
    const responsePromise = client.campaign.listLeaderboard('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listLeaderboard: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listLeaderboard(
        'id',
        {
          isMonthly: true,
          leaderboardType: 'ALL_TIME',
          limit: 1,
          nextId: 'nextId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listParticipants', async () => {
    const responsePromise = client.campaign.listParticipants('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listParticipants: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listParticipants(
        'id',
        { limit: 1, nextId: 'nextId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listPayouts', async () => {
    const responsePromise = client.campaign.listPayouts('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPayouts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listPayouts(
        'id',
        {
          limit: 1,
          nextId: 'nextId',
          status: 'UPCOMING',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listReferrals', async () => {
    const responsePromise = client.campaign.listReferrals('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listReferrals: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listReferrals(
        'id',
        {
          desc: true,
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          limit: 1,
          nextId: 'nextId',
          offset: 0,
          referralStatus: 'CREDIT_PENDING',
          sortBy: 'updatedAt',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveAnalytics', async () => {
    const responsePromise = client.campaign.retrieveAnalytics('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveAnalytics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.retrieveAnalytics(
        'id',
        {
          days: 1,
          endDate: 0,
          startDate: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });
});
