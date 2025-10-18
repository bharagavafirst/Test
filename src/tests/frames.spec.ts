import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { ExecException, ExecFileOptions, ExecOptions } from 'child_process';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test("select frames playwright", async ({ page })=> {
await page.goto('/home');
//
//const numberframes = await page.frames();
//console.log('available number of frames',numberframes.length);
//await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']").fill('this is a test');
//}
//catch(error: any)
//{
//await console.log('the error is occured', error.message);
//}
//finally
//{
 //   await console.log('inside finally block');
//}

//await page.pause();
})











