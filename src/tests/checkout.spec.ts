import { testStep } from '../testStepDefinition/testStep';
import { test, expect } from '../fixtures/web.fixtures';
import { LOGIN_PAGE_DATA, USER_CREDENTIALS } from '../../testData/loginPage.data';
import { BUTTON_TEXT, INVENTORY_ITEM_DATA } from '../../testData/inventoryPage.data';
import { HEADER_DATA } from '../../testData/base.data';

test.describe('Complete checkout flow',
  () => {

    test.beforeEach(async ({ loginPage }) => {
      await loginPage.openLoginPage();
    });

    test('Should successfully complete checkout flow', { tag: '@TC006' }, async (
      {
        page,
        loginPage,
        inventoryPage,
        cartPage,
        checkoutPage
      }) => {
      await testStep('Verify form inputs visibility', async () => {
        await expect(loginPage.loginFormComponent.loginForm,
          'The login form should be visible').toBeVisible();
      });

      await testStep('Fill login form using valid data', async () => {
        await loginPage.loginFormComponent.loginWithCredentials(
          USER_CREDENTIALS.standard,
          process.env.TEST_USER_PASSWORD
        );
      });

      await testStep('Verify that user logged in and redirected to the inventory page', async () => {
        await expect(page, 'The user should be redirected to the inventory page').toHaveURL(/\/inventory\.html/);
        await expect(inventoryPage.header.subHeaderTitle,
          'The page name should be visible').toBeVisible();
        await expect(inventoryPage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.inventoryPageTitle}`).toHaveText(HEADER_DATA.inventoryPageTitle);
      });

      await testStep('Add element to the cart', async () => {
        await inventoryPage.verifyElementVisibility(
          inventoryPage.inventoryComponent.inventoryItem.first(),
          'The inventory item should be visible');
        await inventoryPage.inventoryComponent.inventoryItemButton.first().click();
      });

      await testStep('Verify that user successfully added item to the cart', async () => {
        await expect(inventoryPage.inventoryComponent.inventoryItemButton.first()).toContainText(BUTTON_TEXT.remove);
        await inventoryPage.verifyElementVisibility(
          inventoryPage.header.cartBadge,
          'The cart badge should be visible');
      });

      await testStep('Click on cart icon', async () => {
        await inventoryPage.header.cartBadge.click();
      });

      await testStep('Verify that user redirected to the cart page', async () => {
        await expect(page, 'The user should be redirected to the cart page').toHaveURL(/\/cart\.html/);
        await expect(inventoryPage.header.subHeaderTitle,
          'The page name should be visible').toBeVisible();
        await expect(inventoryPage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.cartPageTitle}`).toHaveText(HEADER_DATA.cartPageTitle);
      });

      await testStep('Verify that added gods displayed on the cart page', async () => {
        await cartPage.verifyElementVisibility(cartPage.cartItemComponent.cartItem, 'The cart item should be visible');
      });

      await testStep('Verify added item details', async () => {
        await expect(cartPage.cartItemComponent.cartItemTitle,
          `The title should have text: ${INVENTORY_ITEM_DATA.title}`).toContainText(INVENTORY_ITEM_DATA.title);
        await expect(cartPage.cartItemComponent.cartItemDescription,
          `The description should have text: ${INVENTORY_ITEM_DATA.description}`).toHaveText(INVENTORY_ITEM_DATA.description);
        await expect(cartPage.cartItemComponent.cartItemPrice,
          `The price should be: ${INVENTORY_ITEM_DATA.price}`).toHaveText(INVENTORY_ITEM_DATA.price);
      });

      await testStep('Click Checkout button', async () => {
        await cartPage.checkoutButton.click();
      });

      await testStep('Verify that user redirected to the Checkout page', async () => {
        await expect(page, 'The user should be redirected to the checkout page').toHaveURL(/\/checkout-step-one\.html/);
        await expect(checkoutPage.header.subHeaderTitle,
          'The page name should be visible').toBeVisible();
        await expect(checkoutPage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.checkoutPageTitle}`).toHaveText(HEADER_DATA.checkoutPageTitle);
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
