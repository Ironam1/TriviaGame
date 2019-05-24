

var questions = [{
    question: "What was the first game released by Nintendo?",
    answer: ["Mario Bros.", "Mr. Game & Watch", "Playing cards called, hanafuda", "I don't play games!"],
    wrongAnswer1: "Sorry, you ran out of time!",
    wrongAnswer2: "Sorry, your answer was incorrect!",
    correctAnswer: "The correct answer is, Hanafuda!",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"What is Nintendo's best selling game?",
    answer:["Super Mario Bros. 3", "Pokemon Red/Green/Blue/Yellow", "Who plays Nintendo anymore?", "Wii Sports"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Wii Sports!",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"Which Nintendo series has become their best selling?",
    answer:["Metroid", "The Legend of Zelda", "Super Mario Bros.", "Pokemon"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Super Mario Bros.!",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"Which battle royale game has become one the best selling fighter games?",
    answer:["Super Smash Bros.", "Tekken", "I don't even know how to fight!", "Mortal Combat"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Super Smash Bros!",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"What was Luigi's first solo game?",
    answer:["Luigi's Haunted Mansion", "We can't all be Mario!", "Smash Bros.", "The Lonley Plumber"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Luigi's Haunted Mansion",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"What does NES stand for?",
    answer:["Nintendo Electronic System", "Nintendo Entertainment System", "Not Enough Sleep", "Nintendo Entertainment Station"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Nintendo Entertainment System",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"What year did the NES release in the United States?",
    answer:["1978", "1980", "1982", "1985"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, 1985",
    congratulations: "Hooray! You've guessed correctly!"},
    

    {question:"What is the official Nintendo magizine called?",
    answer:["Nintendo Monthly", "Print is dead!", "Nintendo Power", "Nintendo Game and Review"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Nintendo Power",
    congratulations: "Hooray! You've guessed correctly!"},
    
    {question:"What was Nintendo's first handheld device called?",
    answer:["Nintendo Portable", "Game Boy", "Play-and-Go", "Vita"],
    wrongAnswer1:"Sorry, you ran out of time",
    wrongAnswer2:"Sorry, your answer was incorrect!",
    correctAnswer:"The correct answer is, Game Boy",
    congratulations: "Hooray! You've guessed correctly!"},
]

var timer;
var time = 15;
var timeRunning = false;
var shown;
//set reset for each question

function resetGame () {
    time = 15;
    $("#timer").html(time + " seconds");
    $("#container").css("display", "none");
    startGame();
}
//create timer and display on page
function startGame () {
    timeRunning = true;
    timer = setInterval(function() {
        $("#timer").html(time);
        time -= 1;
        if (time <= 0) {
            clearInterval(timer);
            $("#container").css("display", "none");
            $("#container2").css("display", "block");
            $("#time-over").html(shown.wrongAnswer1);
            }
        }, 1000);
        
}
//create function to generate random question and display on page
function getQuestion() {
    shown = questions[Math.floor(Math.random()*questions.length)];
    // $("container").css("display", "block");
    $("#question").html(shown.question);
    $("#answer1").html(shown.answer[0]);
    $("#answer2").html(shown.answer[1]);
    $("#answer3").html(shown.answer[2]);
    $("#answer4").html(shown.answer[3]);
    console.log(shown.answer[0]);
}


