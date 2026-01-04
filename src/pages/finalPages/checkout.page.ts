import { BasePage } from '../base/base.page';
import { HeaderComponentPage } from '../componentPages/headerComponent.page';
import { CheckoutFormComponentPage } from '../componentPages/checkoutFormComponent.page';
import { IUserData } from '../../../testData/base.data';

export class CheckoutPage extends BasePage {
  readonly header: HeaderComponentPage = new HeaderComponentPage(this.page);
  readonly checkoutFormComponent: CheckoutFormComponentPage = new CheckoutFormComponentPage(this.page);

  readonly checkoutContainer = this.page.locator('#checkout_info_container');
  readonly checkoutButtonsBlock = this.page.locator('.checkout_buttons');
  readonly cancelButton = this.page.locator('#cancel');
  readonly continueButton = this.page.locator('#continue');

  async fillCheckoutForm(userData: IUserData): Promise<void> {
    await this.checkoutFormComponent.firstnameField.fill(userData.firstname);
    await this.checkoutFormComponent.lastnameField.fill(userData.lastname);
    await this.checkoutFormComponent.zipField.fill(userData.zip);
  }
}
