define([
    "angular"
    ,"./project/project.module"
    ,"./project/project.service"
    ,"./technology/technology.module"
    ,"./technology/technology.service"
    ,"./type/type.module"
    ,"./type/type.service"
],function(angular){

    return angular.module('core', [
        'core.project',
        'core.technology',
        'core.type'    
    ]);

})