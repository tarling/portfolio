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
		
        var pi = getTable(names.projectImage);
		var ptech = getTable(names.projectTechnology);
		var ptype = getTable(names.projectType);
		
        var client = getTable(names.client);
		var agency = getTable(names.agency);
        var tech = getTable(names.technology);
		var type = getTable(names.type);
        
		return db.select(
            p.id, 
            p.name, 
            p.description, 
            p.startDate, 
            p.endDate, 
            pi.image.as("image"), 
            client.name.as("clientName"), 
            agency.name.as("agencyName"),
            lf.fn.asArray(tech.name).as("technologies"),
            lf.fn.asArray(type.name).as("types")).
            from(p, pi).
			innerJoin(client, client.id.eq(p.client)).
			innerJoin(agency, agency.id.eq(p.agency)).
			innerJoin(ptech, ptech.project.eq(p.id)).
			innerJoin(ptype, ptype.project.eq(p.id)).
			innerJoin(tech, tech.id.eq(ptech.technology)).
			innerJoin(type, type.id.eq(ptype.type)).
			orderBy(p.startDate, lf.Order.DESC).
			where(p.id.eq(pi.project)).
            groupBy(p.id).
            exec();
	}
	
	return self;
	
	
});