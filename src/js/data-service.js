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
		var queries = tablesData.map(function(tableData){
			
			var table = getTable(tableData.name);
			var rows = tableData.data.map(function(rowData){
				rowData.endDate = new Date(rowData.endDate);
				rowData.startDate = new Date(rowData.startDate);
				return table.createRow(rowData);
			});
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
		return db.select(p.id, p.name, p.description).
			from(p).
			orderBy(p.startDate, lf.Order.DESC).exec();
	}
	
	return self;
	
	
});