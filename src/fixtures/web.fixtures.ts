import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/finalPages/login.page';
import { InventoryPage } from '../pages/finalPages/inventory.page';
import { CartPage } from '../pages/finalPages/cart.page';
import { CheckoutPage } from '../pages/finalPages/checkout.page';
import { CheckoutOverviewPage } from '../pages/finalPages/checkoutOverview.page';
import { CheckoutCompletePage } from '../pages/finalPages/checkoutComplete.page';

interface WebFixtures {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutCompletePage: CheckoutCompletePage;
}

const test = base.extend<WebFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },

  checkoutOverviewPage: async ({ page }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    await use(checkoutOverviewPage);
  },

  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await use(checkoutCompletePage);
  },
});

export { test, expect };
