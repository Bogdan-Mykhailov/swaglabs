import { BaseComponentPage } from '../base/baseComponent.page';
import { convertStringToNumber } from '../../utils/helpers';

export class SummaryComponentPage extends BaseComponentPage {
  readonly summaryContainer = this.page.locator('.summary_info');
  readonly paymentInfoLabel = this.page.locator('.summary_info_label').nth(0);
  readonly paymentInfoValue = this.page.locator('.summary_info_value').nth(0);
  readonly shippingInfoLabel = this.page.locator('.summary_info_label').nth(1);
  readonly shippingInfoValue = this.page.locator('.summary_info_value').nth(1);
  readonly priceTotalLabel = this.page.locator('.summary_info_label').nth(2);
  readonly itemTotalLabel = this.page.locator('.summary_subtotal_label');
  readonly taxLabel = this.page.locator('.summary_tax_label');
  readonly totalLabel = this.page.locator('.summary_total_label');

  async getSummaryPrices() {
    const itemPrice = convertStringToNumber(await this.itemTotalLabel.textContent());
    const taxPrice = convertStringToNumber(await this.taxLabel.textContent());

    return itemPrice + taxPrice;
  }
}
