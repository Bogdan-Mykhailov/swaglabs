import { BaseComponentPage } from '../base/baseComponent.page';
import { Locator } from '@playwright/test';

export class InventoryItemComponentPage extends BaseComponentPage {
  readonly inventoryItem: Locator = this.page.locator('.inventory_item');
  readonly inventoryItemPhoto: Locator = this.page.locator('.inventory_item_img');
  readonly inventoryItemTitle: Locator = this.page.locator('.inventory_item_name');
  readonly inventoryItemDescription: Locator = this.page.locator('.inventory_item_desc');
  readonly inventoryItemPriceBar: Locator = this.page.locator('.pricebar');
  readonly inventoryItemPrice: Locator = this.page.locator('.inventory_item_price');
  readonly inventoryItemButton: Locator = this.inventoryItemPriceBar.locator('button');
}
