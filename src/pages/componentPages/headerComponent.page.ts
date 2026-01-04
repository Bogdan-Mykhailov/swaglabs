import { BaseComponentPage } from '../base/baseComponent.page';
import { Locator } from '@playwright/test';
import { SidebarMenuComponentPage } from './sidebarMenuComponent.page';

export class HeaderComponentPage extends BaseComponentPage {
  readonly sidebarMenuComponent: SidebarMenuComponentPage = new SidebarMenuComponentPage(this.page);

  readonly header: Locator = this.page.locator('.primary_header');
  readonly menuButton: Locator = this.page.locator('#react-burger-menu-btn');
  readonly cartButton: Locator = this.page.locator('#shopping_cart_container');
  readonly appTitle: Locator = this.page.locator('.app_logo');
  readonly cartBadge: Locator = this.page.locator('.shopping_cart_badge');
  readonly subHeaderContainer: Locator = this.page.locator('.header_secondary_container');
  readonly subHeaderTitle: Locator = this.subHeaderContainer.locator('.title');
}
