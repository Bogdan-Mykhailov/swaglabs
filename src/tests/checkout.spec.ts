import { testStep } from '../testStepDefinition/testStep';
import { test, expect } from '../fixtures/web.fixtures';
import { LOGIN_PAGE_DATA, USER_CREDENTIALS } from '../../testData/loginPage.data';
import { BUTTON_TEXT, INVENTORY_ITEM_DATA } from '../../testData/inventoryPage.data';
import { HEADER_DATA, USER_DATA } from '../../testData/base.data';
import { convertStringToNumber } from '../utils/helpers';
import { CHECKOUT_COMPLETE_DATA } from '../../testData/checkoutCompletePage.data';

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
        checkoutPage,
        checkoutOverviewPage,
        checkoutCompletePage
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
        await inventoryPage.verifyElementVisibility(inventoryPage.header.subHeaderTitle, 'The page name should be visible');
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
        await cartPage.verifyElementVisibility(cartPage.contentContainer, 'The cart content container should be visible');
        await cartPage.verifyElementVisibility(cartPage.header.subHeaderTitle, 'The page name should be visible');
        await expect(cartPage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.cartPageTitle}`).toHaveText(HEADER_DATA.cartPageTitle);
      });

      await testStep('Verify that added gods displayed on the cart page', async () => {
        await cartPage.verifyElementVisibility(cartPage.cartItemComponent.cartItem, 'The cart item should be visible');
      });

      await testStep('Verify added item details', async () => {
        await expect(cartPage.cartItemComponent.cartItemTitle,
          `The title should have text: ${INVENTORY_ITEM_DATA.title}`).toContainText(INVENTORY_ITEM_DATA.title);
        await expect(cartPage.cartItemComponent.cartItemDescription,
          `The description should have text: ${INVENTORY_ITEM_DATA.description}`).toContainText(INVENTORY_ITEM_DATA.description);
        await expect(cartPage.cartItemComponent.cartItemPrice,
          `The price should be: ${INVENTORY_ITEM_DATA.price}`).toHaveText(INVENTORY_ITEM_DATA.price);
      });

      await testStep('Click Checkout button', async () => {
        await cartPage.checkoutButton.click();
      });

      await testStep('Verify that user redirected to the Checkout page', async () => {
        await expect(page, 'The user should be redirected to the checkout page').toHaveURL(/\/checkout-step-one\.html/);
        await checkoutPage.verifyElementVisibility(checkoutPage.header.subHeaderTitle, 'The page name should be visible');
        await expect(checkoutPage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.checkoutPageTitle}`).toHaveText(HEADER_DATA.checkoutPageTitle);
        await checkoutPage.verifyElementVisibility(checkoutPage.checkoutFormComponent.formContainer, 'The checkout form should be visible');
      });

      await testStep('Fill checkout form', async () => {
        await checkoutPage.fillCheckoutForm(USER_DATA);
      });

      await testStep('Click Continue button', async () => {
        await checkoutPage.continueButton.click();
      });

      await testStep('Verify that user redirected to the Checkout Overview page', async () => {
        await expect(page, 'The user should be redirected to the checkout overview page').toHaveURL(/\/checkout-step-two\.html/);
        await checkoutOverviewPage.verifyElementVisibility(checkoutPage.header.subHeaderTitle, 'The page name should be visible');
        await expect(checkoutOverviewPage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.checkoutOverviewPageTitle}`).toHaveText(HEADER_DATA.checkoutOverviewPageTitle);
      });

      await testStep('Verify items on the Checkout Overview page', async () => {
        await checkoutOverviewPage.verifyElementVisibility(
          checkoutOverviewPage.cartItemComponent.cartItemTitle,
          'The cart item should be visible');
        await checkoutOverviewPage.verifyElementVisibility(
          checkoutOverviewPage.summaryComponent.summaryContainer,
          'The summary info section should be visible');
      });

      await testStep('Verify total price in the summary section', async () => {
        const totalPrice = await checkoutOverviewPage.summaryComponent.getSummaryPrices();
        expect(convertStringToNumber(await checkoutOverviewPage.summaryComponent.totalLabel.textContent())).toEqual(totalPrice);
      });

      await testStep('Click Finish button', async () => {
        await checkoutOverviewPage.finishButton.click();
      });

      await testStep('Verify that user redirected to the Checkout Complete page', async () => {
        await expect(page, 'The user should be redirected to the checkout complete page').toHaveURL(/\/checkout-complete\.html/);
        await expect(checkoutCompletePage.header.subHeaderTitle,
          `The page name should be ${HEADER_DATA.checkoutCompletePageTitle}`).toHaveText(HEADER_DATA.checkoutCompletePageTitle);
      });

      await testStep('Verify that user successfully completed the checkout', async () => {
        await checkoutCompletePage.verifyElementVisibility(
          checkoutCompletePage.checkoutCompleteIcon,
          'The checkout complete icon should be visible');

        await checkoutCompletePage.verifyElementVisibility(
          checkoutCompletePage.checkoutCompleteTitle,
          'The checkout complete title should be visible');

        await checkoutCompletePage.verifyElementVisibility(
          checkoutCompletePage.checkoutCompleteText,
          'The checkout complete text should be visible');

        await expect(checkoutCompletePage.checkoutCompleteTitle,
          `The checkout complete title should have text: ${CHECKOUT_COMPLETE_DATA.completeTitle}`).toHaveText(CHECKOUT_COMPLETE_DATA.completeTitle);

        await expect(checkoutCompletePage.checkoutCompleteText,
          `The checkout complete text should have text: ${CHECKOUT_COMPLETE_DATA.completeText}`).toHaveText(CHECKOUT_COMPLETE_DATA.completeText);
      });
    });

    // todo update test scenario
    test('Fill login form using invalid data', { tag: '@TC007' }, async ({ loginPage }) => {
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
