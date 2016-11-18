require.config({
    "shim" : {
        "angularjs" : {
          exports: "angular"
          , deps: ["jquery"]
        }
        ,"angularjs-dropdown-multiselect" : {
            deps: ["angularjs","lodash"]
        }
        ,"angular-animate" : {
            deps: ["angularjs"]
        }
        ,"bootstrap" : {
            deps: ["jquery"]
        }
        ,"jquery.easing" : {
            deps: ["jquery"]
        }
    }
    ,"paths": {
        "angularjs": "../../bower_components/angular/angular.min"
        ,"jquery": "../../bower_components/jquery/dist/jquery.min"
        ,"lodash": "../../bower_components/lodash/dist/lodash.min"
        ,"angularjs-dropdown-multiselect": "../../bower_components/angularjs-dropdown-multiselect/dist/angularjs-dropdown-multiselect.min"
        ,"angular-animate": "../../bower_components/angular-animate/angular-animate.min"
        ,"jqBootstrapValidation": "../../bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min"
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
    ,"./filters"
    ,"./freelancer"
    ,"./contact-me"
    ,"lodash"
  ], function(angular, $, app, constants) {
        
    angular.bootstrap(document, [constants.APP_NAME]);
    
  });
