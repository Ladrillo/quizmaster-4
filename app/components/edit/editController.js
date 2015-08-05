(function () {
    "use strict";

    angular.module('quizMaster')
        .controller('editController', function ($scope, $log, subjects, keywords, quizes) {
            $scope.subjectSelection = "";
            $scope.keywordSelection = [];
            $scope.newStem = "";
            $scope.falsies = [];
            $scope.truthies = [];
            $scope.subjectsList = subjects.list;
            $scope.keywordsList = keywords.list;
            $scope.quizesList = quizes.list;
            // trying to make firebase work:
            $scope.submitQuiz = quizes.submitQuiz;




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
                    subjects.list.push($scope.newSubjectName);
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
                    keywords.list.push(
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



            // HERE ARE THE FUNCTIONS THAT DEAL WITH ADDING THE NEW QUIZ TO THE SERVICE
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
                // testing firebase:
                this.submitQuiz({
                        stem: $scope.newStem,
                        truthies: $scope.truthies,
                        falsies: $scope.falsies,
                        keywords: getRealKeywords($scope.keywordSelection)
                    });

                quizes.list.push(
                    {
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



        // END OF CONTROLLER 'editController.js'
        });
} ());