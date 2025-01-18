import { _bidiFirefox, chromium, expect, test } from "playwright/test";
import assert from 'assert';

test('How to Frames', async()=>{

    // <html>
    // <head>
    // <body>
    // <iframe>
    //         <html>
    //         <head>
    //         <body>
    //         <iframe>
    //             <html>
    //             <head>
    //             <iframe>
    //                 <html>
    //             </iframe>
    //             <body>
    //             <footer>
    //             </html>
    //         </iframe>
    //         <footer>
    //         </html>
    // </iframe>
    // <footer>
    // </html>

     //           <html>
    //             <head>
    //             
    //             <body>
     //                   <iframe>
    //                 <html>
    //             </iframe>
    //             <footer>
    //             </html>



    const _browser = await chromium.launch({slowMo: 5000}); 
    const _context = await _browser.newContext(); //browser == context
    const _page = await _context.newPage();
    await _page.goto('https://letcode.in/frame');

    

    //How to locate the frame
    // 1. By Name 1st prior
    // 2. By Url [src] - least prior

    //1. By frame Name

    // a. Locate the Frame [Entering in to frame]
    const _parentFrame = _page.frame({name: "firstFr"}); // url

    // b. Make sure the frame is not empty
    if(_parentFrame != null){
        await _parentFrame.getByPlaceholder('Enter name').fill("John Doe");

        const _childFrames = _parentFrame.childFrames(); //child frames starts from 1 coz frame [0] referred to parent window
        if(_childFrames[1] != null){
            await _childFrames[1].getByPlaceholder('Enter email').fill('test123@test.com');
        }
        else{
            assert.fail('No Such a Child Frame');
        }

        await _parentFrame.getByPlaceholder('Enter email').fill("test@test.com"); //_frame == _page

    }

    else{
        assert.fail('No Such a Parent Frame');
    }
});