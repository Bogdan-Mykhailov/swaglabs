export interface IUserData {
  firstname: string;
  lastname: string;
  zip: string;
}

export const HEADER_DATA = {
  appTitle: 'Swag Labs',
  inventoryPageTitle: 'Products',
  cartPageTitle: 'Your Cart',
  checkoutPageTitle: 'Checkout: Your Information',
  checkoutOverviewPageTitle: 'Checkout: Overview',
  checkoutCompletePageTitle: 'Checkout: Complete!',
};

export const USER_DATA: IUserData = {
  firstname: 'Mike',
  lastname: 'Tyson',
  zip: '29012',
};
