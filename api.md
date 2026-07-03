# Campaign

Types:

- <code><a href="./src/resources/campaign/campaign.ts">Campaign</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CommissionStructure</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">ParticipantCommissionList</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">ParticipantList</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">ParticipantPayoutList</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">ReferralList</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignCreateMobileParticipantTokenResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignRetrieveAnalyticsResponse</a></code>

Methods:

- <code title="get /campaign/{id}">client.campaign.<a href="./src/resources/campaign/campaign.ts">retrieve</a>(id) -> Campaign</code>
- <code title="get /campaigns">client.campaign.<a href="./src/resources/campaign/campaign.ts">list</a>() -> CampaignListResponse</code>
- <code title="post /campaigns">client.campaign.<a href="./src/resources/campaign/campaign.ts">create</a>({ ...params }) -> Campaign</code>
- <code title="patch /campaign/{id}">client.campaign.<a href="./src/resources/campaign/campaign.ts">update</a>(id, { ...params }) -> Campaign</code>
- <code title="post /campaign/{id}/clone">client.campaign.<a href="./src/resources/campaign/campaign.ts">clone</a>(id) -> Campaign</code>
- <code title="post /campaign/{id}/mobile-participant-token">client.campaign.<a href="./src/resources/campaign/campaign.ts">createMobileParticipantToken</a>(id, { ...params }) -> CampaignCreateMobileParticipantTokenResponse</code>
- <code title="get /campaign/{id}/commissions">client.campaign.<a href="./src/resources/campaign/campaign.ts">listCommissions</a>(id, { ...params }) -> ParticipantCommissionList</code>
- <code title="get /campaign/{id}/leaderboard">client.campaign.<a href="./src/resources/campaign/campaign.ts">listLeaderboard</a>(id, { ...params }) -> ParticipantList</code>
- <code title="get /campaign/{id}/participants">client.campaign.<a href="./src/resources/campaign/campaign.ts">listParticipants</a>(id, { ...params }) -> ParticipantList</code>
- <code title="get /campaign/{id}/payouts">client.campaign.<a href="./src/resources/campaign/campaign.ts">listPayouts</a>(id, { ...params }) -> ParticipantPayoutList</code>
- <code title="get /campaign/{id}/referrals">client.campaign.<a href="./src/resources/campaign/campaign.ts">listReferrals</a>(id, { ...params }) -> ReferralList</code>
- <code title="get /campaign/{id}/analytics">client.campaign.<a href="./src/resources/campaign/campaign.ts">retrieveAnalytics</a>(id, { ...params }) -> CampaignRetrieveAnalyticsResponse</code>

## Participant

Types:

- <code><a href="./src/resources/campaign/participant.ts">Create</a></code>
- <code><a href="./src/resources/campaign/participant.ts">FraudRiskLevel</a></code>
- <code><a href="./src/resources/campaign/participant.ts">Participant</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantReward</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ReferralSource</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ReferralStatus</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantDeleteResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantListRewardsResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantRecordTransactionResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantRefundTransactionResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantSendInvitesResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantTriggerReferralResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantCancelDelayedReferralResponse</a></code>

Methods:

- <code title="get /campaign/{id}/participant/{participantIdOrEmail}">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">retrieve</a>(participantIDOrEmail, { ...params }) -> Participant</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">update</a>(participantIDOrEmail, { ...params }) -> Participant</code>
- <code title="delete /campaign/{id}/participant/{participantIdOrEmail}">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">delete</a>(participantIDOrEmail, { ...params }) -> ParticipantDeleteResponse</code>
- <code title="post /campaign/{id}/participant">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">add</a>(id, { ...params }) -> Participant</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/commissions">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">listCommissions</a>(participantIDOrEmail, { ...params }) -> ParticipantCommissionList</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/payouts">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">listPayouts</a>(participantIDOrEmail, { ...params }) -> ParticipantPayoutList</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/referrals">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">listReferrals</a>(participantIDOrEmail, { ...params }) -> ReferralList</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/rewards">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">listRewards</a>(participantIDOrEmail, { ...params }) -> ParticipantListRewardsResponse</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}/transaction">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">recordTransaction</a>(participantIDOrEmail, { ...params }) -> ParticipantRecordTransactionResponse</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}/transaction/refund">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">refundTransaction</a>(participantIDOrEmail, { ...params }) -> ParticipantRefundTransactionResponse</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}/invites">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">sendInvites</a>(participantIDOrEmail, { ...params }) -> ParticipantSendInvitesResponse</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}/ref">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">triggerReferral</a>(participantIDOrEmail, { ...params }) -> ParticipantTriggerReferralResponse</code>
- <code title="delete /campaign/{id}/participant/{participantIdOrEmail}/ref">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">cancelDelayedReferral</a>(participantIDOrEmail, { ...params }) -> ParticipantCancelDelayedReferralResponse</code>

## Reward

Types:

- <code><a href="./src/resources/campaign/reward.ts">RewardDeleteResponse</a></code>
- <code><a href="./src/resources/campaign/reward.ts">RewardApproveResponse</a></code>
- <code><a href="./src/resources/campaign/reward.ts">RewardFulfillResponse</a></code>

Methods:

- <code title="delete /campaign/{id}/reward/{rewardId}">client.campaign.reward.<a href="./src/resources/campaign/reward.ts">delete</a>(rewardID, { ...params }) -> RewardDeleteResponse</code>
- <code title="post /campaign/{id}/reward/{rewardId}/approve">client.campaign.reward.<a href="./src/resources/campaign/reward.ts">approve</a>(rewardID, { ...params }) -> RewardApproveResponse</code>
- <code title="post /campaign/{id}/reward/{rewardId}/fulfill">client.campaign.reward.<a href="./src/resources/campaign/reward.ts">fulfill</a>(rewardID, { ...params }) -> RewardFulfillResponse</code>

## Commission

Types:

- <code><a href="./src/resources/campaign/commission.ts">CommissionDeleteResponse</a></code>
- <code><a href="./src/resources/campaign/commission.ts">CommissionApproveResponse</a></code>

Methods:

- <code title="delete /campaign/{id}/commission/{commissionId}">client.campaign.commission.<a href="./src/resources/campaign/commission.ts">delete</a>(commissionID, { ...params }) -> CommissionDeleteResponse</code>
- <code title="post /campaign/{id}/commission/{commissionId}/approve">client.campaign.commission.<a href="./src/resources/campaign/commission.ts">approve</a>(commissionID, { ...params }) -> CommissionApproveResponse</code>

## Rewards

Types:

- <code><a href="./src/resources/campaign/rewards.ts">Reward</a></code>
- <code><a href="./src/resources/campaign/rewards.ts">RewardTaxValuation</a></code>
- <code><a href="./src/resources/campaign/rewards.ts">CampaignRewardListResponse</a></code>
- <code><a href="./src/resources/campaign/rewards.ts">DeleteRewardResponse</a></code>

Methods:

- <code title="get /campaign/{id}/reward-configs">client.campaign.rewards.<a href="./src/resources/campaign/rewards.ts">list</a>(id) -> CampaignRewardListResponse</code>
- <code title="post /campaign/{id}/reward-configs">client.campaign.rewards.<a href="./src/resources/campaign/rewards.ts">create</a>(id, { ...params }) -> Reward</code>
- <code title="patch /campaign/{id}/reward-configs/{campaignRewardId}">client.campaign.rewards.<a href="./src/resources/campaign/rewards.ts">update</a>(campaignRewardID, { ...params }) -> Reward</code>
- <code title="delete /campaign/{id}/reward-configs/{campaignRewardId}">client.campaign.rewards.<a href="./src/resources/campaign/rewards.ts">delete</a>(campaignRewardID, { ...params }) -> DeleteRewardResponse</code>

## Design

Types:

- <code><a href="./src/resources/campaign/design.ts">CampaignDesign</a></code>

Methods:

- <code title="get /campaign/{id}/design">client.campaign.design.<a href="./src/resources/campaign/design.ts">retrieve</a>(id) -> CampaignDesign</code>
- <code title="patch /campaign/{id}/design">client.campaign.design.<a href="./src/resources/campaign/design.ts">update</a>(id, { ...params }) -> CampaignDesign</code>

## Emails

Types:

- <code><a href="./src/resources/campaign/emails.ts">CampaignEmails</a></code>

Methods:

- <code title="get /campaign/{id}/emails">client.campaign.emails.<a href="./src/resources/campaign/emails.ts">retrieve</a>(id) -> CampaignEmails</code>
- <code title="patch /campaign/{id}/emails">client.campaign.emails.<a href="./src/resources/campaign/emails.ts">update</a>(id, { ...params }) -> CampaignEmails</code>

## Options

Types:

- <code><a href="./src/resources/campaign/options.ts">CampaignOptions</a></code>

Methods:

- <code title="get /campaign/{id}/options">client.campaign.options.<a href="./src/resources/campaign/options.ts">retrieve</a>(id) -> CampaignOptions</code>
- <code title="patch /campaign/{id}/options">client.campaign.options.<a href="./src/resources/campaign/options.ts">update</a>(id, { ...params }) -> CampaignOptions</code>

## Installation

Types:

- <code><a href="./src/resources/campaign/installation.ts">CampaignInstallation</a></code>

Methods:

- <code title="get /campaign/{id}/installation">client.campaign.installation.<a href="./src/resources/campaign/installation.ts">retrieve</a>(id) -> CampaignInstallation</code>
- <code title="patch /campaign/{id}/installation">client.campaign.installation.<a href="./src/resources/campaign/installation.ts">update</a>(id, { ...params }) -> CampaignInstallation</code>
