import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('I launch the browser', async () => {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.google.com');
});

When('I search for {string}', async (searchTerm: string) => {
  await page.fill('[name="q"]', searchTerm);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(2000); // wait for results
});

Then('I should see results related to {string}', async (searchTerm: string) => {
  const content = await page.content();
  expect(content).toContain(searchTerm);
  await browser.close();
});