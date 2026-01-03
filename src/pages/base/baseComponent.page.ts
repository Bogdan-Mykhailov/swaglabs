import { Page } from '@playwright/test';

export class BaseComponentPage {
  url: '/';

  constructor(readonly page: Page) { }
}
