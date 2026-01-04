import { BasePage } from '../base/base.page';
import { HeaderComponentPage } from '../componentPages/headerComponent.page';

export class CheckoutCompletePage extends BasePage {
  readonly header: HeaderComponentPage = new HeaderComponentPage(this.page);

  readonly checkoutCompleteContainer = this.page.locator('#checkout_complete_container');
  readonly checkoutCompleteIcon = this.checkoutCompleteContainer.locator('img');
  readonly checkoutCompleteTitle = this.page.locator('.complete-header');
  readonly checkoutCompleteText = this.page.locator('.complete-text');
  readonly backButton = this.page.locator('#back-to-products');
}
