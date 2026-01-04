import { BasePage } from '../base/base.page';
import { LoginFormComponentPage } from '../componentPages/loginFormComponent.page';
import { LoginCredentialsContainerPage } from '../componentPages/loginCredentialsContainer.page';

export class LoginPage extends BasePage {
  public loginFormComponent: LoginFormComponentPage = new LoginFormComponentPage(this.page);
  public loginCredentialsComponent: LoginCredentialsContainerPage = new LoginCredentialsContainerPage(this.page);

  async openLoginPage() {
    await super.openPage('https://www.saucedemo.com/');
    return this;
  }
}
