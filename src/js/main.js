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
      , "tabletop": "../lib/tabletop"
    }
});

require( [
    "angularjs"
    ,"lovefield"
    ,"./fetch-sheets-data"
    ,"./data-service"
  ], function(angular, lovefield, fetchSheetsData, dataService) {
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
          
          dataService.init(fetchSheetsData)
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
