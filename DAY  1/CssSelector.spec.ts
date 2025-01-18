import { chromium, test } from "playwright/test";

test('How to Css Selector', async()=>{

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://letcode.in/edit');

    //loctor API or any direct apo click, fill

    //1. Id, Class
    var textBox =  page.locator("#fullName"); //id #
    await textBox.fill('John Doe');

    var textBox =  page.locator(".className"); //class .
    await textBox.fill('John Doe');

    //2. only tag is not a best practice

    // 3. How to Tag and id and class only
    // tag.className tag#id

    await page.click("input#fullName");
    await page.click("input.fullName");

    // 4. How to Tag and other attributes
    // //tagName[@atribute='value'] - Xpath
    //tagName[attribute='value'] - css

    await page.locator("input[placeholder='Enter first & last name']").fill("Name");

    // 5. chaining method
    // tagName[attr1 = 'value1'][attr2='value2'] //label[for='home'][class='label']
    var textbox1 = page.locator("button[id='home'][class='button is-link']");
    console.log(await textbox1.isVisible());

    //div[class='columns is-multiline'] > div[class='column is-7-desktop is-8-tablet'] >div[] > div[] > div[]

    // 6. first and last child
    await page.locator("div[class='columns is-multiline'] > div:first-child").click();
    await page.click("div[class='columns is-multiline'] > div:last-child");

    //7. combination of CSS Selector
    //div[class='card']:first-child>div.card-content>div:first-child>label[for=home]






});