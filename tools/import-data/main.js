var fetchSheetsData = require('./fetch-sheets-data');
var import2DB = require('./import-to-db');
var buildDataset = require('./build-dataset');
var export2Json = require('./export-to-json');
var names = require("./data-names");
var lf = require("./lf");

module.exports = function(path){

    var db;
    
    function getTable(name) {
        return db.getSchema().table(name);
    }
    
    return fetchSheetsData()
        .then(function(tableData){
            return import2DB(tableData);
        }).then(function(db_){
            db = db_;
            return buildDataset(db);
        }).then(function(projects){
            console.log("projects", projects);
            return export2Json(projects, path + "projects.json");
        }).then(function(){
            var technology = getTable(names.technology);
            return db.select().from(technology).orderBy(technology.order,lf.Order.DESC).exec();
        }).then(function(technologies){
            console.log("technologies", technologies);
            return export2Json(technologies, path + "technologies.json");
        }).then(function(){
            var type = getTable(names.type);
            return db.select().from(type).orderBy(type.order, lf.Order.DESC).exec();
        }).then(function(types){
            console.log("types", types);
            return export2Json(types, path + "types.json");
        });
}