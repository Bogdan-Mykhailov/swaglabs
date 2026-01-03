import { test, expect } from '../../fixtures/web.fixtures';
import { testStep } from '../../testStepDefinition/testStep';
import { LOGIN_PAGE_DATA, USER_CREDENTIALS } from '../../../testData/loginPage.data';

test.describe.configure({ mode: 'default' });

test.describe('Login Form Component Flow',
  { tag: ['@component'] },
  () => {

    test.beforeEach(async ({ loginPage }) => {
      await loginPage.openLoginPage();
    });

    test('Verify ability to fill the form', { tag: '@CLF-001' }, async ({ loginPage }) => {
      await testStep('Verify form inputs visibility', async () => {
        await expect(loginPage.loginFormComponent.loginForm,
          'The login form should be visible').toBeVisible();
      });

      await testStep('Fill login form using valid data', async () => {
        await loginPage.loginFormComponent.fillUserNameField(USER_CREDENTIALS.standard);
        await loginPage.loginFormComponent.fillPasswordField(process.env.TEST_USER_PASSWORD);
      });

      await testStep('Verify form is filled with correct data', async () => {
        await expect(loginPage.loginFormComponent.userNameField,
          `The username should contain text: ${USER_CREDENTIALS.standard}`).toHaveValue(USER_CREDENTIALS.standard);
        await expect(loginPage.loginFormComponent.passwordField,
          'The password field should contain the entered password').toHaveValue(process.env.TEST_USER_PASSWORD);
      });
    });

    test('Submit login form with empty fields', { tag: '@CLF-002' }, async ({ loginPage }) => {
      await testStep('Fill login form using valid data', async () => {
        await loginPage.loginFormComponent.fillUserNameField(USER_CREDENTIALS.standard);
        await loginPage.loginFormComponent.fillPasswordField(process.env.TEST_USER_PASSWORD);
      });

      await testStep('Clear username and password input', async () => {
        await loginPage.loginFormComponent.clearField(loginPage.loginFormComponent.userNameField);
        await loginPage.loginFormComponent.clearField(loginPage.loginFormComponent.passwordField);
      });

      await testStep('Click login button', async () => {
        await loginPage.loginFormComponent.loginButton.click();
      });

      await testStep('Verify error message is displayed', async () => {
        await expect(loginPage.loginFormComponent.errorText,
          'The error message should be visible').toBeVisible();
        await expect(loginPage.loginFormComponent.errorText,
          `The error message should contain text: ${LOGIN_PAGE_DATA.emptyUserCredentialErrorMessage}`)
          .toContainText(LOGIN_PAGE_DATA.emptyUserCredentialErrorMessage);
      });
    });

    test('Verify credentials block on the login page', { tag: '@CLF-003' }, async ({ loginPage }) => {
      await testStep('Verify credentials block on the login page is displayed', async () => {
        await expect(loginPage.loginCredentialsComponent.credentialsBlock,
          'The credentials block on the login page should be visible').toBeVisible();
      });

      await testStep('Verify credentials block title', async () => {
        await expect(loginPage.loginCredentialsComponent.credentialsBlockTitle,
          'The credentials block title should be visible').toBeVisible();
        await expect(loginPage.loginCredentialsComponent.credentialsBlockTitle,
          `The credentials block title should contain text: ${LOGIN_PAGE_DATA.credentialsTitle}`).toContainText(LOGIN_PAGE_DATA.credentialsTitle);
      });
    });

    test('Verify password block on the login page', { tag: '@CLF-003' }, async ({ loginPage }) => {
      await testStep('Verify password block on the login page is displayed', async () => {
        await expect(loginPage.loginCredentialsComponent.passwordBlock,
          'The password block on the login page should be visible').toBeVisible();
      });

      await testStep('Verify credentials block title', async () => {
        await expect(loginPage.loginCredentialsComponent.passwordBlockTitle,
          'The credentials block title should be visible').toBeVisible();
        await expect(loginPage.loginCredentialsComponent.passwordBlockTitle,
          `The credentials block title should contain text: ${LOGIN_PAGE_DATA.passwordTitle}`).toContainText(LOGIN_PAGE_DATA.passwordTitle);
      });
    });
  });
