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

  //make guessButton
  $('form').submit(function () {
    var guessList = JSON.parse(localStorage.getItem('guessStorage'));
    if(guessList===null) {
      guessList=[];
    }
    var guess = $('#userGuess').val();
    guessList.push(guess);
    localStorage.setItem('guessStorage',JSON.stringify(guessList));
  });

  console.log('a'+guessesPrevious);

});


