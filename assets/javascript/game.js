var computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

var wins = 0;
var losses = 0;
var guesses = 3;

document.onkeyup = function(event) {

var userGuess = event.key;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if ((userGuess === "1") || (userGuess === "2") || (userGuess === "3") || (userGuess === "4") || (userGuess === "5") || (userGuess === "6") || (userGuess === "7") || (userGuess === "8") || (userGuess === "9"))  {

    if ((userGuess === "1") && (computerGuess === "1")) {
      wins++;
    } else if ((userGuess === "1") && (computerGuess === "2","3","4","5","6","7","8","9")) {
      lossess++;
    }
 

}

var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>The computer chose: " + computerGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>ties: " + ties + "</p>";var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>The computer chose: " + computerGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>ties: " + ties + "</p>";

    document.querySelector("#game").innerHTML = html;
}
 
