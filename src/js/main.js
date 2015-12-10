require.config({
    "shim" : {
        "angularjs" : {
          exports: "angular"
        }
    }
    ,"paths": {
      "angularjs": "../lib/angular"
    }
});

require( [
    "angularjs"
  ], function(angular) {
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
          
          $scope.isNullDate = function(d) {
            console.log("isNullDate", d, d.valueOf(), d.valueOf() == 0);
            return d.valueOf() == 0;
          }
          
          $http.get('json/projects.json').then(function(response){
            $scope.projects = response.data.map(function(item){
                item.project.startDate = new Date(item.project.startDate);
				item.project.endDate = new Date(item.project.endDate);
                return item;
            });
            console.log("projects", $scope.projects);
            update();
          });
          
          
        }]);
        
    angular.bootstrap(document, [appName]);
  });
