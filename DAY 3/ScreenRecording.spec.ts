import { chromium, test } from "playwright/test";


test('Screen Recording', async()=>{

    const _browser = await chromium.launch({slowMo: 5000}); 
    const _context = await _browser.newContext({
        recordVideo:{
            dir: 'folder path',
            size: {width: 1280, height: 720},
        },
    }); //browser == context

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

    await _browser.close();

});