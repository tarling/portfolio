var fetchSheetsData = require('./fetch-sheets-data');
var import2DB = require('./import-to-db');
var buildDataset = require('./build-dataset');
var export2Json = require('./export-to-json');


module.exports = function(filePath){

    return fetchSheetsData()
        .then(function(tableData){
            return import2DB(tableData);
        }).then(function(db){
            return buildDataset(db);
        }).then(function(json){
            console.log("json", json);
            return export2Json(json, filePath);
        });
}