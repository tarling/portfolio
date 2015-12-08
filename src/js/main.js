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
            return d.valueOf() == 0;
          }
          
          $http.get('json/projects.json').then(function(response){
            $scope.projects = response.data.map(function(item){
                item.startDate = new Date(item.startDate);
				item.endDate = new Date(item.endDate ? item.endDate : 0);
                return item;
            });
            update();
          });
          
          
        }]);
        
    angular.bootstrap(document, [appName]);
  });
