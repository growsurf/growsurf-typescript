// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rewards', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.campaign.rewards.list('id');
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
    const responsePromise = client.campaign.rewards.create('id', { type: 'SINGLE_SIDED' });
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
    const response = await client.campaign.rewards.create('id', {
      type: 'SINGLE_SIDED',
      commissionStructure: {
        amount: 0,
        amountISO: 'amountISO',
        approvalRequired: true,
        duration: 'duration',
        durationInMonths: 0,
        event: 'event',
        hasIntro: true,
        hasMaxAmount: true,
        holdDuration: 0,
        introAmount: 0,
        introAmountISO: 'introAmountISO',
        introDuration: 'introDuration',
        introDurationInMonths: 0,
        introPercent: 0,
        introType: 'introType',
        maxAmount: 0,
        maxAmountISO: 'maxAmountISO',
        minPaidReferrals: 0,
        percent: 0,
        type: 'PERCENT',
      },
      conversionsRequired: 1,
      couponCode: 'couponCode',
      description: 'description',
      imageUrl: 'imageUrl',
      isUnlimited: true,
      isVisible: true,
      limit: 0,
      limitDuration: 'IN_TOTAL',
      metadata: { foo: 'bar' },
      nextMilestonePrefix: 'nextMilestonePrefix',
      nextMilestoneSuffix: 'nextMilestoneSuffix',
      numberOfWinners: 0,
      order: 0,
      referralCouponCode: 'referralCouponCode',
      referralDescription: 'referralDescription',
      referredRewardUpfront: true,
      referredValue: { fairMarketValueUSD: 0, isTaxReportable: true },
      title: 'title',
      value: { fairMarketValueUSD: 0, isTaxReportable: true },
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.campaign.rewards.update('campaignRewardId', { id: 'id' });
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
    const response = await client.campaign.rewards.update('campaignRewardId', {
      id: 'id',
      commissionStructure: {
        amount: 0,
        amountISO: 'amountISO',
        approvalRequired: true,
        duration: 'duration',
        durationInMonths: 0,
        event: 'event',
        hasIntro: true,
        hasMaxAmount: true,
        holdDuration: 0,
        introAmount: 0,
        introAmountISO: 'introAmountISO',
        introDuration: 'introDuration',
        introDurationInMonths: 0,
        introPercent: 0,
        introType: 'introType',
        maxAmount: 0,
        maxAmountISO: 'maxAmountISO',
        minPaidReferrals: 0,
        percent: 0,
        type: 'PERCENT',
      },
      conversionsRequired: 1,
      couponCode: 'couponCode',
      description: 'description',
      imageUrl: 'imageUrl',
      isUnlimited: true,
      isVisible: true,
      limit: 0,
      limitDuration: 'IN_TOTAL',
      metadata: { foo: 'bar' },
      nextMilestonePrefix: 'nextMilestonePrefix',
      nextMilestoneSuffix: 'nextMilestoneSuffix',
      numberOfWinners: 0,
      order: 0,
      referralCouponCode: 'referralCouponCode',
      referralDescription: 'referralDescription',
      referredRewardUpfront: true,
      referredValue: { fairMarketValueUSD: 0, isTaxReportable: true },
      title: 'title',
      value: { fairMarketValueUSD: 0, isTaxReportable: true },
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.campaign.rewards.delete('campaignRewardId', { id: 'id' });
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
    const response = await client.campaign.rewards.delete('campaignRewardId', { id: 'id' });
  });
});
