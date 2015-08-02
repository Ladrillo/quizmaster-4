(function () {
    "use strict";

    angular.module('quizMaster')
        .controller('editController', function ($scope, $log, subjects, keywords, quizes) {
            $scope.subjectSelection = [];
            $scope.keywordSelection = [];
            $scope.falsies = [];
            $scope.truthies = [];
            $scope.subjectsList = subjects.list;
            $scope.keywordsList = keywords.list;
            $scope.quizesList = quizes.list;
            $scope.subjectChecked = $scope.subjectSelection.length === 0;
            $scope.keywordChecked = $scope.keywordSelection.length === 0;
            $scope.pertinentKeywords = keywords.pertinentKeywords;




            // HERE WE HAVE THE FUNCTIONS THAT 'GET' THE CHECKED SUBJECTS AND KEYWORDS
            $scope.toggleSubjectSelection = function (subjectName) {
                var idx = $scope.subjectSelection.indexOf(subjectName);
                if (idx > -1) {
                    $scope.subjectSelection.splice(idx, 1);
                }
                else {
                    $scope.subjectSelection.push(subjectName);
                }
                $scope.subjectChecked = $scope.subjectSelection.length === 0;
            };

            $scope.toggleKeywordSelection = function (keywordName) {
                var idx = $scope.keywordSelection.indexOf(keywordName);
                if (idx > -1) {
                    $scope.keywordSelection.splice(idx, 1);
                }
                else {
                    $scope.keywordSelection.push(keywordName);
                }
                $scope.keywordChecked = $scope.keywordSelection.length === 0;
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
                var subjectSelection = [];
                $scope.subjectSelection.forEach(function (subject) { return subjectSelection.push(subject); });
                var exists = keywords.list.some(function (keywordObj) { return keywordObj.name === $scope.newKeywordName; });

                if ($scope.newKeywordForm.$valid && !exists) {
                    $log.info('Form is valid');
                    keywords.list.push(
                        {
                            name: $scope.newKeywordName,
                            subjects: subjectSelection
                        });
                    $scope.newKeywordName = '';
                }
                else {
                    $log.error('Form is not valid');
                }
            };

            $scope.addNewTruthy = function (truthy) {
                $scope.truthies.push(truthy);
                $scope.newTruthy = '';
            };

            $scope.addNewFalsy = function (falsy) {
                $scope.falsies.push(falsy);
                $scope.newFalsy = '';
            };

            $scope.addNewQuiz = function () {
                $scope.keywordSelection.forEach(function (keyword) {
                    quizes.list.push(
                        {
                            stem: ,
                            truthy: ,
                            falsey: ,
                            keywords: [
                                



                            ]
                        });


                });
            };
// [
//                 {
//                     stem: "Javascript...",
//                     truthy: ["rocks!", "has function scope."],
//                     falsey: ["is class-based.", "has block scope."],
//                     keywords: [
//                         {
//                             name: "JavaScript",
//                             subjects: ["Computer Science"]
//                         },
//                         {
//                             name: "this",
//                             subjects: ["Computer Science"]
//                         },
//                         {
//                             name: "Closures",
//                             subjects: ["Computer Science"]
//                         }]
//
//
                });

        // END OF CONTROLLER 'editController.js'
} ());