// Test Fixture is a pre defined piece of code, data or content used during the test. 
// Pre defined contents are Browser, Context, Page, TestHooks

import test from "playwright/test";

test('Page Fixture', async({browser})=>{

    var context = await browser.newContext();
    var page = await context.newPage();
    await page.goto('');

});

test('Page Fixture', async({context})=>{

    var page = await context.newPage();
    await page.goto('');

});

test('Page Fixture', async({page})=>{

    await page.goto('');

});

var browser;
var page;

test.describe('Hands On Experience on Test Hooks', async()=>{

    test.beforeAll('Browser init', async()=>{

        browser = await chromium.launch({slowMo: 3000});
   
    })

    test.beforeEach('Create Page', async()=>{

        page = await browser.newPage();

    });

    test.afterEach('Close Oage', async()=>{

        await page.close();

    });

    test.afterAll('Browser Close', async()=>{

        await browser.close();
        
    })

    test('Test case 1', async()=>{

        await page.goto('https://www.leafground.com/dashboard.xhtml');

        var getEmailTextBox = await page.getByPlaceholder('E-mail Address');
        await getEmailTextBox.fill('test@test.com');

        await page.getByPlaceholder('Write your message...').fill("Random Text");
    });

    test('Test Case 2', async()=>{

        await page.goto("https://www.leafground.com/button.xhtml");

        // 1. getByRole - single click
        var _clickButton = await page.getByRole('button', {name: 'Click'});
        await _clickButton.click();
    });

    test.skip('Test Skip', async()=>{

        //This test will be skipped successfully with out error

        await page.goto("https://www.leafground.com/button.xhtml");

        // 1. getByRole - single click
        var _clickButton = await page.getByRole('button', {name: 'Click'});
        await _clickButton.click();

    })

    test.only('Test Only', async()=>{

        //Only this test will be executed among all 4 tests

        await page.goto("https://www.leafground.com/button.xhtml");

        // 1. getByRole - single click
        var _clickButton = await page.getByRole('button', {name: 'Click'});
        await _clickButton.click();

    });

    test.fixme('Test Only', async()=>{

        //This is for tester purpose to indicate this tests need fix or dev need to fix the respective UI code
        //Test will be skipped successfully

        await page.goto("https://www.leafground.com/button.xhtml");

        // 1. getByRole - single click
        var _clickButton = await page.getByRole('button', {name: 'Click'});
        await _clickButton.click();

    });
    
});