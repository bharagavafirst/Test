import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test('this is a drop down test', async ({ page}) => {
   await page.goto('https://testautomationpractice.blogspot.com/');
   //create dialog handler first
   page.on('dialog', async dialog=>{
   expect(dialog.type()).toContain('prompt');
   expect(dialog.message()).toContain('Please enter your name:');
   expect(dialog.defaultValue()).toContain('Harry Potter');
   await dialog.accept('john');
   
   
   
   })
   
   //click a alert dialog
   await page.locator('#promptBtn').click();
   


});



