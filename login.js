const puppeteer = require('puppeteer');

(() => {
    if ((process.env.PICTIME_USER == undefined) || (process.env.PICTIME_PASSWORD == undefined)) {
            throw "pic-time credentials not in environemnt."
    }
})();

(async () => {
    // start the browser
    const browser = await puppeteer.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()

    // go to the url
    await page.goto("https://us.pic-time.com/login")

    // wait to be able to navigate the page
    const navigationPromise = page.waitForNavigation()
    await navigationPromise

    // type the user
    selectorPromise = page.waitForSelector('.page > .panel > .form > .field > #rform_pt1_0')
      .then(() => console.log("Got user name selector."));
    await selectorPromise
    await page.click('.page > .panel > .form > .field > #rform_pt1_0')
    await page.type(
      '.page > .panel > .form > .field > #rform_pt1_0',
      process.env.PICTIME_USER
    )

    // type the password
    selectorPromise = page.waitForSelector('.page > .panel > .form > .field > #rform_pt1_1')
      .then(() => console.log("Got password selector."));
    await selectorPromise
    await page.click('.page > .panel > .form > .field > #rform_pt1_1')
    await page.type(
      '.page > .panel > .form > .field > #rform_pt1_1',
      process.env.PICTIME_PASSWORD
    )

    // hit the submit/login button
    selectorPromise = page.waitForSelector('#useraccount > .page > .panel > .buttons > .pButton')
      .then(() => console.log("Got login button selector."));
    await selectorPromise
    await page.click('#useraccount > .page > .panel > .buttons > .pButton')

    // wait to be able to navigate the page
    await navigationPromise

    // screenshot the page as proof
    await page.screenshot({ path: "screenshot.png" })

    // =========================================================
    // LOGIN DONE
    // =========================================================

    // visit the photos section
    await page.waitForSelector('.pBodyPanel > #topp_t2018101601 > .menu > .optionsList > .photos')
    await page.click('.pBodyPanel > #topp_t2018101601 > .menu > .optionsList > .photos')

    //// create a new project
    //await page.waitForSelector('.pBodyPanel > #topp_t2018101601 > .menu > .addProject > .iconBefore')
    //await page.click('.pBodyPanel > #topp_t2018101601 > .menu > .addProject > .iconBefore')

    ////await page.waitForSelector('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt10_0')
    ////await page.click('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt10_0')
    ////await page.type('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt10_0', 'test 1')


    //// this is choosing the first proejct on the list -> need to dynamically choose the right one or create it
    //// await page.waitForSelector('#topp_t20181015123 > .menu > .optionsList > .actualList > .line:nth-child(1)')
    //// await page.click('#topp_t20181015123 > .menu > .optionsList > .actualList > .line:nth-child(1)')

    //// (for first creation) enter the title of the project
    //await page.waitForSelector('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt12_0')
    //await page.click('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt12_0')
    //await page.type('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt12_0', 'Beebo Test Project 1')

    //// await page.waitForSelector('.noTouch > #form2 > #pictimemain > #canvas2 > .pBodyPanel')
    //// await page.click('.noTouch > #form2 > #pictimemain > #canvas2 > .pBodyPanel')

    //// await browser.close()
})()
