(function () {
    "use strict";

    angular.module('quizMaster')
        .controller('demoController', function ($scope, keywords, subjects, quizes) {
            $scope.quizesList = quizes.list;
            $scope.selectedAnswers = [];
            $scope.allFalseClicked = false;

            (function () {
                for (var q in $scope.quizesList) {
                    var quiz = $scope.quizesList[q];
                    quiz.shuffledAnswers = shuffleArray([].concat(quiz.truthies, quiz.falsies));
                }
            } ());

            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            $scope.updateSelection = function (item) {
                var idx = $scope.selectedAnswers.indexOf(item);
                if (idx === -1) {
                    $scope.selectedAnswers.push(item);
                }
                else {
                    $scope.selectedAnswers.splice(idx, 1);
                }
                $scope.selectedAnswers.length !== 0 ? $scope.allFalseClicked = false : $scope.allFalseClicked = true;
            };

            $scope.isAnswerSelected = function (item) {
                return $scope.selectedAnswers.indexOf(item) === -1;
            };

            $scope.allFalse = function () {
                $scope.selectedAnswers = [];
                $scope.allFalseClicked = true;
            };






        });


} ());