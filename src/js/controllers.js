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
            
          var p1 = $http.get('json/technologies.json').then(function(response){  
              $scope.technologies = response.data;
              return $q.defer();  
          });
            
          var p2 = $http.get('json/types.json').then(function(response){  
              $scope.types = response.data;
              return $q.defer();  
          });
            
          var p3 = $http.get('json/projects.json').then(function(response){
            $scope.projects = response.data.map(function(item){
                item.project.startDate = new Date(item.project.startDate);
				item.project.endDate = new Date(item.project.endDate);
                return item;
            });
            console.log("projects", $scope.projects);
            return $q.defer();
          });
            
          $q.all([p1,p2,p3]).then(function(){
            console.log("all done");
              
            $scope.$broadcast(constants.READY);
              
            update();
          });
            
            $scope.selectedTechs = [];
            $scope.selectedTypes = [];
            $scope.projects = [];
          
          
    }]);
    
    app.controller(
		"filtersController",
		['$scope', function($scope){
	
        $scope.filterOptions = {displayProp: 'name', dynamicTitle: false, idProp: 'name', scrollable: true};

        $scope.techFilterTexts = {buttonDefaultText: 'Technologies'};
        $scope.typeFilterTexts = {buttonDefaultText: 'Types'};
            
        $scope.$on(constants.READY, function(){
            $scope.$parent.selectedTechs = $scope.technologies.map(function(item){return {id:item.name}});
            $scope.$parent.selectedTypes = $scope.types.map(function(item){return {id:item.name}});
            
            console.log("$scope.selectedTechs", $scope.$parent.selectedTechs);
            console.log("$scope.selectedTypes", $scope.$parent.selectedTypes);
        });
		
    }]);
    
    
    app.controller(
		"listController",
		['$scope', function($scope){
	
        $scope.isNullDate = function(d) {
            //console.log("isNullDate", d, d.valueOf(), d.valueOf() == 0);
            return d.valueOf() == 0;
        }
          
          
            
    }]);
    
    
});