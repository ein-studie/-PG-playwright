import type { Page, Locator } from "@playwright/test";

export interface PageObject {
  /** ページオブジェクト */
  readonly page: Page;
  /** URL */
  readonly url: string;

  /** ページタイトル */
  readonly title?: () => Locator;
}
