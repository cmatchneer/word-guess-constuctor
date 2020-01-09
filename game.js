var SetUp = require("./setUp");
var setUp = new SetUp();
// setUp.setUp();
var Game = function() {
    this.guessCount = 10;
    this.guessArray = []
    this.game = function(userInput) {

        this.guessCount -= 1;

        console.log(this.guessCount);

        for (var j = 0; j < setUp.cpuGuess.length; j++) {
            if (userInput.toLowerCase() === setUp.cpuGuess.charAt(j)) {
                setUp.theLetters[j] = userInput;
                this.guessArray = setUp.theLetters;
                console.log(this.guessArray.join(""));
            }
        }

    }

}
module.exports = Game;

// var Game = new Game();
// Game.game("s");