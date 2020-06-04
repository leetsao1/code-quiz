$('.title-header').text("Code Quiz 1");
$('.content').text("The test contains 3 questions. You have 60 seconds to answer the entire quiz.");

// QUESTION 1
$("#start-button").on( "click", function() {
    // create a function that populates the quizzes call it question 1
    $('.title-header').text("Question #1");
    $('.question').text("How do you link a Javascript file to your html file?");
    $('.content').text(""); //This clears out the initial <p> content

    $('.multiple-choice').append('<p><button class="answer">a) you can not link javascript file into your html</button></p>');
    $('.multiple-choice').append('<p><button class="answer">b) google says you can copy stack overflow</button></p>');
    $('.multiple-choice').append('<p><button class="answer">c) I have no idea</button></p>');
    $('.multiple-choice').append('<p><button class="answer">d) Link the file at the header or the end of your code by using the scrip tag</button></p>');

    //$('.multiple-choice').append('<button id="start-button" type="button">Check Answer</button>');


});

// $('body').html('<div id="quiz"><h1>Code Quiz</h1></div>');
// $('#quiz').append('<p>The test contains 3 questions. You have 60 seconds to answer the entire quiz.</p>');
// $('#quiz').append('<button id="start-button" type="button">Start Quiz!</button>');

