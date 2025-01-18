import { chromium, test } from "playwright/test";


test('Browser Context Basic Concepts', async()=>{

    const _browser = await chromium.launch({slowMo: 5000}); 
    const _context = await _browser.newContext(); //browser == context

    //1. How we can create multiple pages woth in single browser instance
    const _page1 = await _context.newPage();
    const _page2 = await _context.newPage();
    const _page3 = await _context.newPage();

    // You can create multiple pages with in context or browser
    // const page4= await _browser.newPage();
    // const page5 = await _browser.newPage();

    //2. Different navigation using different pages
    await _page1.goto('https://letcode.in/test');
    await _page2.goto('https://www.leafground.com/dashboard.xhtml');
    await _page3.goto('https://www.saucedemo.com/v1/');

    //3. Page count
    const _totalPages =  _context.pages(); //[_page3, _page2, _page1]
    console.log('_totalPages: ', _totalPages.length);

    const page1 = _totalPages[0].url();
    const page2 = _totalPages[1].url();
    const page3 = _totalPages[2].url();
    

    console.log('Pages: ', page1, page2, page3);
    
    await _page1.waitForTimeout(6000);

    await _browser.close();
});

test('How to 1 Parent and 1 Child window', async()=>{

    // Scenario
    // 1. nav to https://letcode.in/windows [patent] - done
    // 2. click on button - done
    // 3. Opens New page [Child Window] - important - done [navigation happend]
    // 4. Child Window : interaction - important 
        // 1. Click on Sign up button and basic interaction
    // 5. Switch back to Parent window - important
    // 6. Paremt Window : Interaction
        // 1. Click on Log in button and basic interaction

    var _userEmail = 'test@test.com';
    var _userPassword = 'test@12345';

    const _browser = await chromium.launch({slowMo: 5000}); 
    const _context = await _browser.newContext(); //browser == context

    const _parentWindow = await _context.newPage(); // is equal to page

    await _parentWindow.goto('https://letcode.in/windows');

    //1. Event /Listener 
    const _pagePromise = _context.waitForEvent('page');
    
    //2. Trigger
    await _parentWindow.locator('button#home').click();

    //Seggregate page from promise
    const _childWindow = await _pagePromise; // is equal to page

    //Child page interaction
    await _childWindow.getByRole('link', {name: 'Sign up'}).click();

    // await _childWindow.reload();

    // await _childWindow.getByPlaceholder('Enter your name').fill('Sathish Perumal');
    // await _childWindow.getByPlaceholder('Enter valid email address').fill(_userEmail);
    // await _childWindow.getByPlaceholder('Enter your password').fill(_userPassword);
    // await _childWindow.click('#agree');
    // await _childWindow.getByRole('button', {name: 'SIGN UP'}).click();
    //console.log('signup URL:',  _childWindow.url());

    //How to switch back to Paerent
    await _parentWindow.bringToFront();

    //Parent page interaction
    await _parentWindow.getByRole('link', {name: 'Log in'}).click();

    await _parentWindow.getByPlaceholder('Enter registered email').fill(_userEmail);
    await _parentWindow.getByPlaceholder('Enter password').fill(_userPassword);
    await _parentWindow.getByRole('button', {name: 'LOGIN'}).click();

    await _parentWindow.waitForTimeout(5000);
    await _childWindow.close();
    await _parentWindow.waitForTimeout(5000);
    await _parentWindow.close();
    

    // await _context.close();

    // or 

    // await _browser.close();
});

test('How to 1 Parent and more than 1 child Windows', async()=>{

    const _browser = await chromium.launch({slowMo: 5000}); 
    const _context = await _browser.newContext(); //browser == context

    const _windowsPage = await _context.newPage();
    await _windowsPage.goto('https://letcode.in/windows');

    await _windowsPage.getByRole('button', {name: 'Muiltiple windows'}).click();

    var activePages =  _context.pages();
    //var _windowsPage =  activePages[0].url();
    // var _alertPage =  activePages[1].url();
    // var _dropdownsPage =  activePages[2].url();

    const [_alertPage, _dropdownsPage] = activePages.slice(1);

    //Default switch back to Dropdowns page
    await _dropdownsPage.selectOption('select#fruits', {label: 'Apple'});
    await _dropdownsPage.waitForTimeout(3000);

    //Switch to Windows page
    await _windowsPage.bringToFront(); //bringToFrom == switch
    await _windowsPage.getByRole('link', {name: 'Log in'}).click();

    //Switch to Alert Page
    await _alertPage.bringToFront();
    
    //1. Event / Listener
    _alertPage.on('dialog', async Dialog =>{

        Dialog.accept();
    });

    //2. Trigger
    await _alertPage.getByRole('button', {name: 'Simple Alert'}).click();

    //Switch back to Windows
    await _windowsPage.bringToFront();
    
    await _browser.close();

});



