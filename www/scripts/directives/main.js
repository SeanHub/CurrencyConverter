angular.module('app').directive('main', function () {
    return {
        controller: 'main',
        restrict: 'E',
        templateUrl: 'views/main.tpl.html'
    };
});