(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('HomeController', ['$scope',  'Cases', HomeController]);

    /**
     * @ngInject
     */
    function HomeController($scope, Cases) {
        var vm = this;

        vm.results = Cases.results;

        Cases.cases[Cases.names.caseName1]();

    }
})(angular);