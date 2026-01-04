import { BasePage } from '../base/base.page';
import { HeaderComponentPage } from '../componentPages/headerComponent.page';
import { CartItemComponentPage } from '../componentPages/cartItemComponent.page';

export class CartPage extends BasePage {
  readonly header: HeaderComponentPage = new HeaderComponentPage(this.page);
  readonly cartItemComponent: CartItemComponentPage = new CartItemComponentPage(this.page);

  readonly contentContainer = this.page.locator('#cart_contents_container');
  readonly cartFooter = this.page.locator('.cart_footer');
  readonly continueShoppingButton = this.cartFooter.locator('button').first();
  readonly checkoutButton = this.cartFooter.locator('button').last();
}
