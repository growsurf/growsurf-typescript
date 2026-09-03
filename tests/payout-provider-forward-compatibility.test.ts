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
      destinations: [
        {
          provider: 'TESTBANK',
          providerDisplayName: 'Test Bank',
          status: 'ACTIVE',
          claimEmail: 'richard@piedpiper.com',
          legalEntityType: 'INDIVIDUAL',
          confirmedAt: 1752000000000,
          needsRepairReason: null,
        },
      ],
    };
    const confirmation: ParticipantRequestPayoutDestinationConfirmationResponse = {
      provider: 'TESTBANK',
      providerDisplayName: 'Test Bank',
      status: 'CONFIRMATION_REQUESTED',
      expiresAt: 1752604800000,
    };

    expect(response.activeProvider).toBe('TESTBANK');
    expect(confirmation.provider).toBe('TESTBANK');
  });

  test('does not expose a redundant participant ID', () => {
    const payoutDestinationResponseOmitsParticipantID: PayoutDestinationResponseOmitsParticipantID = true;

    expect(payoutDestinationResponseOmitsParticipantID).toBe(true);
  });
});
