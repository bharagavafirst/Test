import { expect, type Locator, type Page ,test, webkit } from '@playwright/test';
import { Browser,BrowserContext } from '@playwright/test';

export  class contact {
  readonly drpid = '#demo155-country-picker';
  readonly drpText = '//html//body//div[5]//div[3]//div[2]//div//div[1]//label//span//input'
  readonly drptextEnter = '//html//body//div[5]//div[3]//div[2]//div//div[2]//div//div//div[2]//div//div[1]//div//div[41]//div//div'
  readonly password =  "Password";
  readonly loginbtn = "Login";
  readonly url = "";
  readonly  formname = "#name";

constructor(private page: Page)
{

}

async getformname(firstname:string)
{
  return this.page.locator(this.formname).fill(firstname);
}

async dynamicLocatorAccess() 
{
//below code is to handle multiple tabs in same context
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

  





}

  async gotourl() 
  {
    await this.page.goto("https://testautomationpractice.blogspot.com/");
  }

  async fillusernmae() {
   await this.page.locator(this.drpid).scrollIntoViewIfNeeded();
   await this.page.locator(this.drpid).click();
  }

  async insertText(InsertText:string) {
    const departure = this.page.locator(this.drpText);
    await departure.clear({timeout:6000});
    await departure.pressSequentially(InsertText,{timeout:2000});
    await this.page.locator(this.drptextEnter).click();
    
  }

}
