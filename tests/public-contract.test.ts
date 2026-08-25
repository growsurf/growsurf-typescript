import type {
  AffiliateApplication,
  Campaign,
  CampaignCreateParams,
  CommissionStructure,
} from 'growsurf-typescript/resources';
import type { ParticipantReward, ReferralSource } from 'growsurf-typescript/resources/campaign/participant';

test('public response types accept documented enum values and null fields', () => {
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
    status: 'CANCELLED',
    approvedAt: null,
    fulfilledAt: null,
  };
  const commissionEvent: 'CLICK' | 'LEAD' | 'SALE' | null | undefined = ({} as CommissionStructure).event;
  const createParams: CampaignCreateParams = { type: 'REFERRAL' };
  const application = {} as AffiliateApplication;

  expect(referralSources).toHaveLength(5);
  expect(campaign.currencyISO).toBeNull();
  expect(commissionEvent).toBeUndefined();
  expect(reward.approvedAt).toBeNull();
  expect(reward.status).toBe('CANCELLED');
  expect(createParams).toEqual({ type: 'REFERRAL' });
  expect(application).toBeDefined();
});
