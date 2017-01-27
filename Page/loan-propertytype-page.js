//import { browser, element, by, ElementFinder } from 'protractor';

var loanPropertyPage = function () {

    this.clickOnAddress = function () {
        element(by.xpath("//ion-input[@name='address']")).click();
    },
        this.enterAddress = function (value) {
            element(by.css('input[name="addressLine"]')).clear();
            element(by.css('input[name="addressLine"]')).sendKeys(value);
        },
        this.enterCityName = function (value) {
            element(by.css('input[name="city"]')).sendKeys(value);//city
        },
        this.enterStateName = function (value) {
            element(by.css('input[name="state"]')).sendKeys(value);//state
        },
        this.enterZip = function (value) {
            element(by.css('input[name="zip"]')).sendKeys(value);//zip
        },
        this.submitAdress = function () {
            element(by.css('button.auto-done')).click();
        },
        this.checkResidenceToggleButton = function () {
            element(by.css('ion-toggle[name="primaryResidence"]')).click();//selectValueOfProperty
        },
        this.selectPropertyType = function () {
            element(by.css('ion-select[name="buildingType"]')).click();
            browser.driver.sleep(1000);
            element(by.xpath("//div[contains(text(),'HighRise Condo')]")).click();
        },
        this.enterValueOfProperty = function (value) {
            element(by.css('input[name="propertyValue"]')).sendKeys(value);
        },
        this.saveAndContinueButton = function () {
            element(by.css('button.app-button.save-continue')).click();
        },
        this.getNextPage = function () {
            return require('../page/refinace-property-details-page.js');
        }
}
module.exports = new loanPropertyPage();