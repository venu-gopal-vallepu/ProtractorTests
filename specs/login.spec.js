// import { describe, it, beforeEach, afterEach } from 'jamsine';
//import { browser } from 'protractor';
var fs = require('fs');
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

var LoginPage = require('../page/login-page.js');
var CurrentPage = LoginPage;

describe("Lion_app_Login_validation", function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        CurrentPage.launchBrowser();
        //  writeScreenShot(,'')
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'screenshots/exception.png');
        });
        
        browser.waitForAngular();
    })
    it('should login with valid credentials', function () {
        // console.log(z);
        browser.driver.sleep(3000);
        CurrentPage.enterEmailId('venugopal.vellepu@walkingtree.tech');
        CurrentPage.enterPassword('venu1234');
        browser.driver.sleep(2000);
        CurrentPage.doLogin();
        CurrentPage = CurrentPage.getNextPage();
        browser.driver.sleep(5000);

    })
    it("should select propse of Loan and continue", function () {
        CurrentPage.purposevalue();
        // browser.driver.sleep(2000);
        CurrentPage.optInContact();
        browser.driver.sleep(1000);
        CurrentPage.saveAndContinueButton();
        CurrentPage = CurrentPage.getNextPage();
        browser.driver.sleep(5000);
    })
    it("should display the adress of the property", function () {
        CurrentPage.clickOnAddress();
        browser.driver.sleep(5000);
        CurrentPage.enterAddress('259 street, #342');
        CurrentPage.enterCityName('Stephentown');
        CurrentPage.enterStateName('Newyork');
        CurrentPage.enterZip('12168');
        CurrentPage.submitAdress();
        browser.driver.sleep(2000);
        CurrentPage.checkResidenceToggleButton();
        browser.driver.sleep(3000);
        CurrentPage.selectPropertyType();
        browser.driver.sleep(2000);
        CurrentPage.enterValueOfProperty('220000');
        browser.driver.sleep(1000);
        CurrentPage.saveAndContinueButton();
        CurrentPage = CurrentPage.getNextPage();
        browser.driver.sleep(6000);
    })
    it("should enter borrower refinance infoemation and save the details ", function () {
        CurrentPage.selectRefinancePurpose();
        browser.driver.sleep(4000);
        CurrentPage.addOutstandingLoan();
        browser.driver.sleep(3000);
        CurrentPage.selectLoanType();
        CurrentPage.enterCurrentBalance('330000');
        CurrentPage.enterInterestRate('4');
        CurrentPage.selectPayOfLoan();
        browser.driver.sleep(2000);
        CurrentPage.saveOutstandingLoan();
        browser.driver.sleep(2000);
        CurrentPage.saveRefinanceInfo();
        browser.driver.sleep(4000);
    })
})