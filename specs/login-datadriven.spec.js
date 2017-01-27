
var LoginPage = require('../page/login-page.js');
var CurrentPage = LoginPage;
var testdata = require("../testdata.json")
describe("Lion_app_Login_validation", function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        CurrentPage.launchBrowser();
        browser.waitForAngular();
    })

    testdata.forEach(function (data) {
        it('should login with valid credentials', function () {
            // console.log(z);
            // "userName" : "vdhf",
            //     "password" : "venu1234"
            browser.driver.sleep(3000);
            CurrentPage.enterEmailId(data.userName);
            CurrentPage.enterPassword(data.password);
            browser.driver.sleep(2000);
            CurrentPage.doLogin();
            browser.driver.sleep(2000);
            //CurrentPage = CurrentPage.getNextPage();
            var message = element(by.css('div.alert-message')).getText();
            expect(message).toEqual(data.matcher);
            browser.driver.sleep(2000);
        })
    }, this);
})