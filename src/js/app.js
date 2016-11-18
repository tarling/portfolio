define(["angularjs"
    ,"./constants"
    ,"angular-route"
],function(angular, constants){

    return angular.module(constants.APP_NAME, ['ngRoute']);
});