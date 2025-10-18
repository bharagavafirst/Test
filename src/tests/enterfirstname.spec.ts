import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';
import { contact }  from '..//pages/contacts.po.ts';
import  cdata   from '..//data/contacts.json';

for(let data of cdata)
test("enter values into textbox", async ({ page })=> {
const Contact = new contact(page);
await Contact.gotourl();
//Data Driven testing 
await Contact.getformname(data.user);
await page.pause();

})











