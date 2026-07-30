import type {
  ParticipantGetPayoutDestinationResponse,
  ParticipantRequestPayoutDestinationConfirmationResponse,
} from '../src/resources/campaign/participant';

type PayoutDestinationResponseOmitsParticipantID =
  'participantId' extends keyof ParticipantGetPayoutDestinationResponse ? false : true;

describe('payout provider forward compatibility', () => {
  test('accepts an unknown future provider in response types', () => {
    const response: ParticipantGetPayoutDestinationResponse = {
      activeProvider: 'TESTBANK',
      enabledProviders: ['TESTBANK'],
      destinations: [{ provider: 'TESTBANK' }],
    };
    const confirmation: ParticipantRequestPayoutDestinationConfirmationResponse = {
      provider: 'TESTBANK',
    };

    expect(response.activeProvider).toBe('TESTBANK');
    expect(confirmation.provider).toBe('TESTBANK');
  });

  test('does not expose a redundant participant ID', () => {
    const payoutDestinationResponseOmitsParticipantID: PayoutDestinationResponseOmitsParticipantID = true;

    expect(payoutDestinationResponseOmitsParticipantID).toBe(true);
  });
});
