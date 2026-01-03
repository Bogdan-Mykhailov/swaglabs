import { test } from '@playwright/test';

export async function testStep(
  name: string,
  cbFunc: () => Promise<void>,
): Promise<void> {
  await test.step(name, async () => {
    await cbFunc();
  });
}
