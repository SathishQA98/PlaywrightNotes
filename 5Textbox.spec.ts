import {chromium} from 'playwright'; //Import test and chromium modules from pw library
import test from  'playwright/test';
import assert from 'assert';
import { log } from 'console';

test('Locate and Fill the Textboxes', async()=>{
    const browser = await chromium.launch({ headless: false});
    const page = await browser.newPage();
    
    await page.goto('https://leafground.com/dashboard.xhtml');

    // Things to do with Textbox - Method
    // 1. inputValue() to Retrive Textbox value 
    // 2. clear() to Clear TextBox Input value
    // 3. fill() to set Textbox value

    //First Find the Textbox and then Interact with it. 

    //Best practice to Locate TextBox
    // 1. Placeholder
    // 2. getByRole('textbox') using accessible name or associated
    // 3. locator [ID, class or CssSelector or XPath]

    
    //Find Textbox using various APIs
    page.getByPlaceholder("Babu Manickam"); // 1 parameter => placeholder Text
    page.getByRole('textbox', {name: 'placeholderName'}); //1 param => accessible name [Label, labelledBy, PlaceholderText]
    page.getByTestId('testIdValue');
    page.getByTitle('titleValue');
    page.locator('Id or Class or Css Selector or XPath');

    // Interactions with Playwright

    // There are 2 Methods to interact with any elements
    // 1. API return physical element 
    // 2. Chaining method

    // 1. Set Textbox value  
    // fill() api will do 2 things clear and set simultaneousely 
    // using fill() api one can clear the textbox value [if exists] and then set the textbox value

    //API return promise or physical element
    var userNameTextbox =  page.getByPlaceholder("Babu Manickam"); //use all find methods
    await userNameTextbox.fill('Pass Textbox value');

    //Direct way
    await page.fill("Id, class, cssSelector, Xpath", "Textbox Value") // 2 param => 1. Locator, 2. Textbox value

    // 2. inputValue() - retrive the Textbox value
    // locate the textbox using any method from above and use above api to retrive textbox value
    var textboxValue = await userNameTextbox.inputValue(); // let retrun the physical element and do inputValue()
    console.log("textboxValue: ", textboxValue);

    // 3. Clear the existing Textbox value
    await userNameTextbox.clear(); // or let return the physical element and do clear
    
});

test('Intract with TextBoxes', async()=>{

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Validation => Ensure the element state
    // When it comes to Textbox it make sense checking Visible, Editable, Disabled. 
    // Is means it will return boolean value. 

    // Is textbox Visible?
    var _isTextBoxVisible = await page.locator("#id").isVisible(); // if it returns true no worry but if false as we used ! if block of code will be executed
    console.log(_isTextBoxVisible);
    
    // Is textbox editable?
    var _isTextBoxEditable = await page.locator("#id").isEditable();
    console.log(_isTextBoxEditable);

    // Is textbox disabled?
    var _isTextBoxDisabled = await page.locator("#id").isDisabled();
    console.log(_isTextBoxDisabled);

    //Validation assertion
    var _isTextBoxVisible = await page.locator("#id").isVisible(); // if it returns true no worry but if false as we used ! if block of code will be executed
    if(!_isTextBoxVisible){ // (_isTextBoxVisible != true)
        assert.fail('Textbox is not Visible');
    }

});
