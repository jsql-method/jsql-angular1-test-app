(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .factory('SelectCases', ['jsql', Cases]);

    /**
     * @ngInject
     */
    function Cases(jsql) {

        var cases = {};

        /**
         * Selecting SQL
         * @Expect Success
         */
        cases['Select 1'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("select * from person").then(function (result) {
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

        cases['Select 2 zmiana podwojnego cudzyslowu na pojedynczy'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select('select * from person').then(function (result) {
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

        cases['Select 3 dodatkowe spacje i entery'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("select " +
                    "* from" +
                    " person").then(function (result) {
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

        cases['Select 4 zapytanie napisane duzymi lub malymi literami'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("SELECT * FROM person").then(function (result) {
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

        cases['Select 5 niepoprawne zapytanie'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("select member, from public.member").then(function (result) {
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

        cases['Select 6 z uzyciem where'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("select name from person where id=1").then(function (result) {
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

        cases['Select 7 z uzyciem innerjoin'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("SELECT price FROM car INNER JOIN person ON car.id=person.id").then(function (result) {
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

        cases['Select 8 puste zapytanie'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("").then(function (result) {
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

        cases['Select 9 niepoprawna składnia zapytania'] =  function (callBack) {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                callBack(status, duration);
            };

            try {
                jsql.select("fddsf234 3juy23d").then(function (result) {
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