import { BaseComponentPage } from './baseComponent.page';

export class BasePage extends BaseComponentPage {
  openPage(pagePath: string) {
    return this.page.goto(pagePath);
  }
}
