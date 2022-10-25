var lowGuesses = [];
var highGuesses = [];
var secretNumber = Math.floor(Math.random() * 101);
var counter = 0;
var attempts = 10;

function handleGuess() {
    var playerGuess = document.getElementById('g-guess').value;
    counter++;
    attempts--;
    document.getElementById('g-attempts').innerHTML = attempts    
    if (counter == 10) {
        document.getElementById("g-inform-user").innerHTML =
         "Sorry. The number was " + secretNumber;
         document.getElementById('g-guess-button').onclick = null;
    }
    if (playerGuess < secretNumber) {
        lowGuesses.push(playerGuess);
        document.getElementById("g-guess-value").innerHTML = playerGuess;
        document.getElementById('g-outcome').innerHTML = " was too low";
        var lowGuess = lowGuesses[lowGuesses.length - 1];
        document.getElementById('g-current-low').innerHTML = lowGuess;
    } else if (playerGuess > secretNumber) {
        highGuesses.push(playerGuess);
        document.getElementById("g-guess-value").innerHTML = playerGuess;
        document.getElementById('g-outcome').innerHTML = " was too high";
        var highGuess = highGuesses[highGuesses.length - 1];
        document.getElementById('g-current-high').innerHTML = highGuess;
    } else {
        document.getElementById("g-inform-user").innerHTML =
        "The secret number is " + secretNumber
        document.getElementById('g-guess-button').onclick = null;
    }
}
 