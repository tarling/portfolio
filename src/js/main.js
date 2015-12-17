require.config({
    "shim" : {
        "angularjs" : {
          exports: "angular"
        },
        "angularjs-dropdown-multiselect" : {
            deps: ["angularjs","lodash"]
        }
    }
    ,"paths": {
        "angularjs": "../../bower_components/angular/angular.min"
        ,"lodash": "../../bower_components/lodash/dist/lodash.min"
        ,"angularjs-dropdown-multiselect": "../../bower_components/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min"
    }
});

require( [
    "angularjs"
    ,"./app"
    ,"./constants"
    ,"./controllers"
    ,"./filters"
    ,"lodash"
  ], function(angular, app, constants) {
        
    angular.bootstrap(document, [constants.APP_NAME]);
    
  });
