$(document).ready(function () {
  console.log("ready q!");
  var booleanQuestion = false;
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
  var score = 0;

  //HTML INTRO
  $(".title-header").text("Code Quiz 1");
  $(".content").text("The test contains 3 questions. You have 60 seconds to answer the entire quiz.");


  function makeQuestion() {
    

    //Generates random number and index
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomQuestionNumber = randomIndex + 1;
    console.log(randomQuestionNumber);

    //Overwrite the DOM for Question Prompt
    
    $('.title-header').text("Question #" + randomQuestionNumber);
    $(".question").text(questions[randomIndex].title);
    

 

    // Generates answers at random index
    for (var j = 0 ; j < questions[randomIndex].choices.length; j++){
      $(".multiple-choice").append('<p><button id="button" class="answer-button" value="'+j+'" >' + questions[randomIndex].choices[j] +'</button></p>'); 
      $('#start-button').text('Next');
    }

    // Function checks for right answer by clicking and returning value
    $(".answer-button").on("click", function(){
      
      var selectedAnswer = $(this).val();
      console.log(selectedAnswer);
      $(".answer-button").remove();
      

      // $('#next').on(click, function(){
      //   $(".answer-button").remove();
      // })

      
      if( questions[randomIndex].choices[selectedAnswer] === questions[randomIndex].answer){
        score++;
        console.log("the answer is correct!, Score: " + score);
        $('#score-field').text("Your score is: "+ score);

      }
      else {
        console.log("the answer is WRONG!!, Score: " + score);
        $('#score-field').text("Your score is: "+score);

      }

    });

  }

  function checkAnswer(){
    console.log ("Check answer works");
  }



  $("#start-button").on("click", makeQuestion);
  //$(".answer-button").on("click", makeQuestion);


}); //document ready
