import { BasePage } from './base/base.page';
import { HeaderComponentPage } from './componentPages/headerComponent.page';

export class CheckoutPage extends BasePage {
  readonly header: HeaderComponentPage = new HeaderComponentPage(this.page);
}
