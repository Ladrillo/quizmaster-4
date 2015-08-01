(function () {
    "use strict";

    angular.module('quizMaster')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/edit');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'components/home/homeTemplate.html',
                    controller: 'homeController'
                })
                .state('edit', {
                    url: '/edit',
                    templateUrl: 'components/edit/editTemplate.html',
                    controller: 'editController'
                });
        });


} ());