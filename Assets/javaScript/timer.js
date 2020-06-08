$(document).ready(function () {
  console.log("ready!");

  var timeEl = document.querySelector(".time");
  var mainEl = document.getElementById("main");
  var secondsLeft = 60;

  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      // style="text-align: right;"
      $(".time").attr("style", "text-align: right");
      timeEl.textContent = "Timer: " + secondsLeft + " seconds";

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = "Time it's up";

    //var imgEl = document.createElement("img"); **could make this a pop up when time its up**
    //imgEl.setAttribute("src", "images/image_1.jpg");
    //mainEl.appendChild(imgEl);
  }

  //starts timer and removes button
  $("#start-button").on("click", function () {
    setTime();
    //$("#start-button").remove();
  });

  //setTime();
}); //document ready
