var XLSX = require('xlsx');
//var Q = require('q');
var fileUrl  = "./excelFiles/lion-login.xlsx";
var jsonFile = "./mockdata/lion-login.json";
XLSX.readFile(fileUrl);
convertExcel = require('excel-as-json').processFile;

module.exports = {
  convertExcel: function (cb) {
    convertExcel(fileUrl, jsonFile, false, function (err, data) {
      console.log(data);
      cb(err, data);
    });
  }
};





