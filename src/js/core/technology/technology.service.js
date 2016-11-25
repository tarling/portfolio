define([
    "./technology.module"
],function(module){

    module.
    factory('Technology', ['$http', '$q', 
        function($http, $q) {
            var technologies;
            return {
                get:function(){
                    if (technologies)
                    {
                        //if items has already been defined, reuse it
                        var deferred = $q.defer();
                        deferred.resolve(technologies);
                        return deferred.promise;
                    } else {
                        return $http.get('json/technologies.json').then(function(response){
                            technologies = response.data;
                            return technologies;
                        });
                    }
                }
            }
        }
    ]);

})