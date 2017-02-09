//import { browser, element, by, ElementFinder } from 'protractor';
//import { describe, it, beforeEach, afterEach } from 'jamsine';


var conf = require('../conf.json');
// var EC = protractor.ExpectedConditions;

var actionMethods = function () {

  this.launchBrowser = function () {
    browser.get(conf.baseUrl);
  };

  this.enterData = function (by, value) {
    element(by).clear();
    element(by).sendKeys(value);
  };

  this.submit = function (by) {
    //browser.wait(EC.elementToBeClickable(by.buttonText(locator[1])), 5000);
    element(by).click();
  };

  this.validateMessage = function (by, value) {
    var message = element(by).getText();
    expect(message).toEqual(value);
  }

}

module.exports = new actionMethods();
