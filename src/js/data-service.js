define(['./app', './constants'],function(app, constants){
	
	app.factory(constants.dataService, 
        ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
        var items;
        return {
            getData:function(){
                if (items)
                {
                    //if items has already been defined, reuse it
                    var deferred = $q.defer();
                    deferred.resolve(items);
                    return deferred.promise;
                } else {
                    return $http.get('json/projects.json').then(function(response){
                        items = response.data.map(function(item){
                            item.project.startDate = new Date(item.project.startDate);
                            item.project.endDate = new Date(item.project.endDate);
                            return item;
                        });
                        //notify app that the data has loaded
                        $rootScope.$broadcast(constants.dataLoaded);
                        
                        return items;
                    });
                }
            }
        }
    }]);
	
});