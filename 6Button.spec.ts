import assert from 'assert';
import {chromium, firefox, webkit} from 'playwright'; //Import test and chromium modules from pw library
import test from  'playwright/test';


test('Locate the Button', async()=>{

    var browser = await chromium.launch({slowMo: 2000});
    var page = await browser.newPage();
    await page.goto('https://www.leafground.com/button.xhtml');

    // Types of HTML buttons
    // 1. <button>, 2. <Input type=submit>


    // When it a button one will do click or dbl click action
    // Bounding box
    // Count

    //Button Handling
    //1. getByRole [Aria-label, Aria-labelledby or associated tag <button> <span> click </span> </button>, <button><strong>Start</strong> Now</button> => await page.getByRole('button', { name: 'Start Now' }) or any attribute value with in button tag]
    //2. locator
    //3. getByTestId
    //4. getByTitle
    //5. getByAltText
    //6. getByText

    //Best practice => getByRole

    //1. Click action
    //single click
    await page.getByRole('button', {name: 'buttonName'}).click();

    var buttonName =  page.getByRole('button', {name: 'buttonName'});
    await buttonName.click();

    //double click
    await page.getByRole('button', {name: 'buttonName'}).dblclick();

    //Other Apis to locate button
    var buttonName = page.getByTestId('TestIdValue');
    await buttonName.click();

    var buttonName =  page.getByTitle('TitleValue');
    await buttonName.click();

    var buttonName =  page.getByAltText('AltValue');
    await buttonName.click();

    //2. Bounding box event
    //Button Height, Width, Positions [X and y Axis]
    var _buttonProperties = await page.getByRole('button', {name: 'Image'}).boundingBox();

    var _buttonHeight =  _buttonProperties?.height;
    var _buttonWidth =  _buttonProperties?.width;

    var _buttonXAxis = _buttonProperties?.x;
    var _buttonYAxis =  _buttonProperties?.y;

    console.log('Button Height:', _buttonHeight);
    console.log('Button Width:', _buttonWidth);
    console.log('Button X:', _buttonXAxis);
    console.log('Button Y:', _buttonYAxis);

    //Button color [or Retive the Attribute value of any with in HTML]
    var _buttonColor = await page.locator("(//span[text()='Success'])[1]").getAttribute('background-color');
    console.log('Button Color:', _buttonColor);

    //Another way of doing button Click Direct API
    await page.click("#ID or .class or Xpath");

    //Alternative 2. Locator
    await page.locator("locator").click();  //can be ID or Class Or Xpath
    await page.locator("locator").dblclick();  //can be ID or Class Or Xpath

    //Count
    var _buttonCount = await page.locator('//button').count();
    console.log(_buttonCount);
    
    //Button Validation
    // Make sure by checking Enabled, Disabled, Visible. if enabled it can be clickable and no API called clickable
    var _isSubmitButtonEnabled  = await page.getByRole('button', {name: 'buttonName'}).isEnabled();
    var _isSubmitButtonVisible  = await page.getByRole('button', {name: 'buttonName'}).isVisible();
    if(_isSubmitButtonEnabled && _isSubmitButtonVisible){
        await page.getByRole('button', {name: 'buttonName'}).click();
    }
    else{
        assert.fail();
    }

    await page.close();

});