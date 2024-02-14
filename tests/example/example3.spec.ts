import { test, expect } from '@tests/fixture';
import { HomePage } from '@pages';

let homePage: HomePage;

test.beforeEach(({ page }) => {
  homePage = new HomePage(page);
});

test('No.1__display-title', async () => {
  await expect(homePage.title()).toContainText('todos');
  await expect(homePage.title()).toBeVisible();
});

test('snapshot', async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

test('toHaveScreenshot__@fail', async ({ page }) => {
  test.fail();

  await expect(page).toHaveScreenshot();
});
