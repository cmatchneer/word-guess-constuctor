var inquirer = require("inquirer");
var GameOver = require("./gameOver");
var gameOver = new GameOver();
var Words = require("./words");
var theWords = ["jedi", "sith", "clones", "empire", "rebels", "the republic", "lightsaber", "droids", "cis"];
var guessCount = 0;
var guesses = []
var startUp = function() {
    inquirer.prompt([{
        type: "confirm",
        message: "Are you strong with the spelling side of the force",
        name: "gameStart"
    }]).then(function(res) {
        if (res.gameStart) {
            diffculty();
        }
        if (!res.gameStart) {
            console.log('\n', "Well this choice makes you lame", '\n');
        }
    })
}



var diffculty = function() {
    var cpuGuess = theWords[Math.floor(Math.random() * theWords.length)];
    var word = new Words(cpuGuess);
    inquirer.prompt([{
        type: "list",
        message: "Please tell me your level of force mastery",
        choices: ["Padawan", "Jedi Knight", "Jedi Master"],
        name: "diffcultyLevel"
    }]).then(function(res) {

        switch (res.diffcultyLevel) {
            case "Padawan":
                guessCount = 25;
                console.log('\n', "Welcome young " + res.diffcultyLevel + " you have " + guessCount + " guesses may the force be with you", '\n');
                theGame(cpuGuess, word);
                break;
            case "Jedi Knight":
                guessCount = 20;
                console.log('\n', "Welcome " + res.diffcultyLevel + " you have " + guessCount + " guesses a challenge for one with your skills", '\n');
                theGame(cpuGuess, word);
                break;
            case "Jedi Master":
                guessCount = 15;
                console.log('\n', "Welcome " + res.diffcultyLevel + " you have " + guessCount + " guesses this should be no issue for one of your skills", '\n');
                theGame(cpuGuess, word);
                break;
        }
    })
}
var theGame = function(cpu, user) {
    if (user.wordString.length === 0) {
        guesses = [];
        user.wordBuilder();

    }

    console.log(guessCount);
    console.log(user.wordString.join(""));
    if (guessCount > 0 && user.wordString.join("") === cpu) {
        gameOver.win();
        done();
    }
    if (guessCount === 0 && user.wordString.join("") !== cpu) {
        gameOver.lose(cpu);
        done();

    }
    if (guessCount > 0 && user.wordString.join("") !== cpu) {
        inquirer.prompt([{
            type: "input",
            message: "guess one letter at the time",
            name: "userGuess"
        }]).then(function(res) {
            guessCount--;
            guesses.push(res.userGuess);
            console.log('\n', "Your guesses so far: " + guesses.join(""), '\n');
            user.checker(res.userGuess);
            theGame(cpu, user);
        })
    }

}
var done = function() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to play again",
        name: "replay"
    }]).then(function(res) {
        if (res.replay) {
            console.log('\n', "There is no Try", '\n');
            diffculty();
        }
        if (!res.replay) {
            gameOver.done();
        }
    })
}
startUp();