import test from "playwright/test";

test('What is Page', async({page})=>{

    // Page is a container contains all the APIs wrt to Playwright
    // Page is isolated and incognito tab
    // Page can be used along with await keyword
    // In Playwright, await is used for handling asynchronous operations
    // Await make sure the availability of element state to be clickable, Editable, Visible before the action
    // paused the execution until the browser launched, again pauses until page created, pauses until page navigation, pauses until click operation completed
    // await provides default 30 sec optional wait for element state. 
    // using . operator with page one can populate playwright APIs

    await page.goto('');
    await page.goBack();
    await page.goForward();
    await page.reload();
    await  page.close();
    //await page.allApis

});