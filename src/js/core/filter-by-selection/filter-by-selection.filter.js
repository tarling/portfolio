define([
    "../core.module"
],function(module){

    function mapSelections(item){
        return item.id
    };

    module.filter('filterBySelection', ['$filter', function($filter){
      return function(projects, selectedTechs, selectedTypes) {

        if (!(projects && selectedTechs && selectedTypes)) return [];
          
        var techs = selectedTechs.map(mapSelections);
        var types = selectedTypes.map(mapSelections);
        
        return projects.filter(function(project){
        
            return project.technologies.some(function(tech){
                return techs.indexOf(tech) != -1;
            });
        
        }).filter(function(project){
        
            return project.types.some(function(type){
                return types.indexOf(type) != -1;
            });
        
        });;
      }
    }]);

})