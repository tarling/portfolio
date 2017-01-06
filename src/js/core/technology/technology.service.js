define([
    "./technology.module"
],function(module){

    module.
    factory('Technology', ['$http', '$q', 
        function($http, $q) {
            var list;
            return {
                all:function(){
                    if (list)
                    {
                        //if items has already been defined, reuse it
                        var deferred = $q.defer();
                        deferred.resolve(list);
                        return deferred.promise;
                    } else {
                        return $http.get('json/technologies.json').then(function(response){
                            list = response.data;
                            return list;
                        });
                    }
                }
            }
        }
    ]);

})