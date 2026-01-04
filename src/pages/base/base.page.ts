import { BaseComponentPage } from './baseComponent.page';
import { Locator } from '@playwright/test';
import { expect } from 'playwright/test';

export class BasePage extends BaseComponentPage {
  openPage(pagePath: string) {
    return this.page.goto(pagePath);
  }

  async verifyElementVisibility(locator: Locator, errorMessage: string): Promise<void> {
    await expect(locator, errorMessage).toBeVisible();
  }
}
