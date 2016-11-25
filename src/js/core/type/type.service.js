define([
    "./type.module"
],function(module){

    module.
    factory('Type', ['$http', '$q', 
        function($http, $q) {
            var types;
            return {
                get:function(){
                    if (types)
                    {
                        //if items has already been defined, reuse it
                        var deferred = $q.defer();
                        deferred.resolve(types);
                        return deferred.promise;
                    } else {
                        return $http.get('json/types.json').then(function(response){
                            types = response.data;
                            return types;
                        });
                    }
                }
            }
        }
    ]);

})