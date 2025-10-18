import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import { __await } from 'tslib';

test('this is a drop down test', async ({ page}) => {
   await page.goto('https://testautomationpractice.blogspot.com/');
   //const drpNames =  await page.locator('//html//body//main//div//div//div//div//div[1]//section//section[2]//section[1]//div//section//div//div//div//input');
  // await drpNames.scrollIntoViewIfNeeded();
   await page.waitForSelector('#country');
   await page.locator('#country').click();
   const drpnumber = await page.$$('#country option')
   await console.log(drpnumber.length);
   for(let name of drpnumber)
   {
   let value1 = await name.textContent();
   if(value1 === 'Japan')
   {
    await name.click();
    await page.screenshot({path:'F:\\screenshot5.png'});
       }
   
      }    
 await page.waitForTimeout(5000);
   //await page.pause();
 
  // await drpNames.scrollIntoViewIfNeeded();
 //  await  console.log("number of elements", drpNames.length);
  // expect(drpNames.length).toBe(7);
 //  await page.selectOption('#colors', ['Red','Green','Blue']);
 //  const drpcontent = await page.locator('#colors').allTextContents();
 //  await expect(drpcontent.includes('Blue')).toBeTruthy;
  
});



