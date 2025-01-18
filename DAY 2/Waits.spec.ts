import { chromium, test } from "playwright/test";


test('Wait concepts', async()=>{

    const _browser = await chromium.launch({slowMo: 5000}); 
    const _page = await _browser.newPage();

    await _page.goto('https://letcode.in/');

    //Playwright Resolves Element state which is TobeVisible, TobeAttached, Or Network and Dom Related lags, And resolve flaky testing

    //Implicity - Automatic Wait - Ex: await => It ensure the action to be completed, until it freeze the execution for 30s by default
    //Explicit - Manual Wait - Ex: waitForSelector() wrt to element visible and attached to DOM
    
    //Wait for URL to match the parameter
    await _page.waitForURL('**\/target.html');

    //Browser Related Waits
    await _page.waitForLoadState('load', {timeout: 40000}); //30 sec default, timeout is optional, but ideal to wait 30 sec and not more
    await _page.waitForLoadState('domcontentloaded');
    await _page.waitForLoadState('networkidle');

    // Only for Debug
    await _page.waitForTimeout(3000); // do not use in production //1 sec = 1000ms // same as Thread.sleep() 

    //Conditional wait
    await _page.waitForSelector('text=New Courses!'); //class, id, xpath, cssSelectors only
    await _page.waitForSelector('text=New Course!', {state: 'attached', timeout: 30000, strict: true}); 
    await _page.waitForSelector('text=New Course!', {state: 'visible'}); 
    await _page.waitForSelector('#iucbeuy'); 
   
    await _page.close();

});