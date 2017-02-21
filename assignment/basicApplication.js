/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 1, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "Slide 1",
      "language": "Javascript",
      "description": "description of slide 0"
    },
    {
      "name": "Slide 2",
      "language": "Javascript",
      "description": "description of slide 1"
    },
    {
      "name": "Slide 3",
      "language": "Javascript",
      "description": "description of slide 2"
    },
    {
      "name": "Slide 4",
      "language": "Javascript",
      "description": "description of slide 3"
    },
    {
      "name": "Slide 5",
      "language": "Javascript",
      "description": "description of slide 4"
    }
  ]
};
// console.log (state);

var clickNextButton = function(event) {
  if (state.slideNumber < state.slideData.length) {
    state.slideNumber = (state.slideNumber + 1);
    console.log("Slide" + " " + state.slideNumber);
  }
  else {
    console.log("You are on the last slide!");
  }
};

var clickPreviousButton = function() {
  if (state.slideNumber > 1) {
    state.slideNumber = (state.slideNumber - 1);
    console.log("Slide" + " " + state.slideNumber);
  }
  else {
    console.log("You are on the first slide!");
  }
};

var saySlideName = function() {
  var slideDataInfo = state.slideNumber;
  console.log("You are on slide" + " " + [slideDataInfo]);
};
