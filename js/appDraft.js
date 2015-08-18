
$(document).ready(function(){

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /*--- User guess & store value in local ---*/
  $('#guessButton').submit(function () {
      var guess = $('#userGuess').val();
      localStorage.setItem('guessStorage',JSON.stringify(guess));
      guess = JSON.parse(localStorage.getItem('guessStorage'));
      guessCounter++;
      localStorage.setItem('guessCounterStore'.JOSN.stringify(guessCounter));
      console.log(guess);
  });

    
  /*--- User guess & store value in local ---*/
  var storedGuess = localStorage.getItem('guessStorage');
    
  if (storedGuess) {
    guess = JSON.parse(storedGuess);
  }

  /*--- Output guess ---*/
  if (!(typeof(guess)==='undefined')) {
    //append guess to the dom
    $('#guessList').append('<p>'+guess+'</p>');
    console.log(guess);
  }
    
//functions

//function to create randomNumber
  function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+min)+min);
  }

  //create function that compares guess against randomNumber

  /*--- set storage using randomNumber if randomNumberStore is not already set ---*/
  if (localStorage.getItem('randomNumberStore')===null) {
    var randomNumber = getRandom(1,100);
    localStorage.setItem('randomNumberStore', JSON.stringify(randomNumber));
  }

  var storedRandom = localStorage.getItem('randomNumberStore');

  if (storedRandom) {
    randomNumber=JSON.parse(storedRandom);
    console.log('storedRandom executed');
  }
  console.log(randomNumber);


  //make the counter <- this will be the thing  
  var guessCounter = localStorage.getItem('guessCounterStore');

  if (guessCounter===null) {
    guessCounter = 0;

  /*-- output guessCounter ---*/
  $('#count').replaceWith('<span id="count">'+guessCounter+'</span>');
  
//When I reset the game - I will need to clear the value of the keypair randomNumberStore


});

//------------ other codez

$(document).ready(function(){

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  //make the counter <- this will be the thing  
  var guessCounter = localStorage.getItem('guessCounterStore');

  if (guessCounter===null) {
    guessCounter = 0;
  } else {
    guessCounter++;
  }

  /*-- output guessCounter ---*/
  $('#count').replaceWith('<span id="count">'+guessCounter+'</span>');

});


