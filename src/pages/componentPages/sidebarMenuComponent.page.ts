import { BaseComponentPage } from '../base/baseComponent.page';

export class SidebarMenuComponentPage extends BaseComponentPage {
  readonly sidebarMenu = this.page.locator('.bm-menu');
  readonly logoutLink = this.page.locator('#logout_sidebar_link');
}
