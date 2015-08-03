(function () {
    "use strict";

    angular.module('quizMaster')
        .service('keywords', function () {
            this.list = [
                {
                    name: "JavaScript",
                    subject: "Computer Science"
                },
                {
                    name: "this",
                    subject: "Computer Science"
                },
                {
                    name: "Present Perfect",
                    subject: "English as a Foreign Language"
                },
                {
                    name: "Reported Speech",
                    subject: "English as a Foreign Language"
                },
                {
                    name: "Algorithms",
                    subject: "Biology"
                },
                {
                    name: "Closures",
                    subject: "Computer Science"
                }
            ];
        });


} ());