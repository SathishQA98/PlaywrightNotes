import { chromium, test } from "playwright/test";

test('Drag And Drop', async()=>{

    const _browser = await chromium.launch({slowMo: 2000});
    const _page = await _browser.newPage();

    await _page.goto('https://letcode.in/dropable');

    // How to Drag and Drop
    // 1. Locate the Drag and Droppable element
    // 2. use DragAndDrop Api

    // Interaction
    // 1. Default Drop
    // 2. Customize the Drop with in drop slot

    //Default Drag And Drop
    await _page.dragAndDrop('#draggable', '#droppable') //2 param, 1. Source 2. Target

    //custom methods
    await _page.dragAndDrop('#draggable', '#droppable', {
        targetPosition: {x:0, y: 0}
    }) // 3 param, 1. Source,  2. Target, 3. position

    await _page.waitForTimeout(2000);


    await _page.close();

});