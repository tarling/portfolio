require.config({
    "shim" : {
        "angular" : {
          exports: "angular"
          , deps: ["jquery"]
        }
        ,"bootstrap" : {
            deps: ["jquery"]
        }
        ,"jquery.easing" : {
            deps: ["jquery"]
        }
        ,"angular-route" : {
            deps: ["angular"]
        }
        ,"angular-sanitize" : {
            deps: ["angular"]
        }
    }
    ,"paths": {
        "requireLib": "../../bower_components/requirejs/require"
        ,"angular": "../../bower_components/angular/angular.min"
        ,"angular-route": "../../bower_components/angular-route/angular-route"
        ,"angular-sanitize": "../../bower_components/angular-sanitize/angular-sanitize.min"
        ,"jquery": "../../bower_components/jquery/dist/jquery.min"
        ,"bootstrap": "../../bower_components/bootstrap/dist/js/bootstrap.min"
        ,"jquery.easing": "../../bower_components/jquery.easing/js/jquery.easing.min"
    }
});

require( [
    "angular"
    ,"jquery"
    ,"./app.module"
    ,"./app.config"
    ,"./app.controller"
    ,"./core/format-description/format-description.filter"
  ], function(angular, $, app) {

    angular.bootstrap(document, [app.name]);
    
  });
