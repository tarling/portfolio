define([
	'./app'
],function(app){
	
	app.filter('formatDescription', ['$filter', '$sce', function($filter, $sce){
      return function(desc) {
        //return $sce.trustAsHtml(desc.replace(/\n/gi, '</p><p>'));
        return desc.replace(/\n/gi, '</p><p>');
      }
    }]);
	
});