var questions = [
  {
    question: "What was the first game released by Nintendo?",
    answer: [
      "Mario Bros.",
      "Mr. Game & Watch",
      "Playing cards called, hanafuda",
      "I don't play games!"
    ],
    check: 2,
    correctAnswer: "The correct answer is, Hanafuda!",
    img: "assets/images/hanafuda.jpeg"
  },

  {
    question: "What is Nintendo's best selling game?",
    answer: [
      "Super Mario Bros. 3",
      "Pokemon Red/Green/Blue/Yellow",
      "Who plays Nintendo anymore?",
      "Wii Sports"
    ],
    check: 3,
    correctAnswer: "The correct answer is, Wii Sports!",
    img: "assets/images/wii-fit.jpeg"
  },

  {
    question: "Which Nintendo series has become their best selling?",
    answer: ["Metroid", "The Legend of Zelda", "Super Mario Bros.", "Pokemon"],
    check: 2,
    correctAnswer: "The correct answer is, Super Mario Bros.!",
    img: "assets/images/mario.jpeg"
  },

  {
    question:
      "Which battle royale game has become one the best selling fighter games?",
    answer: [
      "Super Smash Bros.",
      "Tekken",
      "I don't even know how to fight!",
      "Mortal Combat"
    ],
    check: 0,
    correctAnswer: "The correct answer is, Super Smash Bros!",
    img: "assets/images/smash.jpeg"
  },

  {
    question: "What was Luigi's first solo game?",
    answer: [
      "Luigi's Haunted Mansion",
      "We can't all be Mario!",
      "Smash Bros.",
      "The Lonley Plumber"
    ],
    check: 0,
    correctAnswer: "The correct answer is, Luigi's Haunted Mansion",
    img: "assets/images/luigi.jpeg"
  },

  {
    question: "What does NES stand for?",
    answer: [
      "Nintendo Electronic System",
      "Nintendo Entertainment System",
      "Not Enough Sleep",
      "Nintendo Entertainment Station"
    ],
    check: 1,
    correctAnswer: "The correct answer is, Nintendo Entertainment System",
    img: "assets/images/NES.jpeg"
  },

  {
    question: "What year did the NES release in the United States?",
    answer: ["1978", "1980", "1982", "1985"],
    check: 3,
    correctAnswer: "The correct answer is, 1985",
    img: "assets/images/1985.png"
  },

  {
    question: "What is the official Nintendo magizine called?",
    answer: [
      "Nintendo Monthly",
      "Print is dead!",
      "Nintendo Power",
      "Nintendo Game and Review"
    ],
    check: 2,
    correctAnswer: "The correct answer is, Nintendo Power",
    img: "assets/images/power.jpeg"
  },

  {
    question: "What was Nintendo's first handheld device called?",
    answer: ["Nintendo Portable", "Game Boy", "Play-and-Go", "Vita"],
    check: 1,
    correctAnswer: "The correct answer is, Game Boy",
    img: "assets/images/game-boy.jpeg"
  }
];

var right = 0;
var wrong = 0;
var long = 0;
var questArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var holder = [];
var count = questions.length;
var next;
var timer;
var time = 10;
var timeRunning = false;
var shown;
var wrongAnswer1 = "Sorry, you ran out of time";
var wrongAnswer2 = "Sorry, your answer was incorrect!";
var congratulations = "Hooray! You've guessed correctly!";
//set reset for each question
function playGame() {
  $("#reset").hide();
  $("#start").on("click", function() {
    $("#start").hide();
    startTimer();
    getQuestion();
  });
}

//create timer and display on page
function startTimer() {
  $("#pic").hide();
  $("#correct").hide();
  $("time-over").hide();
  $("#wrong").hide();
  if (!timeRunning) {
    timer = setInterval(decrement, 1000);
    time = 10;
    timeRunning = true;
  }

  function decrement() {
    $("#timer").html("<h4>" + time + " seconds</h4>");
    time--;
    if (time <= -1) {
      long++;
      stop();
    }
  }
}
function stop() {
  clearInterval(timer);
  timeRunning = false;
  $("#question").hide();
  $("#timer").hide();
  $("#guesses").hide();
  $("#correct").show();
  $("#time-over").show();
  $("#time-over").html(wrongAnswer1);
  $("#correct").html(shown.correctAnswer);
  $("#pic").show();
  $("#pic").html("<img src=" + shown.img + ">");
  // console.log("SHOWN " + shown);
  endGame();
}
//create question array
//create function to generate random question and display on page
function getQuestion() {
  $("#question").empty();
  $("#guesses").empty();
  // $("#time-over").empty();
  $("#question").show();
  $("#timer").show();
  $("#guesses").show();
  
  next = Math.floor(Math.random() * questions.length);
  shown = questions[next];
  console.log(shown + "SHOWN");
  $("#question").html("<h3>" + shown.question + "</h3>");
  // console.log("answers " + shown.answer);
  for (var i = 0; i < shown.answer.length; i++) {
  var choice = $("<div>");
  choice.addClass("answerchoice");
  choice.html(shown.answer[i]);
  choice.attr("pick", i);
  $("#guesses").append(choice);
  }
  makeGuess();
}

function makeGuess(guess) {
  $(".answerchoice").on("click", function() {
    timeRunning = false;
    guess = parseInt($(this).attr("pick"));
    if (guess === shown.check) {
      right++;
      console.log("correct " + congratulations);
      $("#question").hide();
      $("#timer").hide();
      $("#guesses").hide();
      $("correct").show();
      $("#correct").html(congratulations);
      $("#pic").show();
      $("#pic").html("<img src=" + shown.img + ">");
      
    } else {
      wrong++;
      console.log("wrong " + wrong);
      $("#question").hide();
      $("#timer").hide();
      $("#guesses").hide();
      $("#correct").show();
      $("#correct").html(shown.correctAnswer);
      $("#time-over").html(wrongAnswer2);
      $("#pic").show();
      $("#pic").html("<img src=" + shown.img + ">");
     
    }
    endGame();
    // console.log("correct " + shown.correctAnswer);
    // console.log("check " + shown.check)
    // console.log("guess " + guess);
  });
}

function endGame() {
  clearInterval(timer);
  // questArray.push(shown);
  holder.splice(1, 1, shown);
  $("#question").hide();
  $("#guesses").hide();
  $("#time-over").hide();
//   $("#pic").hide();
  setTimeout(function() {
    if (right + wrong + long === count) {
      timeRunning = false;
      $("#pic").hide();
      $("#correct").hide();
      $("#reset").show();
      $("#final").show();
      $("#final").append("<p>Correct: " + right + "</p>");
      $("#final").append("<p>Wrong: " + wrong + "</p");
      $("#final").append("<p>Over Limit: " + long + "</p");
      resetGame();
      // console.log(questions + "END ARRAY");
      // console.log("HOLDER ARRAY" + questArray);
    } else {
      startTimer();
      getQuestion();
    }
  }, 3000);
}

function resetGame() {
  $("#reset").on("click", function() {
    right = 0;
    wrong = 0;
    long = 0;
    $("#reset").hide();
    $("#final").empty();
    $("#final").hide();
    for (var i = 0; i < questions.length; i++) {
      holder.push(questions[i]);
    }
    startTimer();
    getQuestion();
  });
}
