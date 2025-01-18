import { chromium, firefox, test, webkit } from "playwright/test";

    //A browser context is an isolated environment that behaves like an individual browser instance
    //It wont save cache cookies
    //If you wanted to do something with browser, one should use browserContext to customize. Etc viewport, locale, Timezone, etc

test('Playwright Browser Config', async()=>{

    var browser = await chromium.launch(); 

    var context = await browser.newContext({viewport: {height: 1280, width: 720}});
    
    var context = await browser.newContext({geolocation: { latitude: 37.7749, longitude: -122.4194 }});
    
    var context = await browser.newContext({viewport: {height: 1280, width: 720}});
    await context.grantPermissions(['geolocation'], {origin: 'URL'});

    var context = await browser.newContext({locale: 'en-US'}); //en-US, fr-CA, de-DE

    var context = await browser.newContext({timezoneId: 'America/New_York'}); //Europe/London

    var context = await browser.newContext({colorScheme: 'dark'});

    //var context = await browser.newContext({ httpCredentials: { username: 'user', password: 'pass' } }); //what is this?

    var page = await context.newPage();

    await page.goto('https://www.saucedemo.com/v1/');

    await page.close();

});