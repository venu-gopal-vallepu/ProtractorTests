//import { describe, it, beforeEach, afterEach } from 'jamsine';
var actionMethods = require('../page/action-methods-page.js');
var CurrentPage = actionMethods;
var testdata = require("../mockdata/lion-login.json");

describe('Lion_app_Login_validation', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        CurrentPage.launchBrowser();
        browser.waitForAngular();
    });

    testdata.forEach(function (data) {
      //  console.log(testdata.elementType);
        it('should login with valid credentials', function () {
            browser.driver.sleep(3000);
            // if (testdata.elementType == "textbox") {
            //     console.log('entered ')
            //    // CurrentPage.enterValueInTextbox(testdata.locator, testdata.value);
            // }
            CurrentPage.enterEmailId(data.userName);
            CurrentPage.enterPassword(data.password);
            browser.driver.sleep(2000);
            CurrentPage.doLogin();
            browser.driver.sleep(2000);
            var message = element(by.css('div.alert-message')).getText();
            expect(message).toEqual(data.matcher);
            browser.driver.sleep(2000);
        })
    }, this);

});

