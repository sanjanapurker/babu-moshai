$('#alertButton').on('click', function() {
	alert('Chris Whong');
});

$('#red-button').on('click', function() {
  $('body').css('background', 'red');
});

$('#green-button').on('click', function() {
  $('body').css('background', 'green');
});

$('#blue-button').on('click', function() {
  $('body').css('background', 'blue');
});

$('.joes-pizza').on('click', function() {
  $('#pizza-shop-info').text('Joes Pizza is the best in NYC');
});

$('.dominos-pizza').on('click', function() {
  $('#pizza-shop-info').text('Dominos is delicious');
});

$('.papa-johns').on('click', function() {
  $('#pizza-shop-info').text('Papa Johns is mediocre');
});

var name = 'Chris'; // String

// var age = 38; // Number (if it had quotes around it, it would be a string, not a number)

// instead of hard-coding the age in javascript, we can read it from an input

$('#ageSubmit').on('click', function() {
  var age = $('#ageInput').val();
  age = parseInt(age); // parse a number from the string that was read from the input

  // if age is NaN, show an error, if it is number, add 10 and display a sentence
  if (isNaN(age)) {
    // console.log('You did not enter a number!');
    $('.outputMessage').text('You did not enter a number!!!');
  } else {
    var ageInADecade = age + 10;
    $('.outputMessage').text(`You will be ${ageInADecade} in 10 years 😞`); // template literal
  }

  console.log('it read this from the input:', age, age.length)

});

// console.log(name)
//
//
// console.log(ageInADecade);
//
//
//
// $('.currentAge').text(age);
// $('.ageInADecade').text(ageInADecade);

// here's an array
var arrayOfStrings = ['Chris', 'Nick', 'Kahini', 'Meagan'];

console.log(arrayOfStrings[2])

console.log('This is how to iterate over an array');

arrayOfStrings.forEach(function(name) {
  console.log(name);
});

// objects

var chrisObject = {
  age: 38,
  favoriteColor: 'blue',
  teachesAt: 'NYU'
}

chrisObject.nycBorough = 'Brooklyn',

console.log(chrisObject.teachesAt, chrisObject.nycBorough);
