import {chromium} from 'playwright'; //Import test and chromium modules from pw library
import test from  'playwright/test';

test('interaction with mouse', async()=>{

    var browser = await chromium.launch({slowMo: 3000});
    var page = await browser.newPage();
    await page.goto('https://letcode.in/buttons');

   var _gotoHomeButton =  page.getByRole('button', {name: 'Goto Home'});

   await _gotoHomeButton.click();

   await _gotoHomeButton.click({delay: 3000}); // delay for click between any action

   await _gotoHomeButton.click({clickCount: 3}); //number of clicks

   await _gotoHomeButton.click({button: 'left'}); //mouse click with left, right and middle

   await _gotoHomeButton.click({modifiers: ['Control']}); // [control], [meta]

   await _gotoHomeButton.click({position: {x: 10, y: 20}}); //click coordinates with in element not entire page

   await _gotoHomeButton.hover({force: true}); //hovering on any element 
   await _gotoHomeButton.focus(); // provide focus to the element if no focus into the element
   await _gotoHomeButton.blur(); //  remove focus to the element if focus provided into the element

})