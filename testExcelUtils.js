//import { describe, it, beforeEach, afterEach } from 'jamsine';
//import { browser, element, by, ElementFinder } from 'protractor';

var metaDataFile = './excelFiles/lion-login-metadata.xlsx';
var testDataFile = './excelFiles/lion-login-metadata.xlsx';

var testMetajson = './testMetaJsonData.json';
var testDatajson = './testJsonData.json';

convertMetaExcel = require('excel-as-json').processFile;
module.exports = {
    convertMetaExcel = function (cb) {
        convertMetaExcel(metaDataFile, testMetajson, false, function (err, data) {
            debugger;
            cb(err, data);
        });
    }
}



