import type { CampaignRetrieveAnalyticsResponse } from '../src/resources/campaign/campaign';
import type { ParticipantRetrieveAnalyticsResponse } from '../src/resources/campaign/participant';

type CampaignRewardStatus = CampaignRetrieveAnalyticsResponse.StatusCounts.RewardStatus;
type PendingIsAbsent = 'pending' extends keyof CampaignRewardStatus ? false : true;
type ApprovedIsAbsent = 'approved' extends keyof CampaignRewardStatus ? false : true;
type ParticipantPendingRewardsIsAbsent =
  'pendingRewards' extends keyof ParticipantRetrieveAnalyticsResponse.Analytics ? false : true;
type ParticipantRewardsEarnedIsAbsent =
  'rewardsEarned' extends keyof ParticipantRetrieveAnalyticsResponse.Analytics ? false : true;

describe('analytics reward status contract', () => {
  test('uses the same three reward buckets for campaign and participant analytics', () => {
    const rewardStatus: CampaignRewardStatus = {
      unapproved: 1,
      unfulfilled: 2,
      completed: 3,
    };
    const participantAnalytics: ParticipantRetrieveAnalyticsResponse.Analytics = { rewardStatus };
    const pendingIsAbsent: PendingIsAbsent = true;
    const approvedIsAbsent: ApprovedIsAbsent = true;
    const participantPendingRewardsIsAbsent: ParticipantPendingRewardsIsAbsent = true;
    const participantRewardsEarnedIsAbsent: ParticipantRewardsEarnedIsAbsent = true;

    expect(participantAnalytics.rewardStatus).toEqual(rewardStatus);
    expect({
      pendingIsAbsent,
      approvedIsAbsent,
      participantPendingRewardsIsAbsent,
      participantRewardsEarnedIsAbsent,
    }).toEqual({
      pendingIsAbsent: true,
      approvedIsAbsent: true,
      participantPendingRewardsIsAbsent: true,
      participantRewardsEarnedIsAbsent: true,
    });
  });
});
