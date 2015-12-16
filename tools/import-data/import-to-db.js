var lf = require("./lf");
var names = require("./data-names");
	
function buildSchema() {
    
    var schemaBuilder = lf.schema.create('portfolio', 1);

    schemaBuilder.createTable(names.agency).
        addColumn('id', lf.Type.INTEGER).
        addColumn('name', lf.Type.STRING).
        addPrimaryKey(['id']);

    schemaBuilder.createTable(names.client).
        addColumn('id', lf.Type.INTEGER).
        addColumn('name', lf.Type.STRING).
        addPrimaryKey(['id']);

    schemaBuilder.createTable(names.projectImage).
        addColumn('project', lf.Type.INTEGER).
        addColumn('image', lf.Type.STRING);

    schemaBuilder.createTable(names.projectType).
        addColumn('project', lf.Type.INTEGER).
        addColumn('type', lf.Type.INTEGER);

    schemaBuilder.createTable(names.projectTechnology).
        addColumn('project', lf.Type.INTEGER).
        addColumn('technology', lf.Type.INTEGER);

    schemaBuilder.createTable(names.project).
        addColumn('id', lf.Type.INTEGER).
        addColumn('name', lf.Type.STRING).
        addColumn('description', lf.Type.STRING).
        addColumn(names.role, lf.Type.STRING).
        addColumn(names.client, lf.Type.STRING).
        addColumn(names.agency, lf.Type.STRING).
        addColumn('startDate', lf.Type.DATE_TIME).
        addColumn('endDate', lf.Type.DATE_TIME).
        addColumn('show', lf.Type.BOOLEAN).
        addPrimaryKey(['id']);

    schemaBuilder.createTable(names.role).
        addColumn('id', lf.Type.INTEGER).
        addColumn('name', lf.Type.STRING).
        addPrimaryKey(['id']);

    schemaBuilder.createTable(names.technology).
        addColumn('id', lf.Type.INTEGER).
        addColumn('name', lf.Type.STRING).
        addColumn('order', lf.Type.INTEGER).
        addPrimaryKey(['id']);

    schemaBuilder.createTable(names.type).
        addColumn('id', lf.Type.INTEGER).
        addColumn('name', lf.Type.STRING).
        addColumn('order', lf.Type.INTEGER).
        addPrimaryKey(['id']);
    
    return schemaBuilder;
};

function getTable(name) {
    return db.getSchema().table(name);
}

function insertData(tablesData) {

    var tableName, table;
    function makeRow(rowData){
        return table.createRow(rowData)
    }
    function makeProjectRow(rowData) {
        if (tableName == "project")
        {
            rowData.startDate = new Date(rowData.startDate);
            rowData.endDate = new Date(rowData.endDate ? rowData.endDate : 0);
            rowData.show = rowData.show == "1";
        }
        return makeRow(rowData);
    }

    var queries = tablesData.map(function(tableData){

        tableName = tableData.name;
        table = getTable(tableName);

        var mapFn = (tableName == "project") ? makeProjectRow : makeRow;
        var rows = tableData.data.map(mapFn);
        return db.
            insert().
            into(table).
            values(rows);

    });
    var tx = db.createTransaction();
    return tx.exec(queries).then(function(){
        return db;
    });
}


var db;

module.exports = function(tablesData) {
    var connectOptions = {
        storeType: lf.schema.DataStoreType.MEMORY
    };
    return buildSchema().connect(connectOptions)
        .then(function(db_){
            db = db_;
            return insertData(tablesData);
        });
}