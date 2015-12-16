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
        "angularjs": "../lib/angular"
        ,"lodash": "../lib/lodash"
        ,"angularjs-dropdown-multiselect": "../lib/angularjs-dropdown-multiselect"
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
