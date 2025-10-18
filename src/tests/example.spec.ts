import { test, expect, Dialog, Frame, FrameLocator, Locator } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { describe } from 'node:test';
import path from 'path';
import { env, exitCode } from 'process';
import { text } from 'stream/consumers';
import { __await } from 'tslib';
import { contact }  from '..//pages/contacts.po.ts';
import  cdata   from '..//data/contacts.json';
const cont = cdata

for(const data of cdata)
{
test('this is simple test page', async ({  page }) => {
// const Contact = new contact(page);/
// test.setTimeout(50000);
// await Contact.gotourl();
//test.setTimeout(30000);
//await Contact.dynamicLocatorAccess();

});

}
