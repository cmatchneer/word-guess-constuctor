var inquirer = require("inquirer");
var SetUp = require("./setUp");
var Game = require("./game");
var game = new Game();
var setUp = new SetUp();
game.setUp();
var play = function() {
    console.log(game.guessArray.join(""));
    console.log(game.cpuGuess);


    inquirer.prompt([{
        type: "input",
        name: "userInput",
        message: "Guess your letter only one guess at a time allowed"
    }]).then(function(response) {
        console.log(response.userInput);

        game.game(response.userInput);

        play();

    })

}
play();