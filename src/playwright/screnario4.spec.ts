import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test'

test('Exploiting the SQL Injection', async ({ request }) => {
  const login = await request.post(`/users/v1/login`, {
    data: {
      username: 'thieuhoa',
      password: 'test1'
    },
  });
  expect(login.ok()).toBeTruthy();
  const token = await login.json()
  let accessToken = token.auth_token
  
  const config: PlaywrightTestConfig = {
    use: {
      baseURL: `${process.env.API_URL}`,
      extraHTTPHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  };

  await test.step("Displays user by username", async () => {
      const getUser = await request.get(`/users/v1/name1'`, config);
      expect(getUser.status()).toBe(500);
    });
});


