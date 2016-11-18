define([
    "./app"
    , "./constants"
],function(app, constants){
    
    app.controller(
        constants.appController,
        ['$scope', '$route', function($scope, $route){
          
        var lastY;

        $scope.$on('$routeChangeSuccess', function(event, newVal, oldVal) {
            if (oldVal !== newVal) {
                //when route changes, add class to body
                $scope.routeClassName = $route.current.bodyClass;

                console.log("new", newVal);

                if ($route.current.bodyClass == 'details')
                {
                    lastY = $(window).scrollTop();
                    $(window).scrollTop($("#view").offset().top - $("#mainNav").outerHeight());
                } else {
                    if (lastY !== undefined)
                    {
                        $(window).scrollTop(lastY);
                    }
                }
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