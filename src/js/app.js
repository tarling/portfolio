define(["angularjs"
    ,"./constants"
    ,"angular-route"
    ,"angular-sanitize"
],function(angular, constants){

    return angular.module(constants.APP_NAME, ['ngRoute', 'ngSanitize']);
});