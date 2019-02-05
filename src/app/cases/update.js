(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .factory('UpdateCases', ['jsql', Cases]);

    /**
     * @ngInject
     */
    function Cases(jsql) {

        var cases = {};
        /**
         * Updating SQL
         * @Expect Success
         */
        cases['Update 1 z parametrami'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.update("update person set age = 40 where age > :age")
                    .param('age', 30)
                    .then(function (result) {
                        console.log(result);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        cases['Update 2 niepoprawna skladnia zapytania'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.update("update person frddsasa sesaaslect sedsare age > :age")

                    .then(function (result) {
                        console.log(result);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        cases['Update 3 niepoprawne zapytanie'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.update("update ludzie set wiek = 40")
                    .param('age', 30)
                    .then(function (result) {
                        console.log(result);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        cases['Update 4 niepoprawna skladnia zapytana'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.update("update person frdsa sedaslect set = 40 whedsare age > :ag")
                    .param('age', 30)
                    .then(function (result) {
                        console.log(result);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };


        return cases;


    }
})(angular);

