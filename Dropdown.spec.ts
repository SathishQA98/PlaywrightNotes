import { chromium, test } from "playwright/test";

test('Interact with Dropdown', async()=>{

    const _browser = await chromium.launch({slowMo: 3000});
    const _page = await _browser.newPage();

    await _page.goto('https://letcode.in/dropdowns');

    // Dropdown => <select> and options => <option>

    //Interaction with Drop down
    // 1. one can select value from Drop down
    // 2. one can select values from Drop down
    // 3. retrieve all the Values from Dropdown


    //Api to Select Value
    // API => selectOption() //2 param => 1. Locator, 2. How you wanted to select (Label, Index, Value);
    // MultiSelect

    //Single Select
    await _page.selectOption('#fruits', {label: 'Mango'});
    await _page.selectOption('#fruits', {index: 4});
    await _page.selectOption('#fruits', {value: '4'});

    //Muti select => Multiple Selection should be done by only Label
    await _page.selectOption('#superheros', ['Ant-Man','Aquaman', 'The Avengers', 'Batman', 'Doctor Strange']);

    //Retrieve the options from Dropdown => innerText() => string, allInnerTexts() => Array[]
    var _fruitDropdown = _page.locator('#fruits');
    var _allFruitsValues = await _fruitDropdown.allInnerTexts();

    //console.log(_allFruitsValues);
    
    for(var x in _allFruitsValues){
        console.log(_allFruitsValues[x]);
    }

    await _page.close();
})
