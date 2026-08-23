// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';
import type { ParticipantRetrieveAnalyticsResponse } from 'growsurf-typescript/resources/campaign/participant';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaign', () => {
  test('affiliate response types accept runtime nulls', () => {
    const application: Growsurf.AffiliateApplication = {
      id: 'app_123',
      answers: [
        {
          fieldId: 'primaryChannelUrl',
          label: 'Website or social media channel',
          type: 'url',
          value: 'https://aviato.com',
        },
        {
          fieldId: 'teamSize',
          label: 'Team size',
          type: 'number',
          value: 4,
        },
        {
          fieldId: 'acceptRules',
          label: 'Accept rules',
          type: 'checkbox',
          value: true,
        },
      ],
      createdAt: 1752710400000,
      decidedAt: null,
      email: null,
      firstName: null,
      lastName: null,
      participantId: null,
      reapplyAllowedAt: null,
      rejectionReason: null,
      reviewedAt: null,
      riskLevel: null,
      status: 'PENDING',
      termsAcceptedAt: null,
    };
    const invite: Growsurf.AffiliateInvite = {
      acceptedAt: null,
      firstName: null,
      lastName: null,
      revokedAt: null,
    };

    expect(application.email).toBeNull();
    expect(invite.acceptedAt).toBeNull();
  });

  test('campaign analytics response types include lifecycle and affiliate metrics', () => {
    const response: Growsurf.CampaignRetrieveAnalyticsResponse = {
      analytics: { uniqueCommissionReferrals: 3 },
      endDate: 2,
      startDate: 1,
      email: {
        sent: 2,
        delivered: 1,
        opened: 1,
        clicked: 1,
        bounced: 1,
        spamComplaints: 0,
        deliveryRate: 0.5,
        openRate: 1,
        clickRate: 1,
        bounceRate: 0.5,
        byType: [],
        coverageStartDate: null,
        isPartial: false,
      },
      series: [{ periodStart: 1, uniqueCommissionReferrals: 2 }],
      previousPeriod: {
        analytics: { uniqueCommissionReferrals: 1 },
        startDate: 0,
        endDate: 1,
      },
    };
    const participantResponse: ParticipantRetrieveAnalyticsResponse = {
      analytics: {},
      ranks: {},
      shareCount: {},
      series: [{ periodStart: 1, uniqueCommissionReferrals: 4 }],
    };

    expect(response.email?.sent).toBe(2);
    expect(response.analytics.uniqueCommissionReferrals).toBe(3);
    expect(response.series?.[0]?.uniqueCommissionReferrals).toBe(2);
    expect(response.previousPeriod?.analytics?.uniqueCommissionReferrals).toBe(1);
    expect(participantResponse.series?.[0]?.uniqueCommissionReferrals).toBe(4);
  });

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

  test.skip('listAffiliateApplications', async () => {
    const responsePromise = client.campaign.listAffiliateApplications('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('listAffiliateApplications: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listAffiliateApplications(
        'id',
        { limit: 1, offset: 0, status: 'PENDING' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  test.skip('retrieveAffiliateApplication: only required params', async () => {
    const responsePromise = client.campaign.retrieveAffiliateApplication('applicationId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('retrieveAffiliateApplication: required and optional params', async () => {
    const response = await client.campaign.retrieveAffiliateApplication('applicationId', { id: 'id' });
  });

  test.skip('reviewAffiliateApplication: only required params', async () => {
    const responsePromise = client.campaign.reviewAffiliateApplication('applicationId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('reviewAffiliateApplication: required and optional params', async () => {
    const response = await client.campaign.reviewAffiliateApplication('applicationId', {
      id: 'id',
      allowImmediateReapply: true,
      reapplyAllowedAt: 0,
      rejectionReason: 'rejectionReason',
      reviewNote: 'reviewNote',
      status: 'APPROVED',
    });
  });

  test.skip('listAffiliateInvites', async () => {
    const responsePromise = client.campaign.listAffiliateInvites('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('listAffiliateInvites: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.campaign.listAffiliateInvites(
        'id',
        { limit: 1, offset: 0, status: 'PENDING' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Growsurf.NotFoundError);
  });

  test.skip('createAffiliateInvite: only required params', async () => {
    const responsePromise = client.campaign.createAffiliateInvite('id', { email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('createAffiliateInvite: required and optional params', async () => {
    const response = await client.campaign.createAffiliateInvite('id', {
      email: 'dev@stainless.com',
      firstName: 'firstName',
      lastName: 'lastName',
    });
  });

  test.skip('revokeAffiliateInvite: only required params', async () => {
    const responsePromise = client.campaign.revokeAffiliateInvite('inviteId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('revokeAffiliateInvite: required and optional params', async () => {
    const response = await client.campaign.revokeAffiliateInvite('inviteId', { id: 'id' });
  });

  test.skip('resendAffiliateInvite: only required params', async () => {
    const responsePromise = client.campaign.resendAffiliateInvite('inviteId', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test.skip('resendAffiliateInvite: required and optional params', async () => {
    const response = await client.campaign.resendAffiliateInvite('inviteId', { id: 'id' });
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
