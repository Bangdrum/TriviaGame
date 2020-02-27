$("#done").hide();

$("#start").on('click', function () {

    game.start();
    // $("#done").show();
})



var questions = [{
    question: "What car manufacturer makes the WRX STI?",
    answers: ["Honda\xa0\xa0", "Lexus\xa0\xa0", "Toyota\xa0\xa0", "Subaru\xa0\xa0", "Mitsubishi\xa0\xa0"],
    correctAnswer: "Subaru\xa0\xa0"
}, {
    question: "Which car did Carroll Shelby help design for the world famous 'Le mans' race that won in 1966?",
    answers: ["Chevy Corvette\xa0\xa0", "Ford MKII GT40\xa0\xa0", "BMW M1\xa0\xa0", "Ferrari 330 P3\xa0\xa0", "Porsche 911s\xa0\xa0"],
    correctAnswer: "Ford MKII GT40\xa0\xa0"
}, {
    question: "What is WHP an acronym for?",
    answers: ["Where's Harry Potter?\xa0\xa0", "wired hood pin\xa0\xa0", "wheel horsepower\xa0\xa0", "winner's happy place\xa0\xa0", "with high probability\xa0\xa0"],
    correctAnswer: "wheel horsepower\xa0\xa0"
}, {
    question: "Which production car holds the lap record at the Nordschleife layout of the Nurburgring in Germany?",
    answers: ["Porsche 911 GT2 RS\xa0\xa0", "Porsche 911 GT3 RS\xa0\xa0", "Lamborghini Huracan LP 640-4 Performante\xa0\xa0", "Lamborghini Aventador LP770-4 SVJ\xa0\xa0", "Porsche 918 Spyder\xa0\xa0"],
    correctAnswer: "Lamborghini Aventador LP770-4 SVJ\xa0\xa0"
}, {
    question: "Which Corvette is a rear engine vehicle? ",
    answers: ["C5\xa0\xa0", "C6\xa0\xa0", "C7\xa0\xa0", "C8\xa0\xa0", "C4\xa0\xa0"],
    correctAnswer: "C8\xa0\xa0"
}, {
    question: "What is the purpose of Calipers and Rotors? ",
    answers: ["Helps accelerate\xa0\xa0", "stops the car\xa0\xa0", "timing of engine\xa0\xa0", "transfers power to wheels\xa0\xa0", "checking tires for wear\xa0\xa0"],
    correctAnswer: "stops the car\xa0\xa0"
}];
// console.log(questions);

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function () {

        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#altcontainer').prepend('<h2>Time Left: <span id="counter">45</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#altcontainer').append('<h2>' + questions[i].question + '</h2');

            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#altcontainer").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
            if (i < (questions.length - 1)) {
                $("#altcontainer").append("<hr>")
            }
        }

    },



    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#altcontainer h2').remove();
        $('#altcontainer').html("<h3>All done!</h3>");

        $('#altcontainer').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#altcontainer').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");

        $('#altcontainer').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }



}