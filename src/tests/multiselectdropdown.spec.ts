import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import { __await } from 'tslib';

test('this is a drop down test', async ({ page}) => {
   await page.goto('https://testautomationpractice.blogspot.com/');
   const drpNames =  await page.$$('#colors option');
  // await drpNames.scrollIntoViewIfNeeded();
   await  console.log("number of elements", drpNames.length);
   expect(drpNames.length).toBe(7);
   await page.selectOption('#colors', ['Red','Green','Blue']);
   const drpcontent = await page.locator('#colors').allTextContents();
   await expect(drpcontent.includes('Blue')).toBeTruthy;
  
});



