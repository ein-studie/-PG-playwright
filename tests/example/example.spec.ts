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

test('No2.__add-task', async () => {
  const todoItems = ['apple', 'banana', 'orange'];
  await homePage.fnAddTodoItems(todoItems);

  todoItems.forEach(async (v, i) => {
    await expect(homePage.todoItemLabel(i + 1)).toHaveText(v);
  });
});

test('snapshot', async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});

test('toHaveScreenshot', async ({ page }) => {
  await expect(page).toHaveScreenshot();
});
