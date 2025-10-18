import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test('this is a checkboxes and datetimepiker  test', async ({ page}) => {
   
await page.goto('https://testautomationpractice.blogspot.com/');
   //create dialog handler first
   await page.waitForTimeout(5000);
   await page.locator('#sunday').click();
  await expect(page.locator('#sunday')).toBeChecked();
      

//date picker code
   await page.locator('#datepicker').fill('03/15/2025');
   await page.screenshot({path: 'F:\\Learn playwright\\screen1.png'});
   await page.waitForTimeout(5000);



});









