import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { describe } from 'node:test';

test('this is test for multiple pags in same context', async ({ }) => {
const browser = await webkit.launch();
const context = await browser.newContext();
const  page = await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
const newpromise = context.waitForEvent('page');
//above code will open a blank tab 
await page.getByText('OrangeHRM, Inc').click();
//above code will open a page by above link in te tab 
const newpage = await newpromise;
newpage.waitForTimeout(15000);
expect(newpage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');
newpage.waitForTimeout(10000);
const pages = context.pages();
console.log("these are the number of the pages in same context", pages.length);
});



