(function () {
    "use strict";

    angular.module('quizMaster')
        .controller('editController', function (
            $scope,
            $log,
            // services:
            subjects,
            keywords,
            quizes,
            // resolved in router:
            subjectsList,
            subjectSubmit,
            keywordsList,
            keywordSubmit,
            quizesList,
            quizSubmit
            // end of injected dependencies
            ) {
            // we put our injected resolved items into scope:
            $scope.subjectsList = subjectsList;
            $scope.subjectSubmit = subjectSubmit;
            $scope.keywordsList = keywordsList;
            $scope.keywordSubmit = keywordSubmit;
            $scope.quizesList = quizesList;
            $scope.quizSubmit = quizSubmit;
            // initialazing sane values
            $scope.subjectSelection = "";
            $scope.keywordSelection = [];
            $scope.newStem = "";
            $scope.falsies = [];
            $scope.truthies = [];


            // HERE WE HAVE THE FUNCTIONS THAT 'GET' THE CHECKED SUBJECTS AND KEYWORDS
            function checkChecked() {
                $scope.subjectChecked = $scope.subjectSelection !== "";
                $scope.bothChecked = $scope.subjectSelection !== "" && $scope.keywordSelection.length !== 0;
            }

            function resetKeywordsForm() {
                if ($scope.subjectSelection === "") $scope.keywordSelection = [];
            }

            $scope.noSubject = function () {
                return $scope.subjectSelection === "";
            };

            $scope.toggleSubjectSelection = function (subjectName) {
                if ($scope.subjectSelection) {
                    $scope.subjectSelection = "";
                }
                else {
                    $scope.subjectSelection = subjectName;
                }
                checkChecked();
                resetKeywordsForm();
            };

            $scope.toggleKeywordSelection = function (keywordName) {
                var idx = $scope.keywordSelection.indexOf(keywordName);
                if (idx > -1) {
                    $scope.keywordSelection.splice(idx, 1);
                }
                else {
                    $scope.keywordSelection.push(keywordName);
                }
                checkChecked();
            };



            // HERE ARE THE FUNCTIONS THAT DEAL WITH ADDING NEW SUBJECTS AND KEYWORDS
            $scope.addNewSubject = function () {
                var exists = subjects.list.indexOf($scope.newSubjectName) !== -1;

                if ($scope.newSubjectForm.$valid && !exists) {
                    $log.info('Form is valid');
                    subjectSubmit({name: $scope.newSubjectName});
                    $scope.newSubjectName = '';
                }
                else {
                    $log.error('Form is not valid');
                }
            };

            $scope.addNewKeyword = function () {
                var exists = keywords.list.some(function (kwrd) {
                    return kwrd.name === $scope.newKeywordName && kwrd.subject === $scope.subjectSelection; });

                if ($scope.newKeywordForm.$valid && !exists) {
                    $log.info('Form is valid');
                    keywordSubmit(
                        {
                            name: $scope.newKeywordName,
                            subject: $scope.subjectSelection
                        });
                    $scope.newKeywordName = '';
                }
                else {
                    $log.error('Form is not valid');
                }
            };



            // HERE ARE THE FUNCTIONS THAT DEAL WITH ADDING THE NEW QUIZ TO FIREBASE
            $scope.addNewTruthy = function (truthy) {
                if ($scope.truthies.indexOf(truthy) === -1 && truthy.length >= 1) {
                    $scope.truthies.push(truthy);
                    $scope.newTruthy = '';
                }
            };

            $scope.addNewFalsy = function (falsy) {
                if ($scope.falsies.indexOf(falsy) === -1 && falsy.length >= 1) {
                    $scope.falsies.push(falsy);
                    $scope.newFalsy = '';
                }
            };

            $scope.remove = function (element, array) {
                var idx = array.indexOf(element);
                if (idx !== -1) {
                    array.splice(idx, 1);
                }
            };

            var getRealKeywords = function (keywordsArray) {
                return keywords.list.filter(function (kw) {
                    return keywordsArray.indexOf(kw.name) !== -1;
                });
            };

            $scope.addNewQuiz = function () {
                // testing firebase, using quizSubmit() that comes from routing
                quizSubmit({
                        stem: $scope.newStem,
                        truthies: $scope.truthies,
                        falsies: $scope.falsies,
                        keywords: getRealKeywords($scope.keywordSelection)
                    });
                $scope.truthies = [];
                $scope.falsies = [];
                $scope.newStem = "";
            };



            // HERE WE SET THE CONDITIONS TO DISABLE THE CREATE QUIZ BUTTON
            $scope.stemFieldAdecuate = function () {
                return !!$scope.newStem;
            };

            $scope.quizFormAdecuate = function () {
                return ($scope.truthies.length > 0) && ($scope.falsies.length > 0) && ($scope.newStem.length >= 3);
            };


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

        // END OF CONTROLLER 'editController.js'
        });
} ());