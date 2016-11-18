require.config({
    "shim" : {
        "angularjs" : {
          exports: "angular"
          , deps: ["jquery"]
        }
        ,"bootstrap" : {
            deps: ["jquery"]
        }
        ,"jquery.easing" : {
            deps: ["jquery"]
        }
    }
    ,"paths": {
        "requireLib": "../../bower_components/requirejs/require"
        ,"angularjs": "../../bower_components/angular/angular.min"
        ,"jquery": "../../bower_components/jquery/dist/jquery.min"
        ,"bootstrap": "../../bower_components/bootstrap/dist/js/bootstrap.min"
        ,"jquery.easing": "../..//bower_components/jquery.easing/js/jquery.easing.min"
    }
});

require( [
    "angularjs"
    ,"jquery"
    ,"./app"
    ,"./constants"
    ,"./controllers"
    ,"./freelancer"
  ], function(angular, $, app, constants) {
        
    angular.bootstrap(document, [constants.APP_NAME]);
    
  });
