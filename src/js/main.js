require.config({
    "shim" : {
        "angularjs" : {
          exports: "angular"
        },
        "lovefield" : {
          exports: "lf"
        }
    }
    ,"paths": {
      "angularjs": "../lib/angular"
      , "lovefield": "../lib/lovefield"
    }
});

require( [
    "angularjs"
    ,"lovefield"
    ,"./fetch-data"
    ,"./data-service"
  ], function(angular, lovefield, fetchData, dataService) {
    var appName = 'myApp'; 
    var app = angular.module(appName, []);
    app.controller(
        'appController',
        ['$scope', '$http', function($scope, $http){
          
          function update() {
            if(!$scope.$$phase) {
              $scope.$apply();
            }
          }
          
          dataService.init(fetchData.bind(0, $http))
            .then(function(){
              return dataService.getProjects();
            }).then(function(projectList){
              console.log("projectList", projectList);
              $scope.projects = projectList;
              update();
            });
        }]);
        
    angular.bootstrap(document, [appName]);
  });
