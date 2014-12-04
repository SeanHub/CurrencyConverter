angular.module('app').directive('container', function () {
    return {
        controller: 'container',
        restrict: 'E',
        templateUrl: 'views/container.tpl.html'
    };
});