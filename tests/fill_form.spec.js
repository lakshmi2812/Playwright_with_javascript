const {test, expect} = require('@playwright/test')

test('Fill Form fields', async({page}) => {
    //go to the website
    await page.goto('https://www.wizardingworld.com/');

    //click on the Sign Up button
    await page.getByRole('button', {name: 'Sign Up'}).click();

    //get the date of birth field
    const dob = page.getByLabel('Date Of Birth');

    //Fill in the Date of birth field
    await dob.fill('02/21/2010');

    //fill in the first name field
    await page.getByLabel('First Name').fill('Harry');

    //fill in the last name field
    await page.getByLabel('Last Name').fill('Potter');
})