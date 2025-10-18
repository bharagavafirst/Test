import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
import { Browser} from '@playwright/test';
import Promise from 'any-promise';
import { constants } from 'buffer';
import { ExecException, ExecFileOptions, ExecOptions } from 'child_process';
import { describe } from 'node:test';
import path from 'path';
import { __await } from 'tslib';

test('this is keyboard cut paste actions' ,  async ({ page }) =>{

    await page.goto('https://gotranscript.com/text-compare');
    await page.locator('[name="text1"]').fill('this is a automation script');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);
    
} )