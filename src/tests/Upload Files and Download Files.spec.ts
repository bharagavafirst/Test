import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test('this is a drop down test', async ({ page}) => {
   await page.goto('https://www.selenium.dev/downloads/');
   const downloadpromise = page.waitForEvent('download');
   await page.locator('//html//body//div//main//div[3]//div[3]//div//div[2]//p[2]//a').click();
   const downloadme = await downloadpromise;
   await downloadme.saveAs('F:\\Learn playwright' + downloadme.suggestedFilename());
   await page.waitForTimeout(5000);
});



