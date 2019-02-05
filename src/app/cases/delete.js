(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .factory('DeleteCases', ['jsql', Cases]);

    /**
     * @ngInject
     */
    function Cases(jsql) {

        var cases = {};

        /**
         * Deleting SQL
         * @Expect Success
         */
        cases['Delete 1'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.remove("delete from person where age > :age")
                    .param('age', 50)
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

        cases['Delete 2'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.remove("delete from person where age = 30")
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

        cases['Delete 3 nieprawidlowe zapytanie'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.remove("delete from trees where hight = 10")
                    .param('age', 50)
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

        cases['Delete 4 zla skladnia zapytania'] = function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.remove("dedsadasom trees 443f3ight = 10")
                    .param('age', 50)
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