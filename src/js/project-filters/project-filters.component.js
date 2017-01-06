define([
    "./project-filters.module"
],function(module){

    module.
    component(module.name, {
    templateUrl: 'js/project-filters/project-filters.template.html',
    controller: ['$scope', 'Technology', 'Type', function($scope, Technology, Type){

        var self = this;

        this.filterOptions = {
            displayProp: 'name',
            dynamicTitle: false, 
            idProp: 'name', 
            scrollable: true
        };

        this.techFilterTexts = {
            buttonDefaultText: 'Technologies'
        };
        this.typeFilterTexts = {
            buttonDefaultText: 'Types'
        };

        this.parent = $scope.$parent.$ctrl;
    }]
  });
})