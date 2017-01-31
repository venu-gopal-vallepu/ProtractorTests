var convertExcel = require("./excelUtils").convertExcel;

convertExcel(function (err, excelData) {
    console.log(excelData)
});