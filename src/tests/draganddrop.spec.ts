import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test("drop down to engter values and select", async ({ page })=> {

await page.goto('https://testautomationpractice.blogspot.com/');
const drag = await page.locator('#draggable');
const dropp = await page.locator('#droppable');
await drag.dragTo(dropp);
await page.screenshot({path:'D:\\screen1.png'});

})











