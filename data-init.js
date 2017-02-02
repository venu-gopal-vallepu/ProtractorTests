var convertMetaExcel = require("./excelUtils").convertMetaExcel;
var convertDataExcel = require("./excelUtils").convertDataExcel;


convertMetaExcel(function (err, excelData) {
    console.log(excelData)
});

convertDataExcel(function (err, excelData) {
    console.log(excelData)
});