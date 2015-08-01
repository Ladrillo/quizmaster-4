(function () {
    "use strict";

    angular.module('quizMaster')
        .service('quizes', function () {
            this.list = [
                {
                    id: "aoyujdfihv",
                    subject: "Computer Science",
                    keywords: ["JavaScript", "Object Oriented Programming", "this", "Closures"],
                }
            ];
        });


} ());