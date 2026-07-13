import Growsurf from 'growsurf-typescript';
import type { AccountCreateResponse } from 'growsurf-typescript/resources/account';
import type { Team, TeamRotateApiKeyResponse } from 'growsurf-typescript/resources/team';

describe('team contract', () => {
  test('uses the final team and API-key paths without exposing internal identifiers', async () => {
    const requests: Array<{ method: string; path: string; body: unknown }> = [];
    const client = new Growsurf({
      apiKey: 'My API Key',
      baseURL: 'https://api.growsurf.test/v2',
      fetch: async (request, init = {}) => {
        const url = new URL(request.toString());
        requests.push({
          method: init.method ?? 'GET',
          path: url.pathname,
          body: init.body ? JSON.parse(init.body.toString()) : undefined,
        });

        if (url.pathname === '/v2/api-key/rotate') {
          return new Response(JSON.stringify({ apiKey: 'sk_api_replacement' }), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
        if (url.pathname === '/v2/team/owner/verification-email') {
          return new Response(JSON.stringify({ success: true, status: 'SENT' }), {
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response(
          JSON.stringify({
            name: 'Pied Piper',
            verificationStatus: 'VERIFIED',
            verificationRequestedAt: 1719792000000,
          }),
          { headers: { 'Content-Type': 'application/json' } },
        );
      },
    });

    const team: Team = await client.team.retrieve();
    await client.team.update({ name: 'Pied Piper Labs' });
    await client.team.requestVerification();
    await client.team.resendOwnerVerificationEmail();
    const rotated: TeamRotateApiKeyResponse = await client.team.rotateApiKey();

    expect(team.name).toBe('Pied Piper');
    expect(rotated.apiKey).toBe('sk_api_replacement');
    expect(requests).toEqual([
      { method: 'GET', path: '/v2/team', body: undefined },
      { method: 'PATCH', path: '/v2/team', body: { name: 'Pied Piper Labs' } },
      { method: 'POST', path: '/v2/team/verification-request', body: undefined },
      { method: 'POST', path: '/v2/team/owner/verification-email', body: undefined },
      { method: 'POST', path: '/v2/api-key/rotate', body: undefined },
    ]);

    const teamHasInternalID: 'id' extends keyof Team ? true : false = false;
    const teamHasEmail: 'email' extends keyof Team ? true : false = false;
    expect(teamHasInternalID).toBe(false);
    expect(teamHasEmail).toBe(false);
  });

  test('keeps onboarding under accounts with the safe response model', () => {
    const response: AccountCreateResponse = {
      email: 'richard@piedpiper.com',
      apiKey: 'sk_api_initial',
      verificationStatus: 'NOT_REQUESTED',
    };

    const responseHasInternalID: 'id' extends keyof AccountCreateResponse ? true : false = false;
    expect(response.email).toBe('richard@piedpiper.com');
    expect(responseHasInternalID).toBe(false);
  });
});
