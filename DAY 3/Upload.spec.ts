import test, { chromium } from "playwright/test";
import * as path from "path";
import  assert  from "assert";

test('single fileupload', async()=>{
    var browser = await chromium.launch({slowMo: 3000});
    var context = await browser.newContext();
    var page =  await context.newPage();

    const _fileNameText = "sample.xlsx 23.5 KB";

    await page.goto('https://www.leafground.com/file.xhtml');

    //To use setinputfile the upload element should be type = 'file'
    // if lement => type = 'file' can use setInputFiles Api
    //Need to pass 2 parameter. 1. Locator including type 2, Local path

    //Upload
    await page.setInputFiles("(//input[@type='file'])[1]", "/Users/sathishgeetha/Downloads/sample.xlsx"); // 2 param => 1. locator [type], 2. local path

    //Validation after Upload
    var _fileNameUI = await page.innerText("//span[contains(@class, 'fileupload-filename')]");
    
    console.log('_fileNameUI: ', _fileNameUI.trim());
    
    if(_fileNameUI != _fileNameText){
        assert.fail("File name not matched / not upload")
    }
    
    await page.waitForTimeout(3000);


});