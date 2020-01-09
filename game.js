var SetUp = require("./setUp");
var setUp = new SetUp();


var Game = function() {
    this.words = ["coding", "css", "javascript", "node", "mysql", "bugs", "debugging"];
    this.cpuGuess = this.words[Math.floor(Math.random() * this.words.length)];
    this.guessCount = 10;
    this.guessArray = [];
    this.setUp = function() {
        for (var i = 0; i < this.cpuGuess.length; i++) {
            this.guessArray[i] = "_";
        }
    }
    this.game = function(userInput) {

        this.guessCount -= 1;

        console.log(this.guessCount);
        // console.log(this.guessArray.join(""));

        for (var j = 0; j < this.cpuGuess.length; j++) {
            if (userInput.toLowerCase() === this.cpuGuess.charAt(j)) {
                this.guessArray[j] = userInput;

                // console.log(this.guessArray.join(""));
            }
        }

    }

}

module.exports = Game;

var Game = new Game();
// if (Game.guessCount === 10) {
//     setUp.setUp();
//     console.log(setUp.cpuGuess);
// }
// Game.game("s");