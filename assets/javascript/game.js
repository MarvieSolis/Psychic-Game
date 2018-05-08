
var wins = 0;
var losses = 0;
var guessesleft = 10;
var yourguesses = [];
var possible = "abcdefghijklmnopqrstuvwxyz";

function makeid() {
    var possible = "abcdefghijklmnopqrstuvwxyz";
    letter = possible.charAt(Math.floor(Math.random() * 26));
    return letter;
    }


makeid();

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess;
  yourguesses.push(userGuess);


    if (userGuess === letter) {
        wins++;
        guessesleft = 9;
        yourguesses.length = 0;
        makeid();
    }

    if (userGuess !== letter) {
        guessesleft--;
    }

    if (guessesleft === 0) {
        losses++;
        guessesleft = 9;
        yourguesses.length = 0;
        makeid();
    }



      document.querySelector(".wins").innerHTML = "Wins: " + wins;
      document.querySelector(".loses").innerHTML = "Losses: " + losses;
      document.querySelector(".gleft").innerHTML = "Guesses Left: " + guessesleft;
      document.querySelector(".yguess").innerHTML = "Your guesses so far: " + yourguesses + " ";





  

}