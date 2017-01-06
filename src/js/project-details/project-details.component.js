define([
    "./project-details.module"
],function(module){

    module.
    component(module.name, {
    templateUrl: 'js/project-details/project-details.template.html',
    controller: ['Project', '$scope', '$routeParams','$location', function(Project, $scope, $routeParams, $location){

        this.isNullDate = function(d) {
            return d ? d.valueOf() == 0 : false;
        }

        var self = this;
        Project.all()
        .then(function(projects){
            self.project = projects[$routeParams.itemIdx]
        })
        
        this.goBack = function() {
            $location.path('list');
        }
    }]
  });
})