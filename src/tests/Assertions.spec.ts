import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test("this is testing hard and soft assertion", async ({ page })=> {

await page.goto('https://www.demoblaze.com/');
await expect.soft(page).toHaveTitle('STORE123');
await expect.soft(page).toHaveURL('https://www.demoblaze.com/');

})











