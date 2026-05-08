// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from '@growsurfteam/growsurf-typescript';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource participant', () => {
  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.campaign.participant.retrieve('participantIdOrEmail', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.campaign.participant.retrieve('participantIdOrEmail', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.campaign.participant.update('participantIdOrEmail', { id: 'id' });
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
    const response = await client.campaign.participant.update('participantIdOrEmail', {
      id: 'id',
      email: 'dev@stainless.com',
      firstName: 'Gavin',
      lastName: 'Belson',
      metadata: { company: 'bar' },
      referralStatus: 'CREDIT_PENDING',
      referredBy: 'referredBy',
      unsubscribed: false,
      vanityKeys: ['_1k--w2KifJ1'],
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.campaign.participant.delete('participantIdOrEmail', { id: 'id' });
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
    const response = await client.campaign.participant.delete('participantIdOrEmail', { id: 'id' });
  });

  // Mock server tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.campaign.participant.add('id', { email: 'gavin@hooli.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.campaign.participant.add('id', {
      email: 'gavin@hooli.com',
      fingerprint: 'fingerprint',
      firstName: 'Gavin',
      ipAddress: '203.0.113.10',
      lastName: 'Belson',
      metadata: { companyName: 'bar', industry: 'bar' },
      referralStatus: 'CREDIT_PENDING',
      referredBy: 'richard-h8kp6l',
    });
  });

  // Mock server tests are disabled
  test.skip('listCommissions: only required params', async () => {
    const responsePromise = client.campaign.participant.listCommissions('participantIdOrEmail', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listCommissions: required and optional params', async () => {
    const response = await client.campaign.participant.listCommissions('participantIdOrEmail', {
      id: 'id',
      limit: 1,
      nextId: 'nextId',
      status: 'PENDING',
    });
  });

  // Mock server tests are disabled
  test.skip('listPayouts: only required params', async () => {
    const responsePromise = client.campaign.participant.listPayouts('participantIdOrEmail', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPayouts: required and optional params', async () => {
    const response = await client.campaign.participant.listPayouts('participantIdOrEmail', {
      id: 'id',
      limit: 1,
      nextId: 'nextId',
      status: 'UPCOMING',
    });
  });

  // Mock server tests are disabled
  test.skip('listReferrals: only required params', async () => {
    const responsePromise = client.campaign.participant.listReferrals('participantIdOrEmail', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listReferrals: required and optional params', async () => {
    const response = await client.campaign.participant.listReferrals('participantIdOrEmail', {
      id: 'id',
      desc: true,
      email: 'email',
      firstName: 'firstName',
      lastName: 'lastName',
      limit: 1,
      nextId: 'nextId',
      offset: 0,
      referralStatus: 'CREDIT_PENDING',
      sortBy: 'updatedAt',
    });
  });

  // Mock server tests are disabled
  test.skip('listRewards: only required params', async () => {
    const responsePromise = client.campaign.participant.listRewards('participantIdOrEmail', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRewards: required and optional params', async () => {
    const response = await client.campaign.participant.listRewards('participantIdOrEmail', {
      id: 'id',
      limit: 1,
      nextId: 'nextId',
    });
  });

  // Mock server tests are disabled
  test.skip('recordTransaction: only required params', async () => {
    const responsePromise = client.campaign.participant.recordTransaction('participantIdOrEmail', {
      id: 'id',
      currency: 'USD',
      grossAmount: 9900,
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
  test.skip('recordTransaction: required and optional params', async () => {
    const response = await client.campaign.participant.recordTransaction('participantIdOrEmail', {
      id: 'id',
      currency: 'USD',
      grossAmount: 9900,
      amountCashNet: 7900,
      amountPaid: 0,
      chargeId: 'chargeId',
      customerId: 'customerId',
      description: 'Renewal for Pro subscription',
      externalId: 'externalId',
      invoiceId: 'invoice_54',
      invoiceSubtotalExcludingTax: 0,
      invoiceTotal: 0,
      invoiceTotalExcludingTax: 0,
      netAmount: 0,
      orderId: 'orderId',
      paidAt: 1733702400000,
      paymentId: 'paymentId',
      paymentIntentId: 'paymentIntentId',
      subscriptionId: 'subscriptionId',
      taxAmount: 0,
      totalTaxAmount: 0,
      totalTaxAmounts: [{ foo: 'bar' }],
      totalTaxes: [{ foo: 'bar' }],
      transactionId: 'transactionId',
    });
  });

  // Mock server tests are disabled
  test.skip('sendInvites: only required params', async () => {
    const responsePromise = client.campaign.participant.sendInvites('participantIdOrEmail', {
      id: 'id',
      emailAddresses: ['erlich@aviato.com'],
      messageText: '{{referrerFirstName}} invited you with {{referrerShareUrl}}.',
      subjectText: 'Join me on Pied Piper',
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
  test.skip('sendInvites: required and optional params', async () => {
    const response = await client.campaign.participant.sendInvites('participantIdOrEmail', {
      id: 'id',
      emailAddresses: ['erlich@aviato.com'],
      messageText: '{{referrerFirstName}} invited you with {{referrerShareUrl}}.',
      subjectText: 'Join me on Pied Piper',
    });
  });

  // Mock server tests are disabled
  test.skip('triggerReferral: only required params', async () => {
    const responsePromise = client.campaign.participant.triggerReferral('participantIdOrEmail', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('triggerReferral: required and optional params', async () => {
    const response = await client.campaign.participant.triggerReferral('participantIdOrEmail', { id: 'id' });
  });
});
