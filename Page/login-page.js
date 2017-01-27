//import { browser, element, by, ElementFinder } from 'protractor';
var conf = require('../conf.json');

var LoginPage = function () {

  this.launchBrowser = function () {
    browser.get(conf.baseUrl)
  };
  this.enterEmailId = function (value) {
    element(by.xpath("//input[@name='email']")).sendKeys(value);
  };
  this.enterPassword = function (value) {
    element(by.xpath("//input[@name='password']")).sendKeys(value);
  };
  this.doLogin = function () {
    element(by.buttonText('Sign in')).click();
  };
  this.getNextPage = function() {
    return require('../page/loan-purpose-page.js');
  };
}

module.exports = new LoginPage();