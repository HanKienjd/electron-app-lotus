import { test, expect } from '@playwright/test';

test('Register new user', async ({ request }) => {
  const register = await request.post(`/users/v1/register`, {
    data: {
      username: 'flower',
      password : 'test1',
      email: 'flowerthieu@gmail.com'
    },
  });
  expect(register.ok()).toBeTruthy();
});

test('Login', async ({ request }) => {
  const login = await request.post(`/users/v1/login`, {
    data: {
      username: 'flower',
      password : 'test1',
    },
  });
  expect(login.ok()).toBeTruthy();
});

test("Displays all details for all users", async ({ request }) => {
  const inforUser = await request.get(`/users/v1/_debug`);
  expect(inforUser.ok()).toBeTruthy();
  expect(inforUser.status()).toBe(200);
});


