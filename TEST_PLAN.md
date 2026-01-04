# TEST PLAN
## Login & Checkout Functionality

**Application:** SauceDemo  
🔗 https://www.saucedemo.com

**Automation Tool:** Playwright + TypeScript  
**Test Level:** Component + End-to-End  
**Author:** Bogdan Mykhailov  
**Version:** 1.0

---

## 1. Test Objectives

The goal of this test plan is to verify that:

- Login functionality works correctly for valid and invalid users
- UI components on Login and Inventory pages are displayed correctly
- A user can successfully complete the full checkout flow
- System correctly handles negative authentication scenarios
- Logout functionality returns the user to the login page

---
## 2. Test Scope

#### Login
- Login form UI validation
- Form field interaction (fill, clear)
- Login with valid credentials
- Login with locked-out user
- Error handling for empty credentials
- Logout flow

#### Inventory
- Inventory item UI elements
- Inventory item data correctness
- Add item to cart

#### Checkout
- Cart page validation
- Checkout form submission
- Checkout overview validation
- Total price calculation
- Successful order completion

---

## 3. Test Types & Levels

| Test Level | Description |
|----------|------------|
| Component | Validation of isolated UI components |
| E2E | Full user flow from login to checkout completion |

---
## 4. Test Environment

| Parameter | Value                                                   |
|---------|---------------------------------------------------------|
| OS | Windows 11                                              |
| Browser | Chrome Version 143.0.7499.170 (Official Build) (64-bit) |
| Base URL | https://www.saucedemo.com                               |
| Environment | Test                                                    |
| Test Data | Static + Environment variables                          |

---
## 5. Test Data

### User Credentials
- `standard_user`
- `locked_out_user`

### Password
- Stored in `.env`

### Checkout User Data
- First Name
- Last Name
- Postal Code

---

## 6. Component Test Coverage

### Login Form Component

| TC ID | Description | Expected Result |
|-----|------------|----------------|
| TC001 | Fill login form | Fields accept input |
| TC002 | Submit empty form | Error message shown |
| TC003 | Credentials block | Block and title visible |
| TC004 | Password block | Block and title visible |

---

### Inventory Item Component

| TC ID | Description | Expected Result |
|-----|------------|----------------|
| TC005 | Inventory item UI | Image, title, description, price, button visible and correct |

---

## 7. End-to-End Test Coverage

### Checkout Flow

| TC ID | Description | Expected Result |
|-----|------------|----------------|
| TC006 | Complete checkout | Order completed successfully |

**Flow:**
1. Login
2. Inventory page validation
3. Add item to cart
4. Cart validation
5. Checkout form submission
6. Overview validation
7. Order completion

---

### Negative Authentication

| TC ID | Description | Expected Result |
|-----|------------|----------------|
| TC007 | Locked user login | Error message shown, no redirect |

---

### Logout

| TC ID | Description | Expected Result |
|-----|------------|----------------|
| TC008 | Logout | User redirected to login page |

---
## 8. Entry & Exit Criteria

### Entry Criteria
- Application is available
- Test data is prepared
- Environment variables configured

### Exit Criteria
- All critical tests executed
- No blocker defects open
- Test report generated

---
