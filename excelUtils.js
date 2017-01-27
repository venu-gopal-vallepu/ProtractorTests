var testData = function(){
var fileUrl = ".\\excelFiles\\lion-login.xlsx";
 convertExcel = require('excel-as-json').processFile;
 convertExcel(fileUrl, null, false, function(err,data){
   console.log(data);
   return require(data) ;
 });
}
module.exports = new testData();


//var XLSX = require('xlsx');
// var workbook = XLSX.readFile(fileUrl);
// var userInfoSheet = workbook.Sheets[workbook.SheetNames[0]];
//var sheet_name_list = workbook.SheetNames;
//userInfoSheet.forEach(function (y) { /* iterate through sheets */
  //var worksheet = workbook.Sheets[y];



// module.exports = function(cb) {
 
//         //
//         cb(err, data);
//   });
// }

  

