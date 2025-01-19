import { chromium, test } from "playwright/test";

test('How to Keyboard', async({page})=>{

    //await page.keyboard(); //This is not api but interfact to stimulate keyborad functions 
    //await page.press();// short hand 

    //You can do Digit0-Digit9, F1-F12, KeyA-KeyZ, Modifiers and Other Keys [Space, Shift, Alt] all keyboard buttons individually and combo using press(), up(), down(), type() api's
    
    //Single Press
    await page.keyboard.press('Tab'); //Control+o or If o needs to be in caps you need to "Control+Shift+O"
    await page.keyboard.press('Control+a');

    //Multiple Press
    await page.keyboard.press('Control+a+Delete+Enter');

    //Key Hold + Release
    await page.keyboard.down('Shift') // This denotes press + hold the specific key
    await page.keyboard.up('Control+a'); // This denotes release the 12th line of specific key //Scenario we can not hold space bar all the time, we should press hold and release the same key
    
    //Type to simulate Keyboard event
    await page.keyboard.type('iuub') // simulate typing but use fill() always
    
    //await page.press('body', 'Enter')// not best practice as its short hand

})