define([
    './app.module'
],function(app){

    app.config(['$routeProvider', function($routeProvider){
      $routeProvider.
      when('/list', {
        template: '<project-list></project-list>',
        bodyClass: 'list'
      }).
      when('/details/:itemIdx', {
        template: '<project-details></project-details>',
        bodyClass: 'details'
      }).
      otherwise({
        redirectTo: '/list'
      })
    }]);


});