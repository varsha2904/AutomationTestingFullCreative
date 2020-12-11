var functions = require('global.js'),
        driver = functions.driver,
        chromedriver = require('chromedriver'),
        test = require('selenium-webdriver/testing'),
        constant = require('constants.js');
        
test.describe('Testing HTML Canvas', function () 
{
	//Test for Draw Line
    test.it('Test Draw Line',function(done)
    {
           goToWebsite();
           clickonDrawLine();
           drawHorizontalLine();
           drawVerticalLine();
           done();
    });
});