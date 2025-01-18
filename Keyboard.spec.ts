import { chromium, test } from "playwright/test";

test('How to Keyboard', async({page})=>{

    //await page.keyboard(); //This is not api but interfact to stimulate keyborad functions 
    //await page.press();// short hand 

    //You can do 1-0, f1-f12, all keyboard buttons individually and combo using press(), up(), down(), type() api's
    await page.keyboard.press('Tab'); //Control+o or If o needs to be in caps you need to "Control+Shift+O"
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Control+a+Delete+Enter');
    await page.keyboard.down('Shift') // If you want to perform downArow with shift use this method
    await page.keyboard.up('Control+a');
    await page.keyboard.type('iuub') // simulate typing but use fill() always
    
    await page.press('body', 'Enter')// not best practice as its short hand

})