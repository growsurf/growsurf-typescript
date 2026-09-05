import type {
  AffiliateApplication,
  Campaign,
  CampaignCreateParams,
  CampaignRetrieveAnalyticsResponse,
  CommissionStructure,
} from 'growsurf-typescript/resources';
import type { ParticipantReward, ReferralSource } from 'growsurf-typescript/resources/campaign/participant';
import type { DesignUpdateParams } from 'growsurf-typescript/resources/campaign/design';
import type { EmailUpdateParams } from 'growsurf-typescript/resources/campaign/emails';
import type { InstallationUpdateParams } from 'growsurf-typescript/resources/campaign/installation';
import type { OptionUpdateParams } from 'growsurf-typescript/resources/campaign/options';
import type { ProgramResourceUpdateParams } from 'growsurf-typescript/resources/campaign/program-resources';

test('public response types accept documented enum values and null fields', () => {
  const referralSources: ReferralSource[] = [
    'DIRECT',
    'PARTICIPANT',
    'DELETED_PARTICIPANT',
    'IMPORT',
    'MANUAL',
  ];
  const campaign = { currencyISO: null } as Campaign;
  const pendingStatus: Campaign['status'] = 'PENDING';
  const cancelledStatus: Campaign['status'] = 'CANCELLED';
  const campaignRewardEvent: 'LEAD' | 'CONVERSION' | undefined = ({} as Campaign['rewards'][number]).event;
  const reward: ParticipantReward = {
    id: 'reward_1',
    rewardId: 'configured_reward_1',
    status: 'CANCELLED',
    amount: 2,
    approvedAt: null,
    currencyISO: 'USD',
    fulfilledAt: null,
  };
  const previousPeriod: CampaignRetrieveAnalyticsResponse.PreviousPeriod = {
    analytics: {},
    endDate: 2,
    startDate: 1,
  };
  const previousAnalytics: CampaignRetrieveAnalyticsResponse.Analytics = previousPeriod.analytics;
  const previousEndDate: number = previousPeriod.endDate;
  const previousStartDate: number = previousPeriod.startDate;
  const commissionEvent: 'CLICK' | 'LEAD' | 'SALE' | null | undefined = ({} as CommissionStructure).event;
  const createParams: CampaignCreateParams = { type: 'REFERRAL' };
  const application = {} as AffiliateApplication;
  // @ts-expect-error A type change requires the matching replacement content.
  const invalidResourceUpdate: ProgramResourceUpdateParams = { id: 'program-id', type: 'LINK' };

  expect(referralSources).toHaveLength(5);
  expect(campaign.currencyISO).toBeNull();
  expect(pendingStatus).toBe('PENDING');
  expect(cancelledStatus).toBe('CANCELLED');
  expect(campaignRewardEvent).toBeUndefined();
  expect(commissionEvent).toBeUndefined();
  expect(reward.approvedAt).toBeNull();
  expect(reward.amount).toBe(2);
  expect(reward.currencyISO).toBe('USD');
  expect(reward.status).toBe('CANCELLED');
  expect(previousAnalytics).toEqual({});
  expect(previousEndDate).toBe(2);
  expect(previousStartDate).toBe(1);
  expect(createParams).toEqual({ type: 'REFERRAL' });
  expect(application).toBeDefined();
  expect(invalidResourceUpdate.type).toBe('LINK');
});

test('types documented configuration fields while open sections stay forward compatible', () => {
  const options: OptionUpdateParams = {
    attributionModel: 'FIRST_CLICK',
    fraud: { recaptcha: { secretKey: null } },
    futureOption: true,
  };
  const emails: EmailUpdateParams = {
    welcomeNonReferred: { subject: 'Welcome', isEnabled: true },
    settings: { sender: { fromName: 'Pied Piper' } },
    futureTemplate: { subject: 'New template' },
  };
  const installation: InstallationUpdateParams = {
    referralTrigger: 'ON_SIGNUP',
    signupEvent: 'PROGRAMMATIC',
    mobile: { isEnabled: true, iosAttributionUrl: null },
    futureInstallationField: true,
  };
  const design: DesignUpdateParams = {
    participantAvatarStyle: 'GRADIENT',
    referredExperience: { offerPopupPlacement: 'BOTTOM_RIGHT', offerPopupDelaySeconds: 5 },
    theme: { referredExperienceOfferPopup: { backgroundColor: '#2f8f4e' }, futureThemeField: true },
    futureDesignSection: { isEnabled: true },
  };

  // @ts-expect-error The public contract does not accept this attribution model.
  const invalidOptions: OptionUpdateParams = { attributionModel: 'LAST_TOUCH' };
  // @ts-expect-error `publicKey` is read-only and is not accepted by installation updates.
  const invalidInstallation: InstallationUpdateParams = { mobile: { publicKey: 'gspk_read_only' } };
  // @ts-expect-error `fromEmail` is read-only and must be configured in the dashboard.
  const invalidEmails: EmailUpdateParams = { settings: { sender: { fromEmail: 'rewards@piedpiper.com' } } };

  expect(options.attributionModel).toBe('FIRST_CLICK');
  expect(emails.welcomeNonReferred?.subject).toBe('Welcome');
  expect(installation.mobile?.isEnabled).toBe(true);
  expect(design.referredExperience?.offerPopupPlacement).toBe('BOTTOM_RIGHT');
  expect(invalidOptions).toBeDefined();
  expect(invalidInstallation).toBeDefined();
  expect(invalidEmails).toBeDefined();
});
