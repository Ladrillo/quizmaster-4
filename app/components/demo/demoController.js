(function () {
    "use strict";

    angular.module('quizMaster')
        .controller('demoController', function ($scope, keywords, subjects, quizes) {
            // captures the list of quizes
            $scope.quizesList = quizes.list;

            // randomizing helper function
            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }

            // MAIN FUNCTION FOR GENERATING TEST START
            (function generateTest() {

                // initialize test object
                $scope.test = {};

                // randomize the order in which quizes will appear
                $scope.test.shuffledQuizes = (function () {
                    return shuffleArray($scope.quizesList);
                } ());

                // in each quiz, we mash together truthies and falsies and randomize order
                for (var qi in $scope.test.shuffledQuizes) {
                    var qz = $scope.test.shuffledQuizes[qi];
                    (function shuffledAnswers() {
                        qz.shuffledAnswers = shuffleArray([].concat(qz.truthies, qz.falsies));
                    } ());

                    // then we add the rest of the fields each quiz needs, for calculations
                    qz.selectedAnswers = [];
                    qz.submited = false;
                    qz.untouched = true;
                    qz.allFalseClicked = false;
                }

                // the test needs more fields, for calculations
                $scope.test.totalNumberOfQuizes = $scope.test.shuffledQuizes.length;
                $scope.test.submitedQuizes = [];
                $scope.test.submitedNumberOfQuizes = $scope.test.submitedQuizes.length;
                // $scope.test.remainingQuizes = $scope.test.shuffledQuizes;
                // $scope.test.remainingNumberOfQuizes =  $scope.test.remainingQuizes.length;
                $scope.test.immediateFeedback = true;
                $scope.test.effectivity = 0;

                // returning the finished object
                return $scope.test;

            } ());
            // MAIN FUNCTION FOR GENERATING TEST END

            $scope.getPrintObject = function (object) {
                return JSON.stringify(object);
            };

            console.log($scope.getPrintObject($scope.test));
        });
    // END OF CONTROLLER



} ());


            //                 $scope.updateSelection = function (item) {
            //                     var idx = $scope.selectedAnswers.indexOf(item);
            //                     if (idx === -1) {
            //                         $scope.selectedAnswers.push(item);
            //                     }
            //                     else {
            //                         $scope.selectedAnswers.splice(idx, 1);
            //                     }
            //                     $scope.selectedAnswers.length !== 0 ? $scope.allFalseClicked = false : $scope.allFalseClicked = true;
            //                 };
            //
            //                 $scope.isAnswerSelected = function (item) {
            //                     return $scope.selectedAnswers.indexOf(item) === -1;
            //                 };
            //
            //                 $scope.allFalse = function () {
            //                     $scope.selectedAnswers = [];
            //                     $scope.allFalseClicked = true;
            //                 };
