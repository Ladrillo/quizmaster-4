(function () {
    "use strict";

    angular.module('quizMaster')
        .service('quizes', function () {
            this.list = [
                {
                    stem: "Javascript...",
                    truthy: ["rocks!", "has function scope."],
                    falsey: ["is class-based.", "has block scope."],
                    keywords: [
                        {
                            name: "JavaScript",
                            subjects: ["Computer Science"]
                        },
                        {
                            name: "this",
                            subjects: ["Computer Science"]
                        },
                        {
                            name: "Closures",
                            subjects: ["Computer Science"]
                        }]
                },
                {
                    stem: "The present perfect...",
                    truthy: ["is used to talk about a present situation or condition.", "uses 'have' or 'has' as auxiliary verbs."],
                    falsey: ["is used to tell stories about the past", "uses 'had' as an auxiliary verb."],
                    keywords: [
                        {
                            name: "Present Perfect",
                            subjects: ["English as a Foreign Language"]
                        },
                        {
                            name: "The tense system",
                            subjects: ["English as a Foreign Language"]
                        }]
                }
            ];
        });


} ());