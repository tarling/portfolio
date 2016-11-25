define([
    "./project-list.module"
],function(module){

    module.
    component(module.name, {
    templateUrl: 'js/project-list/project-list.template.html',
    controller: ['Project','Technology', 'Type',
      function(Project, Technology, Type) {
        var self = this;
        Project.get().then(function(projects){
          self.projects = projects;
        });
        Technology.get().then(function(technologies){
          self.technologies = technologies;
        });
        Type.get().then(function(types){
          self.types = types;
        });
      }
    ]
  });

})