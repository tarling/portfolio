define([
    "../core.module"
],function(module){

    module.filter('formatDescription', ['$filter', function($filter){
      return function(desc) {
        return desc ? desc.replace(/\n/gi, '</p><p>') : '';
      }
    }]);

})