import { BaseComponentPage } from '../base/baseComponent.page';
import { Locator } from '@playwright/test';

export class LoginCredentialsContainerPage extends BaseComponentPage {
readonly container: Locator = this.page.getByTestId('login-credentials-container');
readonly credentialsBlock: Locator = this.page.locator('#login_credentials');
readonly passwordBlock: Locator = this.page.locator('.login_password');
readonly credentialsBlockTitle: Locator = this.credentialsBlock.locator('h4');
readonly passwordBlockTitle: Locator = this.passwordBlock.locator('h4');
}
