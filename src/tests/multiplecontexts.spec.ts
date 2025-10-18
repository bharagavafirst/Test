import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { describe } from 'node:test';
import { __await } from 'tslib';

test('this is test for multiple pags in same context', async ({ }) => {
const browser = await webkit.launch();
const context1 = await browser.newContext();
const context2 = await browser.newContext();
const page1 =  await context1.newPage();
const page2 = await context2.newPage();
await page1.goto("https://playwright.dev/docs/browser-contexts");
expect(page1).toHaveURL("https://playwright.dev/docs/browser-contexts");
await page2.goto("https://playwright.dev/docs/next/locators");
expect(page2).toHaveURL("https://playwright.dev/docs/next/locators");
});



