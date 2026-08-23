import type { AffiliateApplication, Campaign, CampaignCreateParams } from 'growsurf-typescript/resources';
import type { ParticipantReward, ReferralSource } from 'growsurf-typescript/resources/campaign/participant';

test('public response types accept every runtime referral source and documented null', () => {
  const referralSources: ReferralSource[] = [
    'DIRECT',
    'PARTICIPANT',
    'DELETED_PARTICIPANT',
    'IMPORT',
    'MANUAL',
  ];
  const campaign = { currencyISO: null } as Campaign;
  const reward: ParticipantReward = {
    id: 'reward_1',
    rewardId: 'configured_reward_1',
    status: 'PENDING',
    approvedAt: null,
    fulfilledAt: null,
  };
  const createParams: CampaignCreateParams = { type: 'REFERRAL' };
  const application = {} as AffiliateApplication;

  expect(referralSources).toHaveLength(5);
  expect(campaign.currencyISO).toBeNull();
  expect(reward.approvedAt).toBeNull();
  expect(createParams).toEqual({ type: 'REFERRAL' });
  expect(application).toBeDefined();
});
