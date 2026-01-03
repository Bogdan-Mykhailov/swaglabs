import { BaseComponentPage } from '../base/baseComponent.page';
import { Locator } from '@playwright/test';

export class HeaderComponentPage extends BaseComponentPage {
readonly header: Locator = this.page.locator('.primary_header');
}
