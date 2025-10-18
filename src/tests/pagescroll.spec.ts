import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test("testing scroll bar", async ({ page })=> {

await page.goto('https://testautomationpractice.blogspot.com/');
await page.evaluate(() => window.scrollBy(0,1200));
await page.pause();

})











