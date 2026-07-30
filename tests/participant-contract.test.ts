import type {
  CampaignCreateMobileParticipantTokenParams,
  ParticipantCommissionList,
  ParticipantPayoutList,
} from '../src/resources/campaign/campaign';
import type { Participant } from '../src/resources/campaign/participant';

type ShareURLIsOptional = {} extends Pick<Participant, 'shareUrl'> ? true : false;
type MobileTokenParamsIncludeIsAffiliate =
  'isAffiliate' extends keyof CampaignCreateMobileParticipantTokenParams ? true : false;

describe('participant contract', () => {
  test('allows affiliate responses that omit shareUrl', () => {
    const shareURLIsOptional: ShareURLIsOptional = true;

    expect(shareURLIsOptional).toBe(true);
  });

  test('accepts isAffiliate when creating a mobile participant token', () => {
    const mobileTokenParamsIncludeIsAffiliate: MobileTokenParamsIncludeIsAffiliate = true;

    expect(mobileTokenParamsIncludeIsAffiliate).toBe(true);
  });

  test('accepts null commission and payout timestamps returned by the API', () => {
    const commissionTimestamps: Pick<
      ParticipantCommissionList.Commission,
      'approvedAt' | 'exchangeRateAt' | 'paidAt' | 'payoutQueuedAt' | 'reversedAt'
    > = {
      approvedAt: null,
      exchangeRateAt: null,
      paidAt: null,
      payoutQueuedAt: null,
      reversedAt: null,
    };
    const payoutTimestamps: Pick<
      ParticipantPayoutList.Payout,
      'exchangeRateAt' | 'failedAt' | 'issuedAt' | 'reversedAt'
    > = {
      exchangeRateAt: null,
      failedAt: null,
      issuedAt: null,
      reversedAt: null,
    };

    expect(commissionTimestamps.approvedAt).toBeNull();
    expect(payoutTimestamps.issuedAt).toBeNull();
  });
});
