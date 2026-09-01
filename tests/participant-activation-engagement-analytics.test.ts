import Growsurf from 'growsurf-typescript';
import type {
  AnalyticsAvailability,
  AnalyticsUnavailableReason,
  CampaignActivationAnalyticsResponse,
  CampaignEngagementAnalytics,
  CampaignRetrieveActivationAnalyticsParams,
  CampaignRetrieveAnalyticsResponse,
} from 'growsurf-typescript/resources/campaign/campaign';
import type {
  ParticipantActivationAnalytics,
  ParticipantActivationMilestones,
  ParticipantRetrieveAnalyticsResponse,
} from 'growsurf-typescript/resources/campaign/participant';

describe('participant activation and engagement analytics contract', () => {
  test('exposes covered values and explicit unavailable states', () => {
    const unavailableState: AnalyticsAvailability = 'UNAVAILABLE';
    const unavailableReason: AnalyticsUnavailableReason = 'COVERAGE_UNAVAILABLE';
    const unavailableMetric = {
      state: unavailableState,
      value: null,
      reason: unavailableReason,
    } as const;
    const engagement: CampaignEngagementAnalytics = {
      coverageStartAt: null,
      metricContractVersion: 1,
      programType: 'REFERRAL',
      timezone: 'UTC',
      interval: 'day',
      platform: { requested: 'ALL', applied: 'ALL', state: unavailableState },
      period: {
        from: 1754006400000,
        to: 1756684800000,
        effectiveFrom: null,
        previousFrom: 1751328000000,
        previousTo: 1754006400000,
      },
      state: unavailableState,
      reason: unavailableReason,
      totals: {
        activeParticipants: unavailableMetric,
        sharingParticipants: unavailableMetric,
        sharingRate: unavailableMetric,
        repeatActiveParticipants: unavailableMetric,
        repeatSharingParticipants: unavailableMetric,
        retainedActiveParticipants: unavailableMetric,
        portalViews: unavailableMetric,
        shareActions: unavailableMetric,
      },
      previousPeriod: { state: unavailableState, reason: unavailableReason, totals: null },
      comparison: { state: unavailableState, reason: unavailableReason, metrics: null },
      series: [],
      breakdowns: { platforms: [], portalViewSources: [], shareChannels: [], firstShareChannels: [] },
    };
    const campaignActivation: CampaignActivationAnalyticsResponse = {
      coverageStartAt: null,
      metricContractVersion: 1,
      programType: 'AFFILIATE',
      timezone: 'UTC',
      cohortInterval: 'week',
      observationWindowDays: 30,
      portalViewedLabel: 'Affiliate portal viewed',
      portalViewedHelperText: 'The affiliate viewed the affiliate portal.',
      aggregate: {
        state: unavailableState,
        reason: unavailableReason,
        cohort: {
          from: 1754006400000,
          to: 1756684800000,
          effectiveFrom: null,
          maturedAt: 1759276800000,
          asOf: 1756684800000,
          anchorField: 'approvedAsAffiliateAt',
        },
        strictStages: null,
        rawStageCounts: null,
        stalledSegments: null,
        outcomes: null,
        largestDrop: null,
      },
      cohorts: [],
    };
    const milestones: ParticipantActivationMilestones = {
      firstPortalViewedAt: 1754092800000,
      firstReferralLinkCopiedAt: 1754096400000,
      firstShareAt: 1754100000000,
      firstShareChannel: 'linkedin',
      firstUniqueClickAt: 1754186400000,
      firstLeadAt: 1754272800000,
      firstReferralAt: 1754359200000,
      firstRewardAt: null,
      firstCommissionAt: 1754445600000,
      payoutSetupCompletedAt: null,
    };
    const participantActivation: ParticipantActivationAnalytics = {
      coverageStartAt: 1754006400000,
      metricContractVersion: 1,
      programType: 'AFFILIATE',
      state: 'AVAILABLE',
      reason: null,
      cohort: { anchorField: 'approvedAsAffiliateAt', anchorAt: 1754006400000 },
      enrolledAsAdvocateAt: null,
      milestones,
    };
    const campaignResponse: CampaignRetrieveAnalyticsResponse = {
      analytics: {},
      startDate: 1754006400000,
      endDate: 1756684800000,
      engagement,
    };
    const participantResponse: ParticipantRetrieveAnalyticsResponse = {
      analytics: {},
      ranks: {},
      shareCount: {},
      activation: participantActivation,
      series: [{ periodStart: 1754006400000, portalViews: null, shareActions: 2 }],
    };
    const activationParams: CampaignRetrieveActivationAnalyticsParams = {
      cohortFrom: 1754006400000,
      cohortTo: 1756684800000,
      cohortInterval: 'week',
      observationWindowDays: 30,
      timezone: 'UTC',
    };
    const rootEngagement: Growsurf.CampaignEngagementAnalytics = engagement;
    const rootActivation: Growsurf.CampaignActivationAnalyticsResponse = campaignActivation;

    expect(rootEngagement.state).toBe('UNAVAILABLE');
    expect(rootActivation.aggregate.strictStages).toBeNull();
    expect(participantResponse.activation?.milestones.firstShareChannel).toBe('linkedin');
    expect(participantResponse.series?.[0]?.portalViews).toBeNull();
    expect(activationParams.observationWindowDays).toBe(30);
  });

  test('sends the opt-in and activation query contracts without changing the existing call', async () => {
    const requests: Array<{ path: string; query: Record<string, string> }> = [];
    const client = new Growsurf({
      apiKey: 'My API Key',
      baseURL: 'https://api.growsurf.test/v2',
      fetch: async (request) => {
        const url = new URL(request.toString());
        requests.push({ path: url.pathname, query: Object.fromEntries(url.searchParams) });

        if (url.pathname.endsWith('/analytics/activation')) {
          return new Response(
            JSON.stringify({
              coverageStartAt: null,
              metricContractVersion: 1,
              programType: 'REFERRAL',
              timezone: 'UTC',
              cohortInterval: 'day',
              observationWindowDays: 30,
              portalViewedLabel: 'Referral portal viewed',
              portalViewedHelperText: 'The participant viewed the referral portal.',
              aggregate: {},
              cohorts: [],
            }),
            { headers: { 'Content-Type': 'application/json' } },
          );
        }
        if (url.pathname.includes('/participant/')) {
          return new Response(JSON.stringify({ analytics: {}, ranks: {}, shareCount: {} }), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response(JSON.stringify({ analytics: {}, startDate: 1, endDate: 2 }), {
          headers: { 'Content-Type': 'application/json' },
        });
      },
    });

    await client.campaign.retrieveAnalytics('campaign_123');
    await client.campaign.retrieveAnalytics('campaign_123', {
      include: 'engagement',
      timezone: 'America/Los_Angeles',
      platform: 'WEB',
    });
    await client.campaign.retrieveActivationAnalytics('campaign_123', {
      cohortFrom: 1754006400000,
      cohortTo: 1756684800000,
      cohortInterval: 'week',
      observationWindowDays: 30,
      timezone: 'America/Los_Angeles',
    });
    await client.campaign.participant.retrieveAnalytics('participant_123', {
      id: 'campaign_123',
      include: 'activation,series',
    });

    expect(requests).toEqual([
      { path: '/v2/campaign/campaign_123/analytics', query: {} },
      {
        path: '/v2/campaign/campaign_123/analytics',
        query: { include: 'engagement', timezone: 'America/Los_Angeles', platform: 'WEB' },
      },
      {
        path: '/v2/campaign/campaign_123/analytics/activation',
        query: {
          cohortFrom: '1754006400000',
          cohortTo: '1756684800000',
          cohortInterval: 'week',
          observationWindowDays: '30',
          timezone: 'America/Los_Angeles',
        },
      },
      {
        path: '/v2/campaign/campaign_123/participant/participant_123/analytics',
        query: { include: 'activation,series' },
      },
    ]);
  });
});
