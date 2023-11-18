import { Page } from '@playwright/test';
import { PageObject } from '../PageObject';

export class HomePage implements PageObject {
  /** ページタイトル */
  readonly page: Page;
  /** URL */
  readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = '/';
  }

  /** ページタイトル */
  readonly title = () => this.page.getByRole('heading', { name: 'todos' });
  /** ヘッダーテキスト */
  readonly headerText = () => this.page.getByText('This is just a demo of');
  /** ToDo_入力フォーム */
  readonly todoInput = () => this.page.getByPlaceholder('What needs to be done?');
  /** ToDoアイテム_ラベル */
  readonly todoItemLabel = (i: number) => this.page.locator(`body > section > div > section > ul > li:nth-child(${i}) > div > label`);
  /** ToDoアイテム_入力フォーム */
  readonly todoItemCheckbox = (i: number) => this.page.locator(`body > section > div > section > ul > li:nth-child(${i}) > div > input`);

  /**
   * home-goto
   */
  public async fnGoto(): Promise<void> {
    await this.page.goto(this.url);
  }

  /**
   * home-goto
   */
  public async fnAddTodoItems(todos: string[]): Promise<void> {
    for (const todo of todos) {
      await this.todoInput().pressSequentially(todo);
      await this.page.keyboard.press('Enter');
    }
  }
}
