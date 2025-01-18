import { chromium, test } from "playwright/test";
import * as path from 'path';


test('Screen shot', async()=>{

    const _browser = await chromium.launch({slowMo: 5000}); 
    const _page = await _browser.newPage();

    await _page.goto('https://letcode.in/edit');

    //screenshot()

    // Types of Screenshots
    // 1. Onload screenshot
    // 2. Fullscreen shot 
    // 3. Screenshot of particular element
    // 4. Store under specific folder 

    // 1. How to SS of On load Page
    await _page.screenshot({path: 'OnloadPageScreenshot.jpeg'}) //path: screenshot name, by default fullPage is false

    //2. Full page Screenshot
    await _page.screenshot({path: 'FullPagePageScreenshot.jpeg', fullPage: true});  //path: screenshot name,fullPage = true to take full page screen shot

    //3. SS for Particular Element 
    await _page.locator("(//div[@class='col-12 md:col-12 lg:col-4'])[2]").screenshot({path: 'VideoViewElementScreenshot.jpeg'}); 
    
    await _page.getByPlaceholder('Enter first & last name').screenshot({path: 'NameTextboxScreenshot.png'});
    
    //4. Save single screenshot to spec folder

    const sourcePath = path.join('/Users/sathishgeetha/Documents/Playwright Workshop/Screenshots', 'OnloadPage.png') // 2 param 
    await _page.screenshot({path: sourcePath, fullPage: true});

    //5. Save multiple screenshot to spec folder

    // Define the folder path to save screenshots
     const folderPath = 'your/folder/path'; // Replace with the actual folder path

    // Take multiple screenshots with unique names
     for (let i = 1; i <= 3; i++) 
    { // Example: Taking 3 screenshots
         const filePath = path.join(folderPath, `EditPageScreenshot_${i}.png`);
         await _page.screenshot({ path: filePath, fullPage: true });
         console.log(`Screenshot saved at: ${filePath}`);
    }
 
    await _page.close();
});
