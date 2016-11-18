define([
    "./app"
    , "./constants"
],function(app, constants){
    
    app.controller(
        constants.appController,
        ['$scope', '$http', '$q', function($scope, $http, $q){
          
        $scope.$on('$routeChangeSuccess', function(event, newVal, oldVal) {
            if (oldVal !== newVal) {
                //when route changes, add class to body
                $scope.routeClassName = $route.current.bodyClass;
            }
        });
          
          
    }]);

    app.controller(
		constants.listController,
		['$scope', 'projects', function($scope, projects){

            $scope.projects = projects;
    }]);

    app.controller(
		constants.detailsController,
		['$scope', '$routeParams','$location', 'projects', function($scope, $routeParams, $location, projects){

            $scope.isNullDate = function(d) {
                return d ? d.valueOf() == 0 : false;
            }

            //itemIdx is defined in routes configuration
			$scope.project = projects[$routeParams.itemIdx];
			
			$scope.goBack = function() {
                console.log("hey");
				$location.path('list');
			}
    }]);
    
    
});