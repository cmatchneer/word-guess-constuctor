var Game = require("./game");
var game = new Game();
var GameOver = function() {
    this.wins = 0;
    this.losses = 0;
    this.win = function(guessCount) {
        this.wins++;
        console.log("Yay you win you had " + guessCount + " guess left", "\n",
            "You have won " + this.wins + " times");
    }
    this.loss = function(cpuGuess) {
        this.losses++;
        console.log("\n", "You lost looks like you need to brush up on your spelling ",
            "\n", cpuGuess + " was the word you missed", "\n", "You have lost " + this.losses + " times");
    }


}
module.exports = GameOver;