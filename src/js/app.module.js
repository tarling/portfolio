define(["angular"
    ,"angular-route"
    ,"angular-sanitize"
    ,"./core/core.module"
    ,"./project-details/project-details.component"
    ,"./project-list/project-list.component"
    ,"./project-filters/project-filters.component"
],function(angular){

    return angular.module('PortfolioApp', [
        'ngRoute',
        'ngSanitize',
        'core',
        'projectList',
        'projectDetails',
        'projectFilters'
    ]);
});