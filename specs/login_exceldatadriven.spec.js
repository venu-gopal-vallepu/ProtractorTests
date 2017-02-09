//import { describe, it, beforeEach, afterEach } from 'jamsine';
//import { browser, element, by, ElementFinder, ExpectedConditions } from 'protractor';

var EC = protractor.ExpectedConditions;

var actionMethods = require('../page/action-methods-page.js');
var CurrentPage = actionMethods;

var testdata = require("../mockdata/lion-login-data.json");
var metadata = require("../mockdata/lion-login-metadata.json");

var mapReaderFile = require('../page/excel-data-reader-map.js');

var allFieldsData = mapReaderFile.getAllFields();
var mapFieldsData = mapReaderFile.getMap();
var dataMapTechFields = mapReaderFile.mapTechnique();

var con = console;
var elem;

describe('Lion_app_Login_validation', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        CurrentPage.launchBrowser();
        browser.waitForAngular();
    });

    it('should login with valid credentials', function () {
        // console.log('allFieldsData: ', allFieldsData);
        // console.log('mapFieldsData: ', mapFieldsData);
        // console.log('dataMapTechFields: ', dataMapTechFields);

        for (var i = 0; i < dataMapTechFields.length; i++) {
            for (var j = 0; j < allFieldsData.length; j++) {

                var fieldName = allFieldsData[j];
                var fieldsData = mapFieldsData[fieldName];

                if (fieldsData.ElementType == 'textbox' && dataMapTechFields[i][fieldName] != undefined) {
                    var locator = fieldsData.Locator.split('&');

                    if (fieldsData.Locator.includes('xp&')) {
                        elem = element(by.xpath(locator[1]));
                        browser.wait(EC.presenceOf(elem), 6000);
                        CurrentPage.enterData(by.xpath(locator[1]), dataMapTechFields[i][fieldName]);
                    };
                    if (fieldsData.Locator.includes('css&')) {
                        elem = element(by.css(locator[1]));
                        browser.wait(EC.presenceOf(elem), 6000);
                        CurrentPage.enterData(by.css(locator[1]), dataMapTechFields[i][fieldName]);
                    };
                };

                if (fieldsData.ElementType == 'button' && dataMapTechFields[i][fieldName] != undefined) {
                    var locator = fieldsData.Locator.split('&');
                    if (fieldsData.Locator.includes('bt&')) {
                        elem = element(by.buttonText(locator[1]));
                        browser.wait(EC.presenceOf(elem), 6000);
                        CurrentPage.submit(by.buttonText(locator[1]));
                        browser.driver.sleep(5000);
                    };
                    if (fieldsData.Locator.includes('css&')) {
                        elem = element(by.css(locator[1]));
                        browser.wait(EC.presenceOf(elem), 6000);
                        browser.wait(EC.elementToBeClickable(elem), 6000);
                        CurrentPage.submit(by.css(locator[1]));
                        browser.driver.sleep(3000);
                    };
                    if (fieldsData.Locator.includes('xp&')) {
                        elem = element(by.xpath(locator[1]));
                        browser.wait(EC.presenceOf(elem), 6000);
                        browser.wait(EC.elementToBeClickable(elem), 6000);
                        CurrentPage.submit(by.xpath(locator[1]));
                        browser.driver.sleep(3000);
                    };
                };

                if ((fieldsData.ElementType == 'validatetext') && (dataMapTechFields[i][fieldName] != undefined)) {
                    var locator = fieldsData.Locator.split('&');
                    elem = element(by.css(locator[1]));
                    browser.wait(EC.presenceOf(elem), 6000);
                    con.log("valuueeeeeee " + dataMapTechFields[i][fieldName]);
                    CurrentPage.validateMessage(by.css(locator[1]), dataMapTechFields[i][fieldName]);
                };
            }
        }
    })
});

