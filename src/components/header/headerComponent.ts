import { Page } from '@playwright/test';
import { ComponentObject } from '@componentObject';

export class HeaderComponent implements ComponentObject {
  constructor(public readonly page: Page) {}

  /** コンポーネント全体 */
  readonly body = () => this.page.locator('body');
}
