var XLSX = require('xlsx');
//var Q = require('q');
var metaFileUrl   = "./excelFiles/lion-login-metadata.xlsx";
var dataFileUrl   = "./excelFiles/lion-login-data.xlsx";
var metajsonFile  = "./mockdata/lion-login-metadata.json";
var datajsonFile  = "./mockdata/lion-login-data.json";
XLSX.readFile(metaFileUrl);

convertMetaExcel = require('excel-as-json').processFile;
convertDataExcel = require('excel-as-json').processFile;

module.exports = {
  convertMetaExcel: function (mcb) {
    convertMetaExcel(metaFileUrl, metajsonFile, false, function (err, data) {
    // console.log(data);
      mcb(err, data);
    });
  },
 convertDataExcel: function (dcb) {
    convertDataExcel(dataFileUrl, datajsonFile, false, function (err, data) {
     // console.log(data);
      dcb(err, data);
    });
  }
};





