const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()

    await page.setViewport({ width: 1440, height: 820 })

    await page.goto('https://us.pic-time.com/login')

    await page.waitForSelector('.page > .panel > .form > .field > #rform_pt1_0')
    await page.click('.page > .panel > .form > .field > #rform_pt1_0')

    await page.type('.page > .panel > .form > .field > #rform_pt1_0', 'hello@hannahmichellephoto.com')

    await page.waitForSelector('.noTouch > #form1 > #useraccount > .page')
    await page.click('.noTouch > #form1 > #useraccount > .page')

    await page.waitForSelector('.page > .panel > .form > .field > #rform_pt1_1')
    await page.click('.page > .panel > .form > .field > #rform_pt1_1')

    await page.type('.page > .panel > .form > .field > #rform_pt1_1', 'Hamilo92!')

    await page.waitForSelector('.noTouch > #form1 > #useraccount > .page')
    await page.click('.noTouch > #form1 > #useraccount > .page')

    await page.waitForSelector('#useraccount > .page > .panel > .buttons > .pButton')
    await page.click('#useraccount > .page > .panel > .buttons > .pButton')

    await navigationPromise

    await page.waitForSelector('#topp_t20181015123 > .menu > .optionsList > .actualList > .line:nth-child(1)')
    await page.click('#topp_t20181015123 > .menu > .optionsList > .actualList > .line:nth-child(1)')

    await page.waitForSelector('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt2_0')
    await page.click('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt2_0')

    await page.waitForSelector('.noTouch > #form2 > #pictimemain > #canvas2 > .pBodyPanel')
    await page.click('.noTouch > #form2 > #pictimemain > #canvas2 > .pBodyPanel')

    await page.waitForSelector('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt2_0')
    await page.click('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt2_0')

    await page.type('.pColumns > .pColumn1 > .identityForm > .field > #rform_pt2_0', 'Beebo Test Project 1')

    await page.waitForSelector('.noTouch > #form2 > #pictimemain > #canvas2 > .pBodyPanel')
    await page.click('.noTouch > #form2 > #pictimemain > #canvas2 > .pBodyPanel')

    await browser.close()
})()
