// Do NOT modify the HTML document manually!!!!

// Question 1
// Use jQuery to add two more elements to the the UL in the 'question-1' div

$(document).ready(function(){
  $('#question-1 > ul').append('<li>Bats</li><li>Snakes</li>');
});

// Question 2
// Add a click event handler to the paragraph in the 'question-2' div
// which triggers a method called 'alertClicked',
// which will display an alert with the text of "Question 2 Success".

var alertClicked = function(message) {
  alert(message)
};

$(document).ready(function () {
  $('#question-2 > p').click(function(){
    alertClicked("Question 2 Success");
  });
});

// Question 3
// Why won't the following code make clicking on anything the 'question-3' div
// invoke the alertClicked method?

$('#question-3').on('click', alertClicked);

// Answer:

// Since this file is being included before the DOM is built,
// the element with id "question-3" does not actually exist
// when we assign this event handler.

// Question 4
// Make the HTML in the 'question-4' div fade out when you hover over it,
// and fade back in when you move your mouse away from it

$(document).ready(function(){

  // thanks, sublime, for having a hover() macro!
  // thanks, jquery docs, for confirming that it's right!

  $('#question-4').hover(function() {
    /* Stuff to do when the mouse enters the element */
    // on mouse entering the element, fade out slowly
    $(this).fadeOut('slow');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    // on mouse leaving the element, fade in slowly
    $(this).fadeIn('slow');
  });

  // ...except that it still has some weird behavior.
  // both events fire one after another when going in, and going out.
  // i'm not sure why that's happening, but the code
  // is correct, as far as i can tell.

});

// Question 5
// Make question 5's h2 turn blue when someone types 'winning'
// in its input element and hits enter

// looked at jquery docs for this.

// NOTE: the div for this question does NOT have an ID
// of #question-5. i had to use 'body div:nth-child(6) > h2'
// to select it.

$(document).ready(function(){
  $('#q-5-input').keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      if ($(this).val() == 'winning') {
        console.log($('body div:nth-child(6) > h2'));
        $('body div:nth-child(6) > h2').css("color", "blue");
      }
    }
  });
});

// Question 6
// Add a method to the String prototype called 'reverse'
// which will return the string reversed.
// You should be able to run 'foo'.reverse() and get 'oof'
// Use this method to reverse the text in the h2 in the 'question-6' div

String.prototype.reverse = function() {
  var reversedString = [];
  for (var i = 0, length = this.length; i < length; i++) {
    reversedString.push(this[length-i-1]);
  }
  return reversedString.join('');
}

$(document).ready(function(){

  var h2Text = $('#question-6 h2').text();
  $('#question-6 h2').text(h2Text.reverse());

});

// Question 7
// Write a method called 'highLightHeaders' that will add a class of 'highlight'
// to all h2's when it is invoked

// Question 8
// Define a constructor function called `Cat`,that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

// Question 9
// Add a function called `description` to the `Cat` prototype that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

// Question 10
// Use the methods of .map and .reduce to return the
// sum the prices of the objects in the array below.
// Do *not* use a for loop

var items = [
  {name: 'iPhone 5c', price: 99.99},
  {name: 'iPhone 5s', price: 149.99},
  {name: 'iPhone 6', price: 249.99},
  {name: 'iPhone 6 plus', price: 399.99}
];
