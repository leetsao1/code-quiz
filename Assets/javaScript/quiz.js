$(document).ready(function () {

  var booleanQuestion = false;
  var score = 0;
  var randomQuestionNumber = 1;
  var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings1", "booleans1", "alerts1", "numbers1"],
      answer: "alerts1",
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

  var questionLeft = questions.length;
  

//ALL FUNCTIONS GO HERE:

function randomNumber (){
  var randomIndex = Math.floor(Math.random() * questions.length);
  return randomIndex;
}

 function checkAnswer ( randomIndex, selectedAnswer){

  if( questions[randomIndex].choices[selectedAnswer] === questions[randomIndex].answer){
    score++;
    $('#score-field').text("Your score is: "+ score);
    console.log ('Check answer function if - works')

  }
  else {
    $('#score-field').text("Your score is: "+score);
  }
 }

 function generateQuestionPrompt(randomIndex, objectLength){
  console.log('object l=' +objectLength);
   
  if (objectLength > 0){

    //**  Overwrite the DOM for Question Prompt
    $('.title-header').text("Question #" + randomQuestionNumber);
    $(".question").text(questions[randomIndex].title);
   
    // Generates answers at random index  **
    for (var j = 0 ; j < questions[randomIndex].choices.length; j++){
      $(".multiple-choice").append('<p><button id="button" class="answer-button" value="'+j+'" >' + questions[randomIndex].choices[j] +'</button></p>'); 
      $('#start-button').text('Next');
    }
    randomQuestionNumber++;
    }
  }
  
  function makeQuestion() {

    var objectLength = questions.length;
    var randomIndex = randomNumber();

    if(objectLength > 0){

    generateQuestionPrompt(randomIndex, objectLength);

    // Checks for right answer by clicking and returning value
    $(".answer-button").on("click", function () {
      var selectedAnswer = $(this).val();
      $(".answer-button").remove();

      checkAnswer(randomIndex, selectedAnswer);
      questions.splice(randomIndex, 1);
      makeQuestion();

    });  
   }

   if (objectLength < 1) {
    console.log("test is completed");
    $(".title-header").text("Quiz Done");
    $(".question").text("Your score is " + score);
    $("#score-field").text("");

    //generates form at the end of the quiz//
    $("#score-field").append(`<div class="card text-center m-5">
    <div class="card-header m-1">STUDENT INFORMATION</div>
    <form class="form-center">
    <label class="sr-only" for="inlineFormInputName2">Name</label>
    <input style= "width:50%" type="text" class="form-control mx-auto m-2" id="inlineFormInputName2" placeholder="Enter your name..." required >
    <button type="submit" class="btn btn-primary m-2">Submit</button>
    </form>
    <div class="card-footer text-muted">2 days ago</div>
    </div>`);








   
  }
   
   
  }

  // if (questionLeft < 3) {
  //   console.log("test is completed");
  //   $(".title-header").text("The Quiz is Completed");
  //   //$(".content").text("Your score is XX.");
  // }

   //HTML INTRO
   $(".title-header").text("Code Quiz 1");
   $(".content").text("The test contains 3 questions. You have 60 seconds to answer the entire quiz."); 

  $("#start-button").on("click", makeQuestion);
  //$(".answer-button").on("click", makeQuestion);


}); //document ready
