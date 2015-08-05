(function () {
    "use strict";

    angular.module('quizMaster')
        .service('quizes', function () {
            this.list = [
                {
                    stem: "Javascript...",
                    truthies: ["supports objects.", "has function scope."],
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
                    stem: "Firebase...",
                    truthies: ["performs better with shallow data structures.", "supports easy authentication of users."],
                    falsies: ["is generally used for larger projects.", "Currently lacks web-sockets support."],
                    keywords: [
                        {
                            name: "Firebase",
                            subject: "Computer Science"
                        },
                        {
                            name: "Databases",
                            subject: "Computer Science"
                        }]
                }
            ];
        });


} ());