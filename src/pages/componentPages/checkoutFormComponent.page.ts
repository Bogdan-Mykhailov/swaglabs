import { BaseComponentPage } from '../base/baseComponent.page';

export class CheckoutFormComponentPage extends BaseComponentPage {
  readonly formContainer = this.page.locator('.checkout_info');
  readonly firstnameField = this.page.locator('#first-name');
  readonly lastnameField = this.page.locator('#last-name');
  readonly zipField = this.page.locator('#postal-code');
}
