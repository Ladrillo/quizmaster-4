(function () {
    "use strict";

    angular.module('quizMaster')
        .config(function ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise('/edit');

            $stateProvider
                .state('demo', {
                    url: '/demo',
                    templateUrl: 'components/demo/demoTemplate.html',
                    controller: 'demoController'
                })
                .state('edit', {
                    url: '/edit',
                    templateUrl: 'components/edit/editTemplate.html',
                    controller: 'editController'
                });
        });


} ());