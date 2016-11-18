define([
  './app'
  , './constants'
],function(app, constants){
	app.config(["$routeProvider", function($routeProvider){
      $routeProvider.
      when("/list", {
        templateUrl: "partials/_list.html",
        controller: constants.listController,
        bodyClass: 'list',
        resolve: {
          projects: [constants.dataService, function(dataService) {
            return dataService.getData();
          }]
        }
      }).
      when("/details/:itemIdx", {
        templateUrl: "partials/_details.html",
        controller: constants.detailsController,
        bodyClass: 'details',
        resolve: {
          projects: [constants.dataService, function(dataService) {
            return dataService.getData();
          }]
        }
      }).
      otherwise({
        redirectTo: "/list"
      })
    }]);
});