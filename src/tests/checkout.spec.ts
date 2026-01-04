import { testStep } from '../testStepDefinition/testStep';
import { test, expect } from '../fixtures/web.fixtures';
import { LOGIN_PAGE_DATA, USER_CREDENTIALS } from '../../testData/loginPage.data';

test.describe('Verify login flow',
  { tag: ['@loginFlow'] },
  () => {

    test.beforeEach(async ({ loginPage }) => {
      await loginPage.openLoginPage();
    });

    test('Verify ability to fill form with valid data', { tag: '@LF_001' }, async ({ page, loginPage }) => {
      await testStep('Verify form inputs visibility', async () => {
        await expect(loginPage.loginFormComponent.loginForm,
          'The login form should be visible').toBeVisible();
      });

      await testStep('Fill login form using valid data', async () => {
        await loginPage.loginFormComponent.loginWithCredentials(USER_CREDENTIALS.standard, process.env.TEST_USER_PASSWORD);
      });

      await testStep('Verify successful login by checking URL', async () => {
        await expect(page).toHaveURL(/\/inventory\.html/);
      });
    });

    test('Fill login form using invalid data', { tag: '@LF_002' }, async ({ loginPage }) => {
      await testStep('Fill login form using locked user credentials', async () => {
        await loginPage.loginFormComponent.loginWithCredentials(USER_CREDENTIALS.locked_out, process.env.TEST_USER_PASSWORD);
      });

      await testStep('Verify error message is displayed', async () => {
        await expect(loginPage.loginFormComponent.errorText,
          'The error message should be visible').toBeVisible();
        await expect(loginPage.loginFormComponent.errorText,
          `The error message should contain text: ${LOGIN_PAGE_DATA.lockedUserErrorMessage}`).toContainText(LOGIN_PAGE_DATA.lockedUserErrorMessage);
      });
    });
  });
