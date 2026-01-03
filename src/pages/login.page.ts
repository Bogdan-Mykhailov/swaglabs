import { BasePage } from './base/base.page';
import { LoginFormPage } from './componentPages/loginForm.page';
import { LoginCredentialsContainerPage } from './componentPages/loginCredentialsContainer.page';

export class LoginPage extends BasePage {
  public loginFormComponent: LoginFormPage = new LoginFormPage(this.page);
  public loginCredentialsComponent: LoginCredentialsContainerPage = new LoginCredentialsContainerPage(this.page);

  async openLoginPage() {
    await super.openPage('https://www.saucedemo.com/');
    return this;
  }
}
