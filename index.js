var inquirer = require("inquirer");
var SetUp = require("./setUp");
var Game = require("./game");
var game = new Game();
var setUp = new SetUp();

// var comapre = setUp.theLetters.join("");
// console.log(comapre);


var play = function() {
    if (game.guessCount === 10) {
        setUp.setUp();
        console.log(setUp.cpuGuess);
    }

    inquirer.prompt([{
        type: "input",
        name: "userInput",
        message: "Guess your letter only one guess at a time allowed"
    }]).then(function(response) {
        console.log(response.userInput);

        game.game(response.userInput);
        console.log(setUp.theLetters.join(""));
        play();
    })
}
play();