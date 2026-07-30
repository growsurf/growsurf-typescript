# Account

Types:

- <code><a href="./src/resources/account.ts">AccountCreateResponse</a></code>

Methods:

- <code title="post /accounts">client.account.<a href="./src/resources/account.ts">create</a>({ ...params }) -> AccountCreateResponse</code>

# Team

Types:

- <code><a href="./src/resources/team.ts">Team</a></code>
- <code><a href="./src/resources/team.ts">TeamRotateApiKeyResponse</a></code>
- <code><a href="./src/resources/team.ts">TeamResendOwnerVerificationEmailResponse</a></code>

Methods:

- <code title="get /team">client.team.<a href="./src/resources/team.ts">retrieve</a>() -> Team</code>
- <code title="patch /team">client.team.<a href="./src/resources/team.ts">update</a>({ ...params }) -> Team</code>
- <code title="post /api-key/rotate">client.team.<a href="./src/resources/team.ts">rotateApiKey</a>() -> TeamRotateApiKeyResponse</code>
- <code title="post /team/verification-request">client.team.<a href="./src/resources/team.ts">requestVerification</a>() -> Team</code>
- <code title="post /team/owner/verification-email">client.team.<a href="./src/resources/team.ts">resendOwnerVerificationEmail</a>() -> TeamResendOwnerVerificationEmailResponse</code>

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
- <code><a href="./src/resources/campaign/campaign.ts">AffiliateApplication</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">AffiliateApplicationListResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">AffiliateInvite</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">AffiliateInviteListResponse</a></code>

Methods:

- <code title="get /campaign/{id}">client.campaign.<a href="./src/resources/campaign/campaign.ts">retrieve</a>(id) -> Campaign</code>
- <code title="get /campaigns">client.campaign.<a href="./src/resources/campaign/campaign.ts">list</a>() -> CampaignListResponse</code>
- <code title="post /campaigns">client.campaign.<a href="./src/resources/campaign/campaign.ts">create</a>({ ...params }) -> Campaign</code>
- <code title="patch /campaign/{id}">client.campaign.<a href="./src/resources/campaign/campaign.ts">update</a>(id, { ...params }) -> Campaign</code>
- <code title="post /campaign/{id}/clone">client.campaign.<a href="./src/resources/campaign/campaign.ts">clone</a>(id) -> Campaign</code>
- <code title="post /campaign/{id}/mobile-participant-token">client.campaign.<a href="./src/resources/campaign/campaign.ts">createMobileParticipantToken</a>(id, { ...params }) -> CampaignCreateMobileParticipantTokenResponse</code>
- <code title="get /campaign/{id}/affiliate-applications">client.campaign.<a href="./src/resources/campaign/campaign.ts">listAffiliateApplications</a>(id, { ...params }) -> AffiliateApplicationListResponse</code>
- <code title="get /campaign/{id}/affiliate-applications/{applicationId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">retrieveAffiliateApplication</a>(applicationID, { ...params }) -> AffiliateApplication</code>
- <code title="patch /campaign/{id}/affiliate-applications/{applicationId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">reviewAffiliateApplication</a>(applicationID, { ...params }) -> AffiliateApplication</code>
- <code title="get /campaign/{id}/affiliate-invites">client.campaign.<a href="./src/resources/campaign/campaign.ts">listAffiliateInvites</a>(id, { ...params }) -> AffiliateInviteListResponse</code>
- <code title="post /campaign/{id}/affiliate-invites">client.campaign.<a href="./src/resources/campaign/campaign.ts">createAffiliateInvite</a>(id, { ...params }) -> AffiliateInvite</code>
- <code title="delete /campaign/{id}/affiliate-invites/{inviteId}">client.campaign.<a href="./src/resources/campaign/campaign.ts">revokeAffiliateInvite</a>(inviteID, { ...params }) -> AffiliateInvite</code>
- <code title="post /campaign/{id}/affiliate-invites/{inviteId}/resend">client.campaign.<a href="./src/resources/campaign/campaign.ts">resendAffiliateInvite</a>(inviteID, { ...params }) -> AffiliateInvite</code>
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
- <code><a href="./src/resources/campaign/participant.ts">ParticipantBulkDeleteResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantListRewardsResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantRecordTransactionResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantRefundTransactionResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantSendInvitesResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantTriggerReferralResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantCancelDelayedReferralResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantEmailResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantRetrieveAnalyticsResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantListActivityLogsResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantGetPayoutDestinationResponse</a></code>
- <code><a href="./src/resources/campaign/participant.ts">ParticipantRequestPayoutDestinationConfirmationResponse</a></code>

Methods:

- <code title="get /campaign/{id}/participant/{participantIdOrEmail}">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">retrieve</a>(participantIDOrEmail, { ...params }) -> Participant</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">update</a>(participantIDOrEmail, { ...params }) -> Participant</code>
- <code title="delete /campaign/{id}/participant/{participantIdOrEmail}">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">delete</a>(participantIDOrEmail, { ...params }) -> ParticipantDeleteResponse</code>
- <code title="post /campaign/{id}/participants/bulk-delete">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">bulkDelete</a>(id, { ...params }) -> ParticipantBulkDeleteResponse</code>
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
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}/email">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">email</a>(participantIDOrEmail, { ...params }) -> ParticipantEmailResponse</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/analytics">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">retrieveAnalytics</a>(participantIDOrEmail, { ...params }) -> ParticipantRetrieveAnalyticsResponse</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/activity-logs">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">listActivityLogs</a>(participantIDOrEmail, { ...params }) -> ParticipantListActivityLogsResponse</code>
- <code title="get /campaign/{id}/participant/{participantIdOrEmail}/payout-destination">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">getPayoutDestination</a>(participantIDOrEmail, { ...params }) -> ParticipantGetPayoutDestinationResponse</code>
- <code title="post /campaign/{id}/participant/{participantIdOrEmail}/payout-destination/request-confirmation">client.campaign.participant.<a href="./src/resources/campaign/participant.ts">requestPayoutDestinationConfirmation</a>(participantIDOrEmail, { ...params }) -> ParticipantRequestPayoutDestinationConfirmationResponse</code>

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

## Webhooks

Types:

- <code><a href="./src/resources/campaign/webhooks.ts">WebhookEvent</a></code>
- <code><a href="./src/resources/campaign/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/campaign/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/campaign/webhooks.ts">DeleteWebhookResponse</a></code>
- <code><a href="./src/resources/campaign/webhooks.ts">WebhookTestResponse</a></code>

Methods:

- <code title="get /campaign/{id}/webhooks">client.campaign.webhooks.<a href="./src/resources/campaign/webhooks.ts">list</a>(id) -> WebhookListResponse</code>
- <code title="post /campaign/{id}/webhooks">client.campaign.webhooks.<a href="./src/resources/campaign/webhooks.ts">create</a>(id, { ...params }) -> Webhook</code>
- <code title="patch /campaign/{id}/webhooks/{webhookId}">client.campaign.webhooks.<a href="./src/resources/campaign/webhooks.ts">update</a>(webhookID, { ...params }) -> Webhook</code>
- <code title="delete /campaign/{id}/webhooks/{webhookId}">client.campaign.webhooks.<a href="./src/resources/campaign/webhooks.ts">delete</a>(webhookID, { ...params }) -> DeleteWebhookResponse</code>
- <code title="post /campaign/{id}/webhooks/{webhookId}/test">client.campaign.webhooks.<a href="./src/resources/campaign/webhooks.ts">test</a>(webhookID, { ...params }) -> WebhookTestResponse</code>

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
