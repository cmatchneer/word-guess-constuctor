var inquirer = require("inquirer");
var letter = require("./letter");
var Letter = new letter();
Letter.setUp();
console.log(Letter.cpuGuess);

var play = function() {
    inquirer.prompt([{
        type: "input",
        name: "userInput",
        message: "Guess your letter only one guess at a time allowed"
    }]).then(function(response) {
        console.log(response.userInput);
        Letter.game(response.userInput);
        play();
    })
}
play();