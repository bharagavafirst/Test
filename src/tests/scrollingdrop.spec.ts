import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test("drop down to engter values and select", async ({ page })=> {

await page.goto('https://testautomationpractice.blogspot.com/');
await page.getByPlaceholder('Select an item').click();
 
await page.waitForTimeout(2000);

const dropoptions = await page.locator('//*[@id="dropdown"]/div[8]');
await dropoptions.click();
await page.screenshot({path:'D:\\screen.png'});

})











