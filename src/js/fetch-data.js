/* global Promise */
define([
  "./data-names"
],function(names){
	
var sheetNames = Object.keys(names);

var dataUrlTemplate = "../build/json/{sheetName}.json";

return function($http) {
  var promises = sheetNames.map(function(sheetName){
    var dataUrl = dataUrlTemplate.replace("{sheetName}", sheetName);
    
    return $http.get(dataUrl).then(
      function(response) {
        return {
          data: response.data,
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