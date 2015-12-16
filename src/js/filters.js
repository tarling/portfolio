define(["./app"], function(app){
    
    function intersects(array1, array2) {
        return array1.filter(function(n) {
            return array2.indexOf(n) != -1
        });   
    }

    app.filter('filterBySelection', function(){
        
        
        
      return function(projects, selectedTechs, selectedTypes) {
          
        var techs = selectedTechs.map(function(item){return item.id});
        var types = selectedTypes.map(function(item){return item.id});
        
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
    });


});