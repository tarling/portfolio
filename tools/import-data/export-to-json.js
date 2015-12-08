var fs = require('fs');

module.exports = function(json, file) {
    
    var promise = new Promise(function(resolve, reject){
        fs.writeFile(file, JSON.stringify(json) , function(err) {
            if(err) {
                reject(err);
            } else {
                resolve(); 
            }            
        }); 
    });

    return promise;
}

