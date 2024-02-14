import type { Page, Locator } from '@playwright/test';

export interface ComponentObject {
  /** ページオブジェクト */
  readonly page: Page;

  /** コンポーネント全体 */
  readonly body: () => Locator;
  /** ページタイトル */
  readonly title?: () => Locator;
}
