import { chromium, test } from "playwright/test";

test('How to Download', async()=>{
    const browser = await chromium.launch({slowMo: 3000});
    const page = await browser.newPage();
    await page.goto('https://letcode.in/file');

    //Download - not typically managed by playwright
    //await page.locator("//span[text()='Download']").click();

    //1. Download and keep under specific location

        //1. listener
        const downloadPromise = page.waitForEvent('download');

        //2. trigger
        await page.locator("a#xls").click();

    //2. Seggregate Download from Download Promise
    const download = await downloadPromise;

    await download.saveAs("/path/suggestedName" + download.suggestedFilename()); //2 parameter => 1. path(/) 2. Download+suggestfileName(), Provide / at the end of the path otherwise it wont save with in the folder and enter suggested name after /
    
    await page.waitForTimeout(5000);
});