define([
    "./app"
    , "./constants"
],function(app, constants){
    
    app.controller(
        'appController',
        ['$scope', '$http', '$q', function($scope, $http, $q){
          
        function update() {
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        }

        $http.get('json/projects.json').then(function(response){
            $scope.projects = response.data.map(function(item){
                item.project.startDate = new Date(item.project.startDate);
                item.project.endDate = new Date(item.project.endDate);
                return item;
            });
            $scope.$broadcast(constants.READY);

            update();
        });

        $scope.selectedTechs = [];
        $scope.selectedTypes = [];
        $scope.projects = [];
          
          
    }]);

    app.controller(
		"listController",
		['$scope', function($scope){

            $scope.isNullDate = function(d) {
                return d.valueOf() == 0;
            }

            $scope.showDetails = function(project) {

                console.log("item clicked", project);

                console.log("this", this);
                console.log("$scope", $scope);

                $scope.$parent.project = project;

                $("#portfolioModal").modal();

            }
    }]);

    app.controller(
		"modalController",
		['$scope', function($scope){

            $scope.isNullDate = function(d) {
                return d ? d.valueOf() == 0 : false;
            }
    }]);
    
    
});