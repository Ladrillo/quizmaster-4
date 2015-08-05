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
                        quizesList: function ($firebaseArray, $firebaseObject) {
                            var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                            var ref = new Firebase(firebaseRoot + '/quizes');
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
                    controller: 'editController',
                    resolve: {
                        subjectsList: function ($firebaseArray, $firebaseObject) {
                            var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                            var ref = new Firebase(firebaseRoot + '/subjects');
                            var subjects = $firebaseArray(ref);
                            return subjects.$loaded()
                                .then(function (data) {
                                    return data;
                                });
                        },

                        subjectSubmit: function ($firebaseArray, $firebaseObject) {
                            return function (subject) {
                                var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                                var ref = new Firebase(firebaseRoot + '/subjects');
                                var subjects = $firebaseArray(ref);
                                subjects.$add(subject);
                            };
                        },

                        keywordsList: function ($firebaseArray, $firebaseObject) {
                            var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                            var ref = new Firebase(firebaseRoot + '/keywords');
                            var keywords = $firebaseArray(ref);
                            return keywords.$loaded()
                                .then(function (data) {
                                    return data;
                                });
                        },

                        keywordSubmit: function ($firebaseArray, $firebaseObject) {
                            return function (keyword) {
                                var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                                var ref = new Firebase(firebaseRoot + '/keywords');
                                var keywords = $firebaseArray(ref);
                                keywords.$add(keyword);
                            };
                        },

                        quizesList: function ($firebaseArray, $firebaseObject) {
                            var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                            var ref = new Firebase(firebaseRoot + '/quizes');
                            var quizes = $firebaseArray(ref);
                            return quizes.$loaded()
                                .then(function (data) {
                                    return data;
                                });
                        },

                        quizSubmit: function ($firebaseArray, $firebaseObject) {
                            return function (quiz) {
                                var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
                                var ref = new Firebase(firebaseRoot + '/quizes');
                                var quizes = $firebaseArray(ref);
                                quizes.$add(quiz);
                            };
                        }
                    }
                });
        });


} ());