define([
    "./project.module"
],function(module){

    module.
    factory('Project', ['$http', '$q', 
        function($http, $q) {
            var projects;
            return {
                get:function(){
                    if (projects)
                    {
                        //if items has already been defined, reuse it
                        var deferred = $q.defer();
                        deferred.resolve(projects);
                        return deferred.promise;
                    } else {
                        return $http.get('json/projects.json').then(function(response){
                            projects = response.data.map(function(item){
                                item.project.startDate = new Date(item.project.startDate);
                                item.project.endDate = new Date(item.project.endDate);
                                return item;
                            });
                            return projects;
                        });
                    }
                }
            }
        }
    ]);

})