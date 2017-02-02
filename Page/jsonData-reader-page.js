var readerData = {};

var elementTestData = require('../mockdata/lion-login-data.json');
var elementMetaData = require('../mockdata/lion-login-metadata.json');

var con = console;

//Mapping technique
readerData.getMap = function (data, key) {
    var outputObj = {};

    for (i = 0; i < data.length; i++) {
        outputObj[data[i][key]] = data[i];
    }

    return outputObj;
};

var metaMap = readerData.getMap(elementMetaData, Object.keys(elementMetaData[0])[0]);

//function to map the metadata object 
readerData.metaDataMapFn = function () {
    for (var j in elementTestData) {
        for (var k in elementTestData[j]) {
            if (metaMap[k]) {
                metaMap[k].value = elementTestData[j][k];
            }
        }
    }

   return metaMap;
};

module.exports = readerData;