$(document).ready(function () {
  console.log("ready q!");
  var booleanQuestion = false;
  var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings1", "booleans1", "alerts1", "numbers1"],
      answer: "alerts",
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes2", "curly brackets2", "parentheses2", "square brackets2"],
      answer: "parentheses2",
    },
    {
      title: "some questions 3",
      choices: ["quotes3", "curly brackets3", "parentheses3", "square brackets3"],
      answer: "parentheses3",
    },
  ];

  //HTML INTRO
  $(".title-header").text("Code Quiz 1");
  $(".content").text(
    "The test contains 3 questions. You have 60 seconds to answer the entire quiz."
  );


  function makeQuestion() {
    //$('.title-header').text("Quiz Question"); 
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomQuestionNumber = randomIndex + 1;
    console.log(randomQuestionNumber);
    booleanQuestion = true;
    console.log(booleanQuestion);

    while(booleanQuestion){
      $('.title-header').text("Question #" + randomQuestionNumber); //** can be adjusted or deleted later on */
      $(".question").text(questions[0].title);

      for (var j = 0 ; j < questions[0].choices.length; j++){
        $(".multiple-choice").append('<p><button class="answer-button">' + questions[randomIndex].choices[j] +'</button></p>'); 
        //**add method to check for answer here */
      } 
     
      $("#answer-button").on("click", function(){
        console.log('this works!')

      });
      console.log(booleanQuestion);
      booleanQuestion = false;   
      console.log(booleanQuestion);   
    }

  //   var q;
  //   //Creates questions
  //   for (var i = 0; i < questions.length; i++) {
  //     var questionNumber = i+1;
  //     $('.title-header').text("Question #"+ questionNumber);
  //     $(".question").text(questions[i].title);
  //     console.log ("I inside the loop i" +i);
  //     q = i;
  //   }
  //   console.log ("i outside q:" + q);

    // Creates answer buttons
    // for (var j = 0 ; j < questions[0].choices.length; j++){
    // $(".multiple-choice").append('<p><button id="answer-button">' + questions[i].choices[j] +'</button></p>'); 
    //} 

  }
  
   $("#start-button").on("click", makeQuestion);
   

  //Appends multiple choice buttons **this can become a for loop once i know how to get objects**

  
  // QUESTION 1
  // $("#start-button").on("click", function () {

  //   // $('.title-header').text("Question #1");
  //   //$(".question").text("How do you link a Javascript file to your html file?");
  //   $(".content").text(""); //This clears out the initial <p> content
  //   createAnswer();

  //   $("#answer-a").text("a) ");

  //   // QUESTION 2
  //   $(".answer").on("click", function () {
  //     // create a function that populates the quizzes call it question 1
  //     $(".title-header").text("Question #2");
  //     $(".question").text("What does HTML stand for?");
  //     $(".content").text(""); //This clears out the initial <p> content

  //     $("#answer-a").text("a) ");
  //     $("#answer-b").text("b) ");
  //     $("#answer-c").text("c) ");
  //     $("#answer-d").text("d) ");
  //   });

  //   //$('.multiple-choice').append('<button id="start-button" type="button">Check Answer</button>');
  // });

  // $('body').html('<div id="quiz"><h1>Code Quiz</h1></div>');
  // $('#quiz').append('<p>The test contains 3 questions. You have 60 seconds to answer the entire quiz.</p>');
  // $('#quiz').append('<button id="start-button" type="button">Start Quiz!</button>');
}); //document ready
