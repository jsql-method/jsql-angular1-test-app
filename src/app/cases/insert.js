(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .factory('InsertCases', ['jsql', Cases]);

    /**
     * @ngInject
     */
    function Cases(jsql) {

        var cases = {};

        /**
         * Inserting SQL
         * @Expect Success
         */
        cases['Insert 1'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.insert("insert into person (id, name, surname, age) values (nextval('hibernate_sequence'), :name, :surname, :age)")
                    .params({
                        name: 'Mirek',
                        surname: 'Wołyński',
                        age: 38
                    })
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

        cases['Insert 2 niepoprawne zapytanie'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.insert("insert into ludzie (ids, imie, surname, age) values (nextval('hibernate_sequence'), :names, :surname, :age)")
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

        cases['Insert 3 puste zapytanie'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.insert("")
                    .then(function (result) {
                        console.log(result);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('success');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('success');
            }


        };

        cases['Insert 4 imie podane w cudzyslowiu'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.insert("insert into person (name) values ('Zbyszek')")
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

        cases['Insert 5 imie podane BEZ cudyslowiu'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {

                jsql.insert("insert into person (name) values (Zbyszek)")
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