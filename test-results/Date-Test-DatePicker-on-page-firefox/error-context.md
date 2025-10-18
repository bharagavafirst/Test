# Test info

- Name: Test DatePicker on page
- Location: C:\Users\PK Bhargav\playr\NewPlaywrightKB\src\tests\Date.spec.ts:9:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

    at C:\Users\PK Bhargav\playr\NewPlaywrightKB\src\tests\Date.spec.ts:10:12
```

# Test source

```ts
   1 | import { test, expect, Dialog, Frame, FrameLocator, Locator, webkit } from '@playwright/test';
   2 | import { Browser} from '@playwright/test';
   3 | import Promise from 'any-promise';
   4 | import { constants } from 'buffer';
   5 | import { describe } from 'node:test';
   6 | import path from 'path';
   7 | import { __await } from 'tslib';
   8 |
   9 | test("Test DatePicker on page", async ({ page })=> {
> 10 | await page.goto('https://testautomationpractice.blogspot.com/');
     |            ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11 | await page.locator('#datepicker').scrollIntoViewIfNeeded();
  12 | await page.locator('#datepicker').fill('2025-10-18');
  13 | await page.locator('#datepicker').press('Enter');
  14 | await page.waitForTimeout(5000);
  15 |
  16 | })
  17 |
```