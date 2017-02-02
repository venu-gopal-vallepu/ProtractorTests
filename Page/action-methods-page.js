//import { browser, element, by, ElementFinder } from 'protractor';
//import { describe, it, beforeEach, afterEach } from 'jamsine';

var conf = require('../conf.json');
var actionMethods = function () {

  this.launchBrowser = function () {
    browser.get(conf.baseUrl)
  };
  this.enterData = function (by, value) {
    // element(by.locator).sendKeys(value);
    element(by).sendKeys(value);
  };
  this.enterPassword = function (value) {
    element(by.xpath("//input[@name='password']")).sendKeys(value);
  };
  this.doLogin = function () {
    element(by.buttonText('Sign in')).click();
  };

}

module.exports = new actionMethods();
