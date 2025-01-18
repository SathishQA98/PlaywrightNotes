import { chromium, test } from "playwright/test";

test('How to configure the browser', async()=>{

    var browser = await chromium.launch({slowMo: 3000, channel: "msedge"});

    // slomo us Slow motion, its used to slow down the test execution [1 sec = 1000ms] 
    // Browsers: chrome, firefox and webkit
    // Channels: SE - Channels are browsers under lying machines such as: chrome-dev, msedge etc
    // To use channels you need to run the below cli
    // npx playwright install chrome-beta; msedge; chrome-dev; chrome-canary; msedge-beta; msedge-dev; msedge-canary 

    var context = await browser.newContext();
    var page = await context.newPage();

    await page.goto('https://www.saucedemo.com/v1/');

    await page.waitForTimeout(5000);
});