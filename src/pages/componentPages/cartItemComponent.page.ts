import { BaseComponentPage } from '../base/baseComponent.page';
import { Locator } from '@playwright/test';

export class CartItemComponentPage extends BaseComponentPage {
  readonly cartItem: Locator = this.page.locator('.cart_item');
  readonly cartQuantity: Locator = this.page.locator('.cart_quantity');
  readonly cartItemTitle: Locator = this.page.locator('.inventory_item_name');
  readonly cartItemDescription: Locator = this.page.locator('.inventory_item_desc');
  readonly cartItemPrice: Locator = this.page.locator('.inventory_item_price');
  readonly cartItemButton: Locator = this.cartItem.locator('button');
}
