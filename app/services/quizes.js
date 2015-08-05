(function () {
    "use strict";

    angular.module('quizMaster')
        .service('quizes', function ($firebaseArray, $firebaseObject) {

            // code to be able to submit new quizes
            var firebaseRoot = "https://quizmaster-4.firebaseio.com/";
            var ref = new Firebase(firebaseRoot + "/quizes");
            var quizes = $firebaseArray(ref);

            this.submitQuiz = function (quiz) {
                quizes.$add(quiz);
            };
        });



} ());