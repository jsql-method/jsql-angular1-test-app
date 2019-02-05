(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('HomeController', ['$scope',  'SelectCases', 'InsertCases', 'UpdateCases', 'DeleteCases', HomeController]);

    /**
     * @ngInject
     */
    function HomeController($scope, SelectCases, InsertCases, UpdateCases, DeleteCases) {
        var vm = this;

        vm.cases = {};
        vm.results = {};

        Object.assign(vm.cases, SelectCases);
        Object.assign(vm.cases, InsertCases);
        Object.assign(vm.cases, UpdateCases);
        Object.assign(vm.cases, DeleteCases);

        angular.forEach(vm.cases, function(caseObj, caseName){

            (function(caseObj, caseName){

                caseObj(function(status, duration){
                    console.log(vm.results);
                    vm.results[caseName] = { status: status, duration: duration };
                });

            })(caseObj, caseName);

        });

    }
})(angular);