# Login Form Component Tests

---

## TC001 – Verify ability to fill the form `@TC001`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Verify form inputs visibility | — | Login form is visible |
| 2 | Fill login form using valid data | Username: `USER_CREDENTIALS.standard`, Password: `process.env.TEST_USER_PASSWORD` | Username and password fields contain the entered data |
| 3 | Verify form is filled with correct data | — | Username field contains `USER_CREDENTIALS.standard`, password field contains `process.env.TEST_USER_PASSWORD` |

---
## TC002 – Submit login form with empty fields `@TC002`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Fill login form with valid data | Username: `USER_CREDENTIALS.standard`, Password: `process.env.TEST_USER_PASSWORD` | Username and password fields are filled |
| 2 | Clear username and password input | — | Username and password fields are empty |
| 3 | Click login button | — | Login is not submitted |
| 4 | Verify error message is displayed | — | Error message is visible and contains `LOGIN_PAGE_DATA.emptyUserCredentialErrorMessage` |

---

## TC003 – Verify credentials block on the login page `@TC003`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Verify credentials block is displayed | — | Credentials block is visible |
| 2 | Verify credentials block title | — | Credentials block title is visible and contains `LOGIN_PAGE_DATA.credentialsTitle` |

---

## TC004 – Verify password block on the login page `@TC004`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Verify password block is displayed | — | Password block is visible |
| 2 | Verify password block title | — | Password block title is visible and contains `LOGIN_PAGE_DATA.passwordTitle` |

---

# Inventory Item Component Test

---

## TC005 – Verify Inventory Item Component `@TC005`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Verify that all inventory item elements are visible | — | Inventory item photo, title, description, price, and button are visible |
| 2 | Verify that inventory item title has correct text | Title: `INVENTORY_ITEM_DATA.title` | Inventory item title text matches `INVENTORY_ITEM_DATA.title` |
| 3 | Verify that inventory item description has correct text | Description: `INVENTORY_ITEM_DATA.description` | Inventory item description text matches `INVENTORY_ITEM_DATA.description` |
| 4 | Verify that inventory item price has correct text | Price: `INVENTORY_ITEM_DATA.price` | Inventory item price matches `INVENTORY_ITEM_DATA.price` |

---

# Checkout Flow E2E Tests

---

## TC006 – Should successfully complete checkout flow `@TC006`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Verify login form visibility | — | Login form is visible |
| 2 | Fill login form using valid data | Username: `USER_CREDENTIALS.standard`, Password: `process.env.TEST_USER_PASSWORD` | User credentials are entered |
| 3 | Verify user logged in and redirected to inventory page | — | Page URL matches `/inventory.html`; subHeaderTitle visible and matches `HEADER_DATA.inventoryPageTitle` |
| 4 | Add inventory item to cart | — | Inventory item visible; item button clicked |
| 5 | Verify item added to cart | — | Button text changes to `BUTTON_TEXT.remove`; cart badge visible |
| 6 | Click on cart icon | — | Cart page opened |
| 7 | Verify redirected to cart page | — | URL matches `/cart.html`; content container and page title visible; page title matches `HEADER_DATA.cartPageTitle` |
| 8 | Verify added item displayed on cart page | — | Cart item visible |
| 9 | Verify added item details | Title: `INVENTORY_ITEM_DATA.title`; Description: `INVENTORY_ITEM_DATA.description`; Price: `INVENTORY_ITEM_DATA.price` | Cart item title, description, and price match expected |
| 10 | Click Checkout button | — | Redirected to checkout page |
| 11 | Verify redirected to checkout page | — | URL matches `/checkout-step-one.html`; page title visible and matches `HEADER_DATA.checkoutPageTitle`; checkout form visible |
| 12 | Fill checkout form | `USER_DATA` | Form fields filled with user data |
| 13 | Click Continue button | — | Redirected to checkout overview page |
| 14 | Verify redirected to checkout overview page | — | URL matches `/checkout-step-two.html`; page title visible and matches `HEADER_DATA.checkoutOverviewPageTitle` |
| 15 | Verify items on checkout overview page | — | Cart items and summary section visible |
| 16 | Verify total price in summary section | — | Total price matches sum of cart items |
| 17 | Click Finish button | — | Redirected to checkout complete page |
| 18 | Verify redirected to checkout complete page | — | URL matches `/checkout-complete.html`; page title visible and matches `HEADER_DATA.checkoutCompletePageTitle` |
| 19 | Verify checkout completion | Title: `CHECKOUT_COMPLETE_DATA.completeTitle`; Text: `CHECKOUT_COMPLETE_DATA.completeText` | Checkout complete icon, title, and text visible; text matches expected |

---

## TC007 – Should show error and prevent login for locked out user `@TC007`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Fill login form using locked user credentials | Username: `USER_CREDENTIALS.locked_out`; Password: `process.env.TEST_USER_PASSWORD` | Credentials entered |
| 2 | Verify login button is enabled | — | Login button is enabled |
| 3 | Click Login button | — | User attempts login |
| 4 | Verify user stays on login page | — | URL does not change to `/inventory.html` |
| 5 | Verify error message is displayed | — | Error message visible and contains `LOGIN_PAGE_DATA.lockedUserErrorMessage` |

---

## TC008 – Verify ability to logout `@TC008`

| # | Step | Data | Expected Result |
|---|------|------|----------------|
| 1 | Login to the application using valid credentials | Username: `USER_CREDENTIALS.standard`; Password: `process.env.TEST_USER_PASSWORD` | User logged in |
| 2 | Open sidebar menu | — | Menu button visible and clicked |
| 3 | Verify sidebar menu displayed | — | Sidebar menu visible |
| 4 | Click Logout button | — | Logout clicked |
| 5 | Verify redirected to login page | — | URL matches `https://www.saucedemo.com/` |
