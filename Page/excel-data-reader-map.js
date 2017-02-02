var con = console;

var readerData = {};

var elementTestData = require('../mockdata/lion-login-data.json');
var elementMetaData = require('../mockdata/lion-login-metadata.json');

var elementname = Object.keys(elementMetaData[0])[0];

//Will fetch all the field names of element mentioned
readerData.getAllFields = function() {
    var fields = [];

    for(var i=0; i<elementMetaData.length; i++) {
        fields.push(elementMetaData[i][elementname]);
    }

    return fields;
};

//To map the fieldnames with their respective element values
readerData.getMap = function() {
  var outputObj = {};

  for (var i = 0, ln = elementMetaData.length; i < ln; i++) {
    outputObj[elementMetaData[i][elementname]] = elementMetaData[i];
  }

  return outputObj;
};

readerData.mapTechnique = function() {
    var fields = readerData.getAllFields();
    
    var fieldValues = [];
    
    for(var j=0; j<elementTestData.length; j++) {
      var obj = {};
       for(var k=0; k<fields.length; k++) {
                  
           if(elementTestData[j][fields[k]]) {
             obj[fields[k]] = elementTestData[j][fields[k]];             
           }
       }
       
       fieldValues.push(obj);
    }

    return fieldValues;
};

module.exports = readerData;