import { BaseComponentPage } from '../base/baseComponent.page';
import { Locator } from '@playwright/test';

export class LoginFormPage extends BaseComponentPage {
  readonly loginForm: Locator = this.page.locator('.login_wrapper');
  readonly userNameField: Locator = this.page.locator('#user-name');
  readonly passwordField: Locator = this.page.locator('#password');
  readonly loginButton: Locator = this.page.locator('#login-button');
  readonly errorText: Locator = this.page.locator('.error-message-container');

  async fillUserNameField(username: string) {
    await this.userNameField.fill(username);
  }

  async fillPasswordField(password: string) {
    await this.passwordField.fill(password);
  }

  async clearField(locator: Locator) {
    await locator.clear();
  }

  async fillLoginForm(username: string, password: string) {
    await this.fillUserNameField(username);
    await this.fillPasswordField(password);
    await this.loginButton.click();
  }
}
