import { BasePage } from '../base/base.page';
import { HeaderComponentPage } from '../componentPages/headerComponent.page';
import { InventoryItemComponentPage } from '../componentPages/inventoryItemComponent.page';

export class InventoryPage extends BasePage {
  public header: HeaderComponentPage = new HeaderComponentPage(this.page);
  public inventoryComponent: InventoryItemComponentPage = new InventoryItemComponentPage(this.page);
}
