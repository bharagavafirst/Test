import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test("Test DatePicker on page", async ({ page })=> {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator('#datepicker').scrollIntoViewIfNeeded();
await page.locator('#datepicker').fill('2025-10-18');
await page.locator('#datepicker').press('Enter');
await page.waitForTimeout(5000);

})
