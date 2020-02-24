$("#start").on('click', function () {

    game.start();
})

var questions = [{
    question: "What car manufacturer makes the WRX STI?",
    answers: ["Honda", "Lexus", "Toyota", "Subaru", "Mitsubishi"],
    correctAnswer: "Subaru"
}, {
    question: "Which car did Carroll Shelby help design for the world famous 'Le mans' race that won in 1966?",
    answers: ["Chevy Corvette", "Ford MKII GT40", "BMW M1", "Ferrari 330 P3", "Porsche 911s"],
    correctAnswer: "Ford MKII GT40"
}, {
    question: "What is WHP an acronym for?",
    answers: ["Where's Harry Potter?", "wired hood pin", "wheel horsepower", "winner's happy place", "with high probability"],
    correctAnswer: "Wheel horsepower"
}, {
    question: "Which production car holds the lap record at the Nordschleife layout of the Nurburgring in Germany?",
    answers: ["Porsche 911 GT2 RS", "Porsche 911 GT3 RS", "Lamborghini Huracan LP 640-4 Performante", "Lamborghini Aventador LP770-4 SVJ", "Porsche 918 Spyder"],
    correctAnswer: "Lamborghini Aventador LP770-4 SVJ"
}, {
    question: "Which Corvette is a rear engine vehicle? ",
    answers: ["C5", "C6", "C7", "C8", "C4"],
    correctAnswer: "C8"
}, {
    question: "What is the purpose of Calipers and Rotors? ",
    answers: ["Helps accelerate", "stops the car", "timing of engine", "transfers power to wheels", "checking tires for wear"],
    correctAnswer: "stops the car"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
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
        $('#altcontainer').prepend('<h2>Time Left: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#altcontainer').append('<h2>' + questions[i].question + '</h2');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#altcontainer").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
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