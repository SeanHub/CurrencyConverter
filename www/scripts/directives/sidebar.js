angular.module('app').directive('sidebar', function () {
    return {
        controller: 'sidebar',
        restrict: 'E',
        templateUrl: 'views/sidebar.tpl.html'
    };
});