define([
    "./app.module"
],function(app){
    
    app.controller(
        'AppController',
        ['$scope', '$route', function($scope, $route){
          
        var lastY;
        $scope.$on('$routeChangeSuccess', function(event, newVal, oldVal) {
            if (oldVal !== newVal) {
                //when route changes, add class to body
                $scope.routeClassName = $route.current.bodyClass;

                if ($route.current.bodyClass == 'details')
                {
                    lastY = $(window).scrollTop();
                    
                    var viewEl = $("#view");
                    if (viewEl.length)
                    {
                        $(window).scrollTop(viewEl.offset().top - $("#mainNav").outerHeight());
                    }
                    
                } else {
                    if (lastY !== undefined)
                    {
                        $(window).scrollTop(lastY);
                    }
                }
            }
        });
          
          
    }]);
    
    
});