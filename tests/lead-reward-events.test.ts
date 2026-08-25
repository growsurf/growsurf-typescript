import { type Campaign, type ParticipantCommissionList } from '../src/resources/campaign/campaign';
import {
  type Reward,
  type RewardCreateParams,
  type RewardUpdateParams,
} from '../src/resources/campaign/rewards';

const reward: Reward = {
  id: 'crew_signup',
  isUnlimited: true,
  metadata: {},
  type: 'SINGLE_SIDED',
  event: 'LEAD',
};
const create: RewardCreateParams = { type: 'MILESTONE', event: 'CONVERSION' };
const update: RewardUpdateParams = { id: 'campaign_id', event: 'LEAD' };
const embedded: Campaign.Reward = {
  id: 'crew_signup',
  isUnlimited: true,
  metadata: {},
  type: 'SINGLE_SIDED',
  event: 'CONVERSION',
};
const commission = {} as ParticipantCommissionList.Commission;

reward.event satisfies 'LEAD' | 'CONVERSION' | null | undefined;
create.event satisfies 'LEAD' | 'CONVERSION' | undefined;
update.event satisfies 'LEAD' | 'CONVERSION' | undefined;
embedded.event satisfies 'LEAD' | 'CONVERSION' | null | undefined;
commission.event satisfies 'LEAD' | 'SALE';

test('lead reward event types accept the public wire values', () => {
  expect(reward.event).toBe('LEAD');
  expect(create.event).toBe('CONVERSION');
  expect(update.event).toBe('LEAD');
  expect(embedded.event).toBe('CONVERSION');
});
