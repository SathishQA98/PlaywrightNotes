import assert from "assert";
import { chromium } from "playwright";
import test from "playwright/test";

test('Interact with Links', async()=>{

    //Condition: 1. specified using <a>, <a> should nave name and include href, href attributute should have some value 
    
    const _browser = await chromium.launch({slowMo: 3000});
    const _page = await _browser.newPage();
    await _page.goto('https://www.leafground.com/link.xhtml');//implict


    //Actions
    // 1. click [Right, Left, Middle]
    // 2. Get Count of Links
    // 3. Get a Link with out Navigation
    // 4. Verify the Link isValid or Not [using href]

    //Find element 
    // use getByRole
    _page.getByRole('link', {name: 'Find the URL without clicking me.'});

    //Actions
    // 1. click
    await _page.getByRole('link', {name: 'Find the URL without clicking me.'}).click({button: 'middle'});

    // 2. Get
    var _linkCount = await _page.locator('//a').count();
    console.log('_linkCount: ', _linkCount);

    //explicit 
    // 3. get Link w/o click
    var _targetUrl = await _page.getByRole('link', {name: 'Find the URL without clicking me.' }).getAttribute('href');
    console.log('_targetUrl: ', _targetUrl);


    //4. Hyperlink Validation
    var _targetUrlValue = await _page.getByRole('link', {name: 'Find the URL without clicking me.'}).getAttribute('href');
    if(_targetUrlValue == ''){
        assert.fail('Link is does not have hyperlink');
    }

    await _page.close();
});