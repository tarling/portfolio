var names = require("./data-names");
var lf = require("./lf");

var db;

function getTable(name) {
    return db.getSchema().table(name);
}

module.exports = function(db_) {
    
    db = db_;
       
    var p = getTable(names.project);
    
    var pi = getTable(names.projectImage);
    var ptech = getTable(names.projectTechnology);
    var ptype = getTable(names.projectType);

    var client = getTable(names.client);
    var agency = getTable(names.agency);
    var tech = getTable(names.technology);
    var type = getTable(names.type);
    
    try {
    var query = db.select(
        p.id, 
        p.name, 
        p.description, 
        p.startDate, 
        p.endDate,
        client.name.as("clientName"),
        agency.name.as("agencyName"),
        lf.fn.asArray(pi.image).as("images"),
        lf.fn.asArray(tech.name).as("technologies"),
        lf.fn.asArray(type.name).as("types")). 
        from(p).
        innerJoin(client, client.id.eq(p.client)).
        innerJoin(agency, agency.id.eq(p.agency)).
        innerJoin(ptech, ptech.project.eq(p.id)).
        innerJoin(ptype, ptype.project.eq(p.id)).
        innerJoin(tech, tech.id.eq(ptech.technology)).
        innerJoin(type, type.id.eq(ptype.type)).
        innerJoin(pi, pi.project.eq(p.id)).
        where(p.show.eq(true)).
        orderBy(p.startDate, lf.Order.DESC).
        groupBy(p.id);
    } catch(e) {
        console.error(e);
    }
    
    
    return query.exec();
    
}
