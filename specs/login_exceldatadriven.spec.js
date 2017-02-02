//import { describe, it, beforeEach, afterEach } from 'jamsine';
//import { browser, element, by, ElementFinder } from 'protractor';
var actionMethods = require('../page/action-methods-page.js');
var CurrentPage = actionMethods;

var testdata = require("../mockdata/lion-login-data.json");
var metadata = require("../mockdata/lion-login-metadata.json");
browser.pause();
var mapReaderFile = require('../page/excel-data-reader-map.js');
var allFieldsData = mapReaderFile.getAllFields();
var mapFieldsData = mapReaderFile.getMap();
var dataMapTechFields = mapReaderFile.mapTechnique();

var con = console;

describe('Lion_app_Login_validation', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.pause();
        CurrentPage.launchBrowser();
        browser.waitForAngular();
    });

    it('should login with valid credentials', function () {
        console.log('allFieldsData: ', allFieldsData);
        console.log('mapFieldsData: ', mapFieldsData);
        console.log('dataMapTechFields: ', dataMapTechFields);

        for (var i = 0; i < dataMapTechFields.length; i++) {
            for (var j = 0; j < allFieldsData.length; j++) {
                var fieldName = allFieldsData[j];

                var fieldsData = mapFieldsData[fieldName];

                if (fieldsData.ElementType == 'textbox') {
                    CurrentPage.enterData(by.xpath(fieldsData.Locator), dataMapTechFields[i][fieldName]);
                    browser.driver.sleep(2000);
                }
            }
        }
    })
});

