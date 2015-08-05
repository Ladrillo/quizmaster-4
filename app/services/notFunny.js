(function () {
    "use strict";

    angular.module('quizMaster')
        .service('notFunny', function () {
            this.sarcasmCorrect = [
                "I hope that wasn't too hard.",
                "You got lucky.",
                "My six-year-old nephew knows the answer to this one.",
                "You truly are a genius.",
                "Your family must be really proud of you.",
                "Do you want a medal?",
                "Now go and tell your friends about it."
            ];
            this.sarcasmIncorrect = [
                "Pathetic.",
                "My six-year-old nephew knows the answer to this one.",
                "Nice going.",
                "Better luck next time.",
                "You are wasting your time.",
                "And your grandma thought you sooo talented. Yeah, right.",
                "You entire existance is incorrect"
            ];
        });


} ());