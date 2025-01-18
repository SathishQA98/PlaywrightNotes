import { chromium, firefox, test, webkit } from "playwright/test";

// For Manual one should open Browser instance, Open new tab, Navigate to Application and begin the test
// Same in Automation one required a browser, page and navigate to begin the test. 

test('Playwright Code Base', async()=>{

    var browser = await chromium.launch(); 
    var context = await browser.newContext();
    var page = await context.newPage();

    await page.goto('https://www.saucedemo.com/v1/');

    //Best practice to close all the fixtures created with in browser
    
    await  page.close();
    await context.close();
    await browser.close();
    

});

// Lets start with basic code base to learn playwright. 
// test is a hook which includes test steps, each test consider as a test case
// async is a programming method to execute your code [sync and async]
// Need a browser for test execution then need page and website those are basic stuff to test any website
// Playwright can be used with Chrome [versions], FireFox and Webkit
// Need anyone of a browser and launch with Page
// Here page is a tab/window in private or incognito mode.

// var browser = await chromium.launch(); 
// var context = await browser.newContext();
// var page = await context.newPage();
// await page.goto('Url')

//Lets see one by one

//What is asynchronous?
    // Async used to execute all the line of code parallely or independently
    // Unlike synchronous, async bypass the restriction that, next line will be blocked until the current line executed.
    // Async: Run all the lines background and never block the front end seamlessly, using await it handles the web element interaction 
    
    // Key Concepts in Asynchronous Programming:
    // Asynchronous vs. Synchronous:
    // Synchronous: In synchronous programming, each task is executed one after another. The program waits for the current task to finish before moving to the next one.
    // Asynchronous: Asynchronous programming allows tasks to be initiated and run in parallel or independently. The program doesn't wait for a task to finish before starting the next one, improving efficiency and responsiveness.
    // How it works: Asynchronous code typically uses mechanisms like callbacks, promises, or async/await to handle tasks that take time to complete (e.g., network requests, file I/O) without blocking the program.
    // async is a key concept from javascript
    // Playwright uses await and async to handle async operation
    // When you use async keyword in function, the function allows await key word inside of class and async function retunr promise always
    // Await pause the action until the promise resolved (or rejected) await element to be clickable()



