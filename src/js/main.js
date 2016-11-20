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
        ,"angular-route" : {
            deps: ["angularjs"]
        }
        ,"angular-sanitize" : {
            deps: ["angularjs"]
        }
    }
    ,"paths": {
        "requireLib": "../../bower_components/requirejs/require"
        ,"angularjs": "../../bower_components/angular/angular.min"
        ,"angular-route": "../../bower_components/angular-route/angular-route"
        ,"jquery": "../../bower_components/jquery/dist/jquery.min"
        ,"bootstrap": "../../bower_components/bootstrap/dist/js/bootstrap.min"
        ,"jquery.easing": "../../bower_components/jquery.easing/js/jquery.easing.min"
        ,"angular-sanitize": "../../bower_components/angular-sanitize/angular-sanitize.min"
    }
});

require( [
    "angularjs"
    ,"jquery"
    ,"./app"
    ,"./constants"
    ,"./controllers"
    ,"./data-service"
    ,"./filters"
    ,"./freelancer"
    ,"./routes"
  ], function(angular, $, app, constants) {
        
    angular.bootstrap(document, [constants.APP_NAME]);
    
  });
