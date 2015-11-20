/* global Promise */
define([
	
],function(){
	
function csvToObject(csvString) {
  var lines = csvString.split('\n');
  var headerLine = lines[0];
  var fields = headerLine.split(',');

  var objects = [];
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];

    // The csvString that comes from the server has an empty line at the end,
    // need to ignore it.
    if (line.length == 0) {
      continue;
    }

    var values = line.split(',');
    var obj = {};
    fields.forEach(function(field, index) {
      if (field == 'Date') {
        obj[field] = values[index];
      } else {
        obj[field] = parseFloat(values[index]);
      }
    });
    objects.push(obj);
  }

  return objects;
};

function fetchSheet(sheetId) {
  
}

/*
var docId = "1JKIhT87Gw5axIdyHd8KtmN4qU4_1g2zTTcD1m4yEZ4s";
var sheetIds = {
  "technology": "1440630644"
  ,"role": "34033050"
  ,"type": "1502467693"
  ,"project": "160540129"
  ,"client": "190317020"
  ,"image": "1802345145"
  ,"agency": "498570237"
}
var dataUrlTemplate = "https://docs.google.com/spreadsheets/d/{docId}/pub?output=csv&gid={sheetId}";
dataUrlTemplate = dataUrlTemplate.replace("{docId}", docId);
*/

var sheetNames = [
  "technology"
  ,"role"
  ,"type"
  ,"project"
  ,"client"
  ,"image"
  ,"agency"
];

var dataUrlTemplate = "../build/json/{sheetName}.json";

return function($http) {
  var promises = sheetNames.map(function(sheetName){
    var dataUrl = dataUrlTemplate.replace("{sheetName}", sheetName);
    
    return $http.get(dataUrl).then(
      function(data) {
        return {
          data: data,
          name: sheetName
        }
      });
  });
  
  return Promise.all(promises).then(
      function(allTables) {
        return allTables;
      });
}
	
	
});