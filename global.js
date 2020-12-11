
var assert = require('assert'),
        webdriver = require('selenium-webdriver'),
        chromedriver = require('chromedriver'),
        By = webdriver.By,
        constant = require('constants.js'),
        until = webdriver.until;

var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

goToWebsite = function () {
    driver.get('' + constants.applicationURL + '').then(function ()
    {
        driver.wait(until.elementLocated(By.css('div[id="header"]')),500).then(function ()
        {
            driver.findElement(By.css('div[id="header"]')).isDisplayed().then(function (siteDisplayed)
            {
                assert.equal(siteDisplayed, true);
            });
        });

    });
};

clickOnDrawLine = function ()
{
    driver.wait(until.elementLocated(By.css('. button line')),500).then(function()
    {
        driver.findElement(By.css('.button line')).click().then(function ()
        {
            driver.findElement(By.css('.button line clicked')).isDisplayed().then(function (buttonClicked)
            {
                assert.equal(buttonClicked, true);
            });
        });
    });
};



