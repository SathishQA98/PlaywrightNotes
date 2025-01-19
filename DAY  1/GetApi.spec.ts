import { chromium, test } from "playwright/test"


test('Browser Invocation', async()=>{

    //Pre condition

    //Browser Init
    const _browser = await chromium.launch();
    //New page
    const _page = await _browser.newPage();
    //URL
    await _page.goto('https://letcode.in/test');

    //get API

    //Best Practice to Find element
    // 1. Any Default APIs 
    // 2. Locator Based API

    //1. getByRole
    var firstAndLastNameTextBox = _page.getByRole('textbox', {name: 'Enter first & last name'}); // 2 parameter => 1. Role, 2. {name: of Role}
    await firstAndLastNameTextBox.fill('sample Text');
    
    await _page.getByRole('button', {name: 'Goto Home'}).click();

    await _page.getByRole('checkbox', {name: ' Remember me '}).check();

    //2. getByPlaceholder
    var _nameTextBox = _page.getByPlaceholder('Enter first & last name'); // 1. parameter => Textbox Name or PlaceholderText
    await _nameTextBox.fill('fkjbvsdfjc');

    //3. getByTestId
    await _page.getByTestId('frstName').click(); // 1 parameter => data-testId or testId

    //4. getByTitle
    var _textbox = await _page.getByTitle('Issues count');
    await _textbox.fill('rekfgjbreiu');

    //5. getByText
    await _page.getByText('Sign Up').click();

    //6. getByAltText
    await _page.getByAltText('Playwright logo').click();

    //7. getAttribute
    await _page.getAttribute('locator', 'class'); //2 para 1. tag, 2. attributeName
    await _page.locator("locator").getAttribute('AttributeName');

    //8. Locate element by locator
    await _page.locator('#home'); //id, class, css-selector, Xpath 
    await _page.locator('.home');
    await _page.locator('button#home');
    await _page.locator("//tag[@attribute='value']");

    await _page.locator("#commonLocator").nth(1).click() // nth starts from 0

    //Post conidition
    await _page.close();
    await _browser.close();
});

