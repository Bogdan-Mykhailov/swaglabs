import { BasePage } from './base/base.page';
import { HeaderComponentPage } from './componentPages/headerComponent.page';

export class InventoryPage extends BasePage {
  public header: HeaderComponentPage = new HeaderComponentPage(this.page);
}
