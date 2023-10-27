import { test, expect } from '@playwright/test';

test("Displays all details for all users", async ({ request }) => {
  const inforUser = await request.get(`/users/v1/_debug`);
  expect(inforUser.ok()).toBeTruthy();
  expect(inforUser.status()).toBe(200);
});
