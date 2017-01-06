define([
    "./project-list.module"
],function(module){

    module.
    component(module.name, {
    templateUrl: 'js/project-list/project-list.template.html',
    controller: ['Project','Technology', 'Type',
      function(Project, Technology, Type) {
        var self = this;
        Project.all().then(function(projects){
          self.projects = projects;
        });
        Technology.all().then(function(technologies){
          self.technologies = technologies;
          self.selectedTechs = technologies.map(function(item){
              return {id:item.name}
          });
        });
        Type.all().then(function(types){
          self.types = types;
          self.selectedTypes = types.map(function(item){
              return {id:item.name}
          });
        });
      }
    ]
  });

})