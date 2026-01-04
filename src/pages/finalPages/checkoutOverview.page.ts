import { BasePage } from '../base/base.page';
import { HeaderComponentPage } from '../componentPages/headerComponent.page';
import { CartItemComponentPage } from '../componentPages/cartItemComponent.page';
import { SummaryComponentPage } from '../componentPages/summaryComponent.page';

export class CheckoutOverviewPage extends BasePage {
  readonly header: HeaderComponentPage = new HeaderComponentPage(this.page);
  readonly cartItemComponent: CartItemComponentPage = new CartItemComponentPage(this.page);
  readonly summaryComponent: SummaryComponentPage = new SummaryComponentPage(this.page);

  readonly cancelButton = this.page.locator('#cancel');
  readonly finishButton = this.page.locator('#finish');
}
