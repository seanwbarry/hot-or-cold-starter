$(document).ready(function(){

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  //previous guesses?  
  var guessesPrevious = JSON.parse(localStorage.getItem('guessStorage'));
  if (guessesPrevious===null) {
    guessesPrevious=[];
  }

  // output previous guesses and the counter
  $('#count').replaceWith('<span id="count">'+guessesPrevious.length+'</span>');
  
  if (guessesPrevious!==null) {
    for (i=0;i<guessesPrevious.length;i++) {
      $('#guessList').append('<li>'+guessesPrevious[i]+'</li>');  
    }
  }

  $('.new').click(function () {
    localStorage.clear();
    location.reload();
  });





  //submit guessButton -> store the guess
  $('form').submit(function () {
    if (validation() === false) {
      event.preventDefault();
      alert('please enter a number between 1 and 100')
    } else {
      var guessList = JSON.parse(localStorage.getItem('guessStorage'));
      if(guessList===null) {
        guessList=[];
      }
      var guess = $('#userGuess').val();
      guessList.push(guess);
      localStorage.setItem('guessStorage',JSON.stringify(guessList));
    }
  });

  console.log('a'+guessesPrevious);

  //var randomNumber=50;

  //compare randomNumber against guess
    //is there a better way than to set lastGuess to -5 in the initial case?
  function compare (lastGuess1, lastGuess2) {
    console.log(lastGuess1+' & '+lastGuess2);
    console.log(lastGuess1===-5 && lastGuess2==-5);
    console.log(randomNumber);
    if (lastGuess1===-5 && lastGuess2===-5) {
      return;
    } else if (lastGuess1==randomNumber) {
      $('#feedback').replaceWith('<h2 id="feedback">' + 'you got it' + '</h2>');
    } else if (lastGuess2<1) {
      if (Math.abs(lastGuess1-randomNumber)>40) {
        $('#feedback').replaceWith('<h2 id="feedback">' + 'coldest' + '</h2>');
      } else if (Math.abs(lastGuess1-randomNumber)>30) {
        $('#feedback').replaceWith('<h2 id="feedback">' + 'cold' + '</h2>');
      } else if (Math.abs(lastGuess1-randomNumber)>20) {
        $('#feedback').replaceWith('<h2 id="feedback">' + 'less cold' + '</h2>');
      } else if (Math.abs(lastGuess1-randomNumber)>10) {
        $('#feedback').replaceWith('<h2 id="feedbewwwck">' + 'warm' + '</h2>');
      } else if (Math.abs(lastGuess1-randomNumber)>5) {
        $('#feedback').replaceWith('<h2 id="feedback">' + 'warmest' + '</h2>');
      } 
    } else if (Math.abs(randomNumber-lastGuess1)==Math.abs(randomNumber-lastGuess2)) {
      $('#feedback').replaceWith('<h2 id="feedback">' + 'same distance away' + '</h2>');
    } else if (Math.abs(randomNumber-lastGuess1)<=Math.abs(randomNumber-lastGuess2)) {
      $('#feedback').replaceWith('<h2 id="feedback">' + 'hotter' + '</h2>');
    } else {
      $('#feedback').replaceWith('<h2 id="feedback">' + 'colder' + '</h2>');
    }
  }

  function lastGuess1 () {
    var guessList = JSON.parse(localStorage.getItem('guessStorage'));
    var lastGuess1;
    if (guessList===null || guessList.length<1) {
      lastGuess1 = -5;
      return lastGuess1;
    } else if (guessList.length==1) {
      var lastGuess1Position = guessList.length-1;
      lastGuess1 = guessList[lastGuess1Position];
      return lastGuess1;
    } else {
      var lastGuess1Position = guessList.length-1;
      lastGuess1 = guessList[lastGuess1Position];
      return lastGuess1;
    }
  }

  function lastGuess2 () {
    var guessList = JSON.parse(localStorage.getItem('guessStorage'));
    var lastGuess2;
    debugger;
    if (guessList===null || guessList.length<2) {
      lastGuess2 = -5;
      return lastGuess2;
    } else {
      var lastGuess2Position = guessList.length-2;
      var lastGuess2 = guessList[lastGuess2Position];
      return lastGuess2;  
    }
  }

  function validation () {
    if ($('#userGuess').val()>=1 && $('#userGuess').val()<=100) {
      console.log('trip');
      console.log( $('#userGuess').val());
      return true;
    } else {
      return false;
    }
  }

  function getRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

    var randomNumber = JSON.parse(localStorage.getItem('randomNumberStore'));

  if (randomNumber === null) {
    console.log('running random');
    randomNumber = getRandom(1,100);
    localStorage.setItem('randomNumberStore',JSON.stringify(randomNumber));
  }

  console.log(randomNumber);

  compare(lastGuess1(),lastGuess2());

});


