(function () {
    "use strict";

    angular.module('quizMaster')
        .service('quizes', function () {
            this.list = [
                {
                    stem: "Javascript...",
                    truthies: ["rocks!", "has function scope."],
                    falsies: ["is class-based.", "has block scope."],
                    keywords: [
                        {
                            name: "JavaScript",
                            subject: "Computer Science"
                        },
                        {
                            name: "this",
                            subject: "Computer Science"
                        },
                        {
                            name: "Closures",
                            subject: "Computer Science"
                        }]
                },
                {
                    stem: "The present perfect...",
                    truthies: ["is used to talk about a present situation or condition.", "uses 'have' or 'has' as auxiliary verbs."],
                    falsies: ["is used to tell stories about the past", "uses 'had' as an auxiliary verb."],
                    keywords: [
                        {
                            name: "Present Perfect",
                            subject: "English as a Foreign Language"
                        },
                        {
                            name: "The tense system",
                            subject: "English as a Foreign Language"
                        }]
                }
            ];
        });


} ());