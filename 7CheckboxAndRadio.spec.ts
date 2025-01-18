import { chromium, test } from "playwright/test";
import assert from 'assert';

test('Interact with Checkbox', async()=>{

    const browser = await chromium.launch({slowMo: 3000});
    const page = await browser.newPage();

    await page.goto('https://letcode.in/radio');

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
    var _remembermeCheckBox =  page.getByRole('checkbox', {name: ' Remember me '});
    await _remembermeCheckBox.uncheck();

    //check
    var _acceptCheckbox =  page.getByRole('checkbox', {name: ' I agree to the '});
    await _acceptCheckbox.check(); // check the checkbox value

// getBYRole - Radio
    await page.getByRole('radio', {name: ' Foo '}).click();


//2. Locator - Checkbox
    await page.locator("//input[@id='yes']").check(); //uncheck

//2. Locator - Radio
    await page.locator("//input[@id='yes']").click();

//getByLable - Checkbox
    await page.getByLabel(' Going ', {exact: true}).check();

//click - directly

    await page.click('#one');
    await page.click('#two');

//check - directly
    await page.check('#notG');


//Verification and Validation of Check box

var _rememberMeCheckBox =  page.getByRole('checkbox', {name: ' Remember me '});

if(await _rememberMeCheckBox.isChecked() && await _rememberMeCheckBox.isVisible() && await _rememberMeCheckBox.isEditable()){
    assert.fail('Checkbox is already checked');
}
else{
    await _rememberMeCheckBox.check();
}

//check() unCheck();

await page.getByRole('checkbox', {name: ' Remember me '}).check();

//Scenario: You need to check multiple check box

    const CheckBoxLabels = ['Java', 'Python', 'Javascript', 'C-Sharp', 'Others']; //Can be Text, ID, Label, ClassName

    for(let i=0; i<=CheckBoxLabels.length; i++){
        console.log(CheckBoxLabels[i]);

        var _checkBoxLabel = page.locator("//label[text()=" + CheckBoxLabels[i] + "]");
        await _checkBoxLabel.check();
    }

await page.close();

});



