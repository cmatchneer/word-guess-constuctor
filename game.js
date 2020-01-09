var SetUp = require("./setUp");
var setUp = new SetUp();

setUp.setUp();
var Game = function() {
    this.guessCount = 10;
    this.guessArray = setUp.theLetters;
    this.game = function(userInput) {

        this.guessCount -= 1;

        console.log(this.guessCount);
        console.log(this.guessArray.join(""));

        for (var j = 0; j < setUp.cpuGuess.length; j++) {
            if (userInput.toLowerCase() === setUp.cpuGuess.charAt(j)) {
                this.guessArray[j] = userInput;

                console.log(this.guessArray.join(""));
            }
        }

    }

}
module.exports = Game;

// var Game = new Game();
// Game.game("s");