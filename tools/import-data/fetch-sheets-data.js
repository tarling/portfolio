var Tabletop = require('tabletop');
	
var sheetsUrl = "https://docs.google.com/spreadsheets/d/1JKIhT87Gw5axIdyHd8KtmN4qU4_1g2zTTcD1m4yEZ4s/pubhtml";

module.exports = function(){

    var promise = new Promise(function(resolve, reject){
        Tabletop.init({ 
            key: sheetsUrl,
            callback: function(models) {

                var keys = Object.keys(models);
                var tableData = keys.map(function(key){
                    var model = models[key];
                    return {
                        name: model.name,
                        data: model.elements
                    }
                });
                resolve(tableData);
            }
        });
    });

    return promise;
}