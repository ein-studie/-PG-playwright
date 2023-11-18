import { test as base } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto("/todomvc");
    await use(page);
    await page.close({ reason: "テスト終了" });
  },
});

export { expect } from "@playwright/test";
