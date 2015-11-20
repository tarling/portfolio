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
    ,"fetch-data"
  ], function(angular, lovefield, fetchData) {
    console.log("angularjs", angular);
    console.log("lovefield", lovefield);
    
    var appName = 'myApp'; 
    var app = angular.module(appName, []);
    app.controller(
        'appController',
        ['$scope', '$http', function($scope, $http){
          fetchData($http).then(function(data){
            console.log("data", data);
          });
        }]);
        
    angular.bootstrap(document, [appName]);
  });
