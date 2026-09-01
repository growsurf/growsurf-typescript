// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Growsurf from 'growsurf-typescript';
import type { CampaignDesign } from 'growsurf-typescript/resources/campaign/design';

const client = new Growsurf({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource design', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.campaign.design.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.campaign.design.update('id', {
      participantAvatarStyle: 'CHARACTERS',
      login: { heading: 'Sign in', buttonText: 'Send sign-in link', successHeading: 'Check your email' },
      resources: {
        isPublicDisplayed: true,
        title: 'Resources',
        viewResourcesLinkText: 'View resources',
        backLinkText: 'Back',
        copyButtonText: 'Copy',
        copiedText: 'Copied',
        icon: { type: 'IMAGE', imageUrl: 'https://example.com/resources-icon.png' },
      },
      payoutDestinationConfirmation: { headline: 'Confirm your {{payoutProvider}} payout email' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('types the complete Resources presentation model while Design stays open', () => {
    const design: CampaignDesign = {
      resources: {
        isPublicDisplayed: true,
        title: 'Resources',
        viewResourcesLinkText: 'View resources',
        backLinkText: 'Back',
        copyButtonText: 'Copy',
        copiedText: 'Copied',
        icon: { type: 'NONE', imageUrl: 'https://example.com/resources-icon.png' },
      },
      futureDesignSection: { enabled: true },
    };

    expect(design.resources?.icon?.type).toBe('NONE');
  });
});
