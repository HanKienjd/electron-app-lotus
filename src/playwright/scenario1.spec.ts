import { test, expect } from '@playwright/test';

test('Exploiting Rate Limiting vulnerability', async ({ request }) => {
    const passwords = ['test', 'test0', 'test1', 'test3', 'test4'];
  
    for (const password of passwords) {
      const login = await request.post(`/users/v1/login`, {
        data: {
          username: 'thieuhoa',
          password,
        },
      });
      expect(login.ok()).toBeTruthy();
    }
  });
