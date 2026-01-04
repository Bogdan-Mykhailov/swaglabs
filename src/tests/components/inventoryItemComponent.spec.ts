import { testStep } from '../../testStepDefinition/testStep';
import { expect, test } from '../../fixtures/web.fixtures';
import { USER_CREDENTIALS } from '../../../testData/loginPage.data';
import { INVENTORY_ITEM_DATA } from '../../../testData/inventoryPage.data';

test.describe('Verify Inventory Item Component',
  { tag: ['@component'] },
  () => {
    test.beforeEach(async ({ loginPage }) => {
      await loginPage.openLoginPage();
      await loginPage.loginFormComponent.loginWithCredentials(USER_CREDENTIALS.standard, process.env.TEST_USER_PASSWORD);
    });

    test('Verify Inventory item elements',
      { tag: ['@component', '@TC005'] },
      async ({ inventoryPage }) => {
        await testStep('Verify that all elements is visible', async () => {
          await inventoryPage.verifyElementVisibility(
            inventoryPage.inventoryComponent.inventoryItemPhoto.first(),
            'The inventory item photo should be visible');
          await inventoryPage.verifyElementVisibility(
            inventoryPage.inventoryComponent.inventoryItemTitle.first(),
            'The inventory item title should be visible');
          await inventoryPage.verifyElementVisibility(
            inventoryPage.inventoryComponent.inventoryItemDescription.first(),
            'The inventory item description should be visible');
          await inventoryPage.verifyElementVisibility(
            inventoryPage.inventoryComponent.inventoryItemPrice.first(),
            'The inventory item price should be visible');
          await inventoryPage.verifyElementVisibility(
            inventoryPage.inventoryComponent.inventoryItemButton.first(),
            'The inventory item button should be visible');
        });

        await testStep('Verify that inventory item elements have correct text', async () => {
          await expect(inventoryPage.inventoryComponent.inventoryItemTitle.first(),
            `The inventory item title should have text: ${INVENTORY_ITEM_DATA.title}`).toHaveText(INVENTORY_ITEM_DATA.title);
          await expect(inventoryPage.inventoryComponent.inventoryItemDescription.first(),
            `The inventory item description should have text: ${INVENTORY_ITEM_DATA.description}`).toContainText(INVENTORY_ITEM_DATA.description);
          await expect(inventoryPage.inventoryComponent.inventoryItemPrice.first(),
            `The inventory item price should be: ${INVENTORY_ITEM_DATA.price}`).toHaveText(INVENTORY_ITEM_DATA.price);
        });
      });
  });
