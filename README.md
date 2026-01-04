# Automation Framework Architecture

## 1. Architecture Overview

The automation framework is built using **Playwright + TypeScript** and follows:

- Page Object Model (POM)
- Component-based architecture
- Clear separation of concerns
- Readable test steps using custom `testStep` wrapper

---

## 2. Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **ESLint**
- **dotenv**
- **Page Object Model (POM)**

---

## 3. Project Structure

```text
src/
 ├─ fixtures/
 │   └─ web.fixtures.ts
 │
 ├─ pages/
 │   ├─ base/
 │   │   ├─ base.page.ts
 │   │   └─ baseComponent.page.ts
 │   │
 │   ├─ componentPages/
 │   │   ├─ cartItemComponent.page.ts
 │   │   ├─ checkoutFormComponent.page.ts
 │   │   ├─ headerComponent.page.ts
 │   │   ├─ inventoryItemComponent.page.ts
 │   │   ├─ loginCredentialsComponent.page.ts
 │   │   ├─ loginFormComponent.page.ts
 │   │   ├─ sidebarMenuComponent.page.ts
 │   │   └─ summaryComponent.page.ts
 │   │
 │   └─ finalPages/
 │       ├─ cart.page.ts
 │       ├─ checkout.page.ts
 │       ├─ checkoutComplete.page.ts
 │       ├─ checkoutOverview.page.ts
 │       ├─ inventory.page.ts
 │       └─ login.page.ts
 │
 ├─ tests/
 │   ├─ components/
 │   │   ├─ inventoryItemComponent.spec.ts
 │   │   └─ loginFormComponentFlow.spec.ts
 │   │
 │   └─ checkout.spec.ts
 │
 ├─ testStepDefinition/
 │   └─ testStep.ts
 │
 ├─ utils/
 │   └─ helpers.ts
 │
 └─ testData/
     ├─ base.data.ts
     ├─ checkoutCompletePage.data.ts
     ├─ inventoryPage.data.ts
     └─ loginPage.data.ts

```
---

## 4. Test Steps Wrapper

All tests use a custom `testStep` helper:

```ts
await testStep('Step description', async () => {
  // test actions and assertions
});
```

#### Benefits

- Readable test execution logs
- Better reporting
- Clear test flow structure

---

## 5. Test Data Management

All test data is stored separately in the `testData` directory.

### Principles
- No hardcoded values in tests
- Easy maintenance and scalability

### Examples
- User credentials
- UI text constants
- Page titles

---

## 6. How to Run Tests

### Install dependencies
```bash
npm install
```

### Run all tests
```bash
npx playwright test
```

### Run component tests only
```bash
npx playwright test --grep=@component
```

### Run e2e tests only
```bash
npx playwright test --grep=@e2e
```

### Show test report
```bash
npx playwright show-report
```

