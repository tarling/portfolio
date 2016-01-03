define(["angularjs"
    ,"./constants"
    ,"angularjs-dropdown-multiselect"
    ,"angular-animate"
],function(angular, constants){

    return angular.module(constants.APP_NAME, ['ngAnimate', 'angularjs-dropdown-multiselect']);

});