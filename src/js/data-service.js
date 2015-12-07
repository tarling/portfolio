/* global Promise */
define([
	"lovefield"
	,"./data-names"
],function(lf, names){
	
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
			addColumn('file', lf.Type.STRING);
		
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
			addPrimaryKey(['id']);
		
		schemaBuilder.createTable(names.role).
			addColumn('id', lf.Type.INTEGER).
			addColumn('name', lf.Type.STRING).
			addPrimaryKey(['id']);
		
		schemaBuilder.createTable(names.technology).
			addColumn('id', lf.Type.INTEGER).
			addColumn('name', lf.Type.STRING).
			addPrimaryKey(['id']);
		
		schemaBuilder.createTable(names.type).
			addColumn('id', lf.Type.INTEGER).
			addColumn('name', lf.Type.STRING).
			addPrimaryKey(['id']);
			
		return schemaBuilder;
	};
	
	function checkForExistingData() {
		var typeTable = getTable(names.type);
		return db.select().from(typeTable).exec().then(
			function(rows) {
				return rows.length > 0;
			});
	}
	
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
  		return tx.exec(queries);
	}
	
	
	var db;
	var self = {};
	
	self.init = function(fetchDataFn) {
		var connectOptions = {
			storeType: lf.schema.DataStoreType.INDEXED_DB
		};
		return buildSchema().connect(connectOptions)
			.then(function(db_){
				console.log("connected", db_);
				db = db_;
				return checkForExistingData();
			}).then(function(dataExists){
				console.log("dataExists", dataExists);
				if (dataExists)
				{
					return Promise.resolve();
				} else {
					return fetchDataFn().then(function(tablesData){
						console.log("data fetched", tablesData);
						return insertData(tablesData);
					});
				}
			});
	}
	
	self.getProjects = function() {
		var p = getTable(names.project);
		var i = getTable(names.projectImage);
		return db.select(p.id, p.name, p.description, p.startDate, p.endDate, i.file.as("image")).
			from(p, i).
			//innerJoin(i, i.project.eq(p.id)).
			orderBy(p.startDate, lf.Order.DESC).
			where(p.id.eq(i.project)).
			exec();
	}
	
	/*self.getProjects = function() {
		var p = getTable(names.project);
		return db.select(p.id, p.name, p.description).
			from(p).
			orderBy(p.startDate, lf.Order.DESC).
			exec();
	}*/
	
	return self;
	
	
});