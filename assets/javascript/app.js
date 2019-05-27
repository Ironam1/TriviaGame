

var questions = [{
    question: "What was the first game released by Nintendo?",
    answer: ["Mario Bros.", "Mr. Game & Watch", "Playing cards called, hanafuda", "I don't play games!"],
    check: 2,
    correctAnswer: "The correct answer is, Hanafuda!"},
    
    {question:"What is Nintendo's best selling game?",
    answer:["Super Mario Bros. 3", "Pokemon Red/Green/Blue/Yellow", "Who plays Nintendo anymore?", "Wii Sports"],
    check: 3,
    correctAnswer:"The correct answer is, Wii Sports!"},
    
    {question:"Which Nintendo series has become their best selling?",
    answer:["Metroid", "The Legend of Zelda", "Super Mario Bros.", "Pokemon"],
    check: 2,
    correctAnswer:"The correct answer is, Super Mario Bros.!"},
    
    {question:"Which battle royale game has become one the best selling fighter games?",
    answer:["Super Smash Bros.", "Tekken", "I don't even know how to fight!", "Mortal Combat"],
    check: 0,
    correctAnswer:"The correct answer is, Super Smash Bros!"},
    
    {question:"What was Luigi's first solo game?",
    answer:["Luigi's Haunted Mansion", "We can't all be Mario!", "Smash Bros.", "The Lonley Plumber"],
    check: 0,
    correctAnswer:"The correct answer is, Luigi's Haunted Mansion"},
    
    {question:"What does NES stand for?",
    answer:["Nintendo Electronic System", "Nintendo Entertainment System", "Not Enough Sleep", "Nintendo Entertainment Station"],
    check: 1,
    correctAnswer:"The correct answer is, Nintendo Entertainment System"},
    
    {question:"What year did the NES release in the United States?",
    answer:["1978", "1980", "1982", "1985"],
    check: 3,
    correctAnswer:"The correct answer is, 1985"},
    

    {question:"What is the official Nintendo magizine called?",
    answer:["Nintendo Monthly", "Print is dead!", "Nintendo Power", "Nintendo Game and Review"],
    check: 2,
    correctAnswer:"The correct answer is, Nintendo Power"},
    
    {question:"What was Nintendo's first handheld device called?",
    answer:["Nintendo Portable", "Game Boy", "Play-and-Go", "Vita"],
    check: 1,
    correctAnswer:"The correct answer is, Game Boy"},
    
]
// var questArr = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9"];
var right = 0;
var wrong = 0;
var long = 0;
var questArray = [];
var holder = [];
var count = questions.length;
var next;
var timer;
var time = 10;
var timeRunning = false;
var shown;
var wrongAnswer1 = ("Sorry, you ran out of time");
var wrongAnswer2 = ("Sorry, your answer was incorrect!");
var congratulations = ("Hooray! You've guessed correctly!");
//set reset for each question

function resetGame () {
    for (var i = 0; i < questions.length; i++) {
        holder.push(questions[i]);
    }
    console.log(holder);
    startGame();
    getQuestion();
}
//create timer and display on page
function startGame () {
    if (!timeRunning) {
        timer = setInterval(decrement, 1000);
            time = 10;
            timeRunning = true;
    }
    
function decrement () {
    
        $("#timer").html("<h4>" + time + " seconds</h4>");
        time --;
            if (time <= -1) {
            long++;
            stop();
            }
        }
}
function stop () {
    clearInterval(timer);
    timeRunning = false;
    $("#question").hide();
    $("#timer").hide();
    $("#guesses").hide();
    $("#time-over").html(wrongAnswer1);
    $("#correct").html(shown.correctAnswer);
    // startGame();
    endGame();   
}
//create question array
//create function to generate random question and display on page
function getQuestion() {
    $("#correct").empty();
    $("time-over").empty();
    $("#question").empty();    
    $("#guesses").empty();
    $("#question").show();
    $("#timer").show();
    $("#guesses").show();
    
    next = Math.floor(Math.random()*questions.length);
    shown = questions[next];
    $("#question").html("<h3>" + shown.question + "</h3>");
    console.log("answers " + shown.answer);
    for (var i = 0; i < shown.answer.length; i++) {
        var choice = $("<div>");
        choice.addClass("answerchoice");
        choice.html(shown.answer[i]);
        choice.attr("pick", i);
        $("#guesses").append(choice);
    }

    // $("container").css("display", "block");
    // $("#question").html(shown.question);
    // $("#answer1").text(shown.answer[0]);
    // $("#answer2").html(shown.answer[1]);
    // $("#answer3").html(shown.answer[2]);
    // $("#answer4").html(shown.answer[3]);
    // console.log(shown.answer[0]);
}

function makeGuess (guess) {
    
    $(document).on("click", ".answerchoice", function () {
        timeRunning = false;
        guess = parseInt($(this).attr("pick"));
        if (guess === shown.check) {
            right++;
            endGame();
            console.log("correct " + right);
            $("#question").hide();
            $("#timer").hide();
            $("#guesses").hide();
            $("#time-over").html(congratulations);
        } else {
            wrong++;
            endGame();
            console.log("wrong " + wrong);
            $("#question").hide();
            $("#timer").hide();
            $("#guesses").hide();
            $("#correct").html(shown.correctAnswer);
            $("#time-over").html(wrongAnswer2);
        }
        console.log("correct " + shown.correctAnswer);
        console.log("check " + shown.check)
        console.log("guess " + guess);
        
    })
}

function endGame () {
    clearInterval(timer);
    questArray.push(shown);
    questions.splice(next, 1);
    setTimeout (function() {
        $("#question").empty();
        $("#guesses").empty();
        $("#time-over").empty();
        if ((right + wrong + long) === count) {
        
        $("#guesses").empty();
        $("#correct").empty();
        $("#wrong-guess").empty();
        $("#time-over").empty();
        $("#answer").empty();
        $("#timer").empty();
        $("#final").append("<p>Correct: " + right + "</p>");
        $("#final").append("<p>Wrong: " + wrong + "</p");
        $("#final").append("<p>Over Limit: " + long + "</p");
        

        } else {
            startGame();
            getQuestion();
        }
    }, 3000);

}
