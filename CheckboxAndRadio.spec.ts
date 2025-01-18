import { chromium, test } from "playwright/test";
import assert from 'assert';

test('Interact with Checkbox', async()=>{

    const _browser = await chromium.launch({slowMo: 3000});
    const _page = await _browser.newPage();

    await _page.goto('https://letcode.in/radio');

    // APIs to Find Checkbox
    // 1. getByRole
    // 2. getByLabel
    // 3. locator
    // 4. getByText


    //Interaction to Checkbox
    // 1. check
    // 2. uncheck

    //Interaction to Radio
    // 1. click 

    //Validation with Checkbox
    // 1. isVisble(), isEditable(), isEnabled(), isHidden(), isChecked()



//1. getByRole - check box

    //uncheck
    var _remembermeCheckBox =  _page.getByRole('checkbox', {name: ' Remember me '});
    await _remembermeCheckBox.uncheck();

    //check
    var _acceptCheckbox =  _page.getByRole('checkbox', {name: ' I agree to the '});
    await _acceptCheckbox.check(); // check the checkbox value

// getBYRole - Radio
    await _page.getByRole('radio', {name: ' Foo '}).click();


//2. Locator - Checkbox
    await _page.locator("//input[@id='yes']").check(); //uncheck

//2. Locator - Radio
    await _page.locator("//input[@id='yes']").click();

//getByLable - Checkbox
    await _page.getByLabel(' Going ', {exact: true}).check();

//click - directly

    await _page.click('#one');
    await _page.click('#two');

//check - directly
    await _page.check('#notG');


//Verification and Validation of Check box

var _rememberMeCheckBox =  _page.getByRole('checkbox', {name: ' Remember me '});

if(await _rememberMeCheckBox.isChecked() && await _rememberMeCheckBox.isVisible() && await _rememberMeCheckBox.isEditable()){
    assert.fail('Checkbox is already checked');
}
else{
    await _rememberMeCheckBox.check();
}

//check() unCheck();

await _page.getByRole('checkbox', {name: ' Remember me '}).check();

await _page.close();

});



