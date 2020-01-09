var inquirer = require("inquirer");
var GameOver = require("./gameOver");
var Game = require("./game");
var game = new Game();
var gameOver = new GameOver();
var guesses = [];
var guessCount = 10;
game.setUp();
var play = function() {
    console.log(game.guessArray.join(""));
    console.log(game.cpuGuess);
    console.log(guessCount);
    if (game.guessArray.join("") === game.cpuGuess) {
        gameOver.win(guessCount);
        reset();
    }
    if (guessCount === 0 && game.guessArray.join("") !== game.cpuGuess) {
        gameOver.loss(game.cpuGuess);
        reset();
    }
    if (game.guessArray.join("") !== game.cpuGuess && guessCount > 0) {
        inquirer.prompt([{
            type: "input",
            name: "userInput",
            message: "Guess your letter only one guess at a time allowed"
        }]).then(function(response) {
            guessCount -= 1;

            guesses.push(response.userInput);
            console.log("Previous Guesses: " + guesses.join(" "));
            game.game(response.userInput);

            play();

        })
    }

}
play();

function reset() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to play again",
        name: "replay"
    }]).then(function(response) {

        if (response.replay) {
            guessCount = 10;
            guesses = [];
            game.setUp();
            play();
        } else {
            gameOver.done();
        }
    })

}