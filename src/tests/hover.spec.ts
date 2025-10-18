import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { text } from 'stream/consumers';
import { __await } from 'tslib';

test("right click using playwright", async ({ page })=> {
await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  await page.click('text=right click me', { button: 'right' });
  // Assert that context menu appears
  const contextMenu = page.locator('.context-menu-list');
  await expect(contextMenu).toBeVisible();

await page.waitForTimeout(4000);

})
