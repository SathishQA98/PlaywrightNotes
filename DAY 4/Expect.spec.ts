import { chromium, expect, test } from "playwright/test";

test('How to Expect in Playwright', async()=>{

    var expectedValue = true;
    var expectedUrlValue = "https://letcode.in/edit";

    // Expect can be used for Page and Element (UI)
    // Expect is used to validate the values
    // Ex: validate url, compare values etc...
    // to use expect we need to import 'expect' library
    // You should use toBe() or to() or toHave() api's
    // expect is more of boolean or comparision verification

    // var object = new Class();


    var browser = await chromium.launch({slowMo: 3000});
    var page = await browser.newPage();
    await page.goto('https://letcode.in/edit');

    //Template
    //await expect().to() or toBe() or toHave();

    //var actualValue = await page.innerText("#ibec"); //true
    // var result = 3 + 'sathish';

    // //Element
    // // var placholderText = await page.getByPlaceholder('placeholderName'); //Enter User Name
    //expect(actualValue).toBe(expectedValue); //1 === 1 , not 1 === Number;
    // // expect(placholderText).not.toBe('User Name');

    // expect(0.3+ 0.3).toBeCloseTo(0.6) //0.3+ 0.3 => 0.6 - 1 => 0.4 
    // expect(actualValue).toBeDefined()

    // var isTexboxVisible = await page.locator('#ieubi').isVisible(); //expected value is false
    // expect(isTexboxVisible).toBeFalsy();
    // expect(42).toBeGreaterThan(10); //42>10
    // expect(42).toBeGreaterThanOrEqual(45); //45>15 or 45 ==15 | 45 > 50 or 45 ==50 | 45>45 or 45 == 45
    // expect(42).toBeLessThan(100); 42<100
    // expect(50).toBeLessThanOrEqual(50); // 50<100 or 50 == 100 50< 50 or 50 == 50

    // //expect().toBeInstanceOf();

    // expect(result).toBeNaN()

    // expect(firstName).toBeNull(); //null what if not null

    // expect(firstName).toBeUndefined();

    //expect(firstName).toBeTruthy()

    // if(isTexboxVisible != false){
    //     //assert
    // }

    //Page
    // await expect(page).toHaveTitle('Interact with Input fields');
    // await expect(page).toHaveURL(expectedUrlValue); //failed

    
    // await expect(page).not.toHaveTitle('Interact with Input field');
    // await expect(page).not.toHaveURL('https://letcode.in/edit1');


    var firstName = 'Sathish Perumal';
    console.log(firstName.length);
    

    // var names = ['sathish', 'madhavi', 'perumal']

    // expect(firstName).toContain('Sathish');
    // expect(firstName).toContain('Sathish');
    // expect(firstName).toContain('Sathish');

    // for(var i=0; i<= names.length; i++){
        
    // }

    //not 1 === Number;
    
    //expect(names).toContainEqual('john');

    //var a = 10;
    //expect(a).toBe(10);
    // expect(a).toBe(number);
    // expect(a).not.toBe(const);

    // var a = 10;
    // var b = 10;

    //reference, equality

    //expect(a).toBe(10); //equality, verify single value
    //expect(a).toEqual(b); //deep equality, used to verify two values, a is number b is also, a=10, b=12
    //expect(true).toBe();

    //expect(firstName).toHaveLength(15); //length of String, array or any other

    expect(firstName).toMatch(/(Sathish Perumal)/g);

    var a = 15;
    if( a != 10){
        //assert.fail("a is not equal to 10");
    }

    // expect(firstName).toThrow('a is not equal to 10');
    // expect(firstName).toThrowError();

    const element =  page.locator('#fullname'); //enter first name
    await expect(element).toHaveAttribute('placeholder', 'Enter first & last name');
    await expect(element).toHaveAccessibleName('Enter first & last name');
    await expect(element).not.toHaveClass('input is-focused');


    await expect(element).toHaveCSS('CssPropertyName', 'CssPropertyValue');
    await expect(element).toHaveValue('84579845');//regex or pass expected value

    //await expect(element).toHaveScreenshot();

    //assert vs expect












})