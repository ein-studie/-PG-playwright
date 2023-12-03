import { test } from '@tests/fixture';

// 実行ログ
// 🔴beforeAll - outer
// 😊beforeAll - middle
// 🟢beforeAll - inner
// 🔴beforeEach - outer
// 😊beforeEach - middle
// 🟢beforeEach - inner
// 🟢afterEach - inner
// 😊afterEach - middle
// 🔴afterEach - outer
// 🟢afterAll - inner
// 😊afterAll - middle
// 🔴afterAll - outer

test.beforeAll(() => console.log('🔴beforeAll - outer'));
test.beforeEach(() => console.log('🔴beforeEach - outer'));
test.afterEach(() => console.log('🔴afterEach - outer'));
test.afterAll(() => console.log('🔴afterAll - outer'));

test.describe('test - middle', async () => {
  test.beforeAll(() => console.log('😊beforeAll - middle'));
  test.beforeEach(() => console.log('😊beforeEach - middle'));
  test.afterEach(() => console.log('😊afterEach - middle'));
  test.afterAll(() => console.log('😊afterAll - middle'));

  test.describe('test - inner', async () => {
    test.beforeAll(() => console.log('🟢beforeAll - inner'));
    test.beforeEach(() => console.log('🟢beforeEach - inner'));
    test.afterEach(() => console.log('🟢afterEach - inner'));
    test.afterAll(() => console.log('🟢afterAll - inner'));
  });
});
