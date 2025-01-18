import {chromium} from 'playwright'; //Import test and chromium modules from pw library
import test from  'playwright/test';

test('Alert', async()=>{

    var browser = await chromium.launch({slowMo: 3000});
    var page = await browser.newPage();
    await page.goto('https://www.leafground.com/alert.xhtml;jsessionid=node0kg2t46annx9j1f064qq6zgt797793167.node0');

    // What are the Elements can be handled in Alert: Alert, Popup, Confirm and Prompt
    // As its Alert either you will click on a Button or Text box will bring the prompt
    // Button is very common among the websites

    // Scanrio: On load all the control will be in page only, Once button is clicked then popup comes, all the control will be given to Alert
    // If you click anything outside of Alert will not work
    // since you have not handle the Alert
    // You need to handle the alert using On event, On event provides Alert handles not only alerts, enter  await page.on('suggestions')

    // step - 1: Locate the button and click to bring the Alert
    // step - 2: Handle the Alert => Playwright will intract with alert by default no need to handle it, it will dismissed automatically with playwright you just need to handle the action
    // use on event over page: which means Alert is a browser pages event, browser is nothing but page
    // In selenium one has to navigate to alert or frame or window to handle the events. 
    // Once these events are triggered the control will given to Popup, so once has to navigate to respective event to handle the elements with in it
    // You can handle the Alert with out navigation in playwright using playwright over the page
    // Provide the listener first and then the action 
    // What you can do over the Alert: Accept; Dismiss; Message; Interact with Textbox; Alert Type;


    // 1. Alert - Accept: // Dialog is a parameter which is consider as a Alert, since you are not handling the alert you have to pass some value that will be consider the default Alert 
    
    page.on('dialog', async Dialog => { 

        Dialog.accept(); // Accept the Alert
        
    });
    await page.locator('(//button)[2]').click();
    await page.getByRole('button', {name: 'Show'}).click(); // locate the button by any way 


    // 2. Alert - Dismiss:

    page.on('dialog', async Dialog => { //what is page.on 

        Dialog.dismiss(); // Dismiss the Alert
        
    });
    await page.locator('(//button)[2]').click();


    // 3. Alert - Console message or Alert Text

    page.on('dialog', async Dialog => { 

        var _alertMessage = Dialog.message() // this API will retirve the alert message from Alert
        console.log('_alertMessage', _alertMessage);
        Dialog.accept(); // Accept the Alert
        
    });
    await page.locator('(//button)[1]').click();


    // 4. Type of Alert

    page.on('dialog', async Dialog => { 

        var _alertType = Dialog.type();
        console.log('_alertType:', _alertType);
        
        Dialog.accept(); // Accept the Alert
        
    });
    await page.locator('(//button)[1]').click();

    // 5. Alert and Textbox

    page.on('dialog', async Dialog => { 
        
        Dialog.accept("Hello Playwright"); // Accept the Alert and pass the value pver Text box
        
    });
    await page.locator('(//button)[6]').click();

    //=================//

     // Alert will be differentiate based on Alert Text
     page.on('dialog', Dialog =>{
        if(Dialog.message() == 'I am simple alert.'){
            Dialog.accept();
        }
        else if(Dialog.message() == 'Did you call me?'){
            Dialog.dismiss();
        }
        else{
            console.log("Error in Dialog Box");
        }
    });

    //await page.getByRole('button', {name: 'ButtonName'});
    await page.locator("(//button)[2]").click();

    //await page.getByRole('button', {name: 'ButtonName'});
    await page.locator("(//button)[1]").click();

});