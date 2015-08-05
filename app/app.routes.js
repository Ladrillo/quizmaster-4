(function () {
    "use strict";

    angular.module('quizMaster')
        .config(function ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise('/edit');

            $stateProvider
                .state('demo', {
                    url: '/demo',
                    templateUrl: 'components/demo/demoTemplate.html',
                    controller: 'demoController',
                    resolve: {
                        quizesList: function ($firebase, $firebaseArray, $firebaseObject) {
                            var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                            var ref = new Firebase(firebaseRoot + "/quizes");
                            var quizes = $firebaseArray(ref);
                            return quizes.$loaded()
                                .then(function (data) {
                                    return data;
                                });
                        }
                    }
                })
                .state('edit', {
                    url: '/edit',
                    templateUrl: 'components/edit/editTemplate.html',
                    controller: 'editController'
                });
        });


} ());