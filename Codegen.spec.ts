//1. create a class for codegen
// use cli => npx playwright codegen
// have the url ready 

import { test, expect, chromium } from 'playwright/test';

test('test', async () => {

    const browser = await chromium.launch({slowMo: 3000});
    const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').dblclick();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();


  await page.locator('[data-test="firstName"]').fill('john');

  await page.locator('#last-name').fill('doe');
  
  await page.locator('#postal-code').fill('457985');
  
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();
});