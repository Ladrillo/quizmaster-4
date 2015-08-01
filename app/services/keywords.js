(function () {
    "use strict";

    angular.module('quizMaster')
        .service('keywords', function () {
            var that = this;
            this.list = [
                {
                    name: "JavaScript",
                    subjects: ["Computer Science"]
                },
                {
                    name: "this",
                    subjects: ["Computer Science"]
                },
                {
                    name: "Present Perfect",
                    subjects: ["English as a Foreign Language"]
                },
                {
                    name: "Reported Speech",
                    subjects: ["English as a Foreign Language"]
                },
                {
                    name: "Evolution",
                    subjects: ["Biology"]
                },
                {
                    name: "Closures",
                    subjects: ["Computer Science"]
                }
            ];

            this.pertinentKeywords = function (subjects) {
                var pertinents = [];
                for (var s in subjects) {
                    for (var k in that.list) {
                        if (that.list[k].subjects.indexOf(subjects[s]) !== -1) {
                            pertinents.push(that.list[k]);
                        }
                    }
                }
                return pertinents;
            };


        });


} ());