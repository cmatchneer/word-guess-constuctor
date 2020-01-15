var inquirer = require("inquirer");
var GameOver = require("./gameOver");
var gameOver = new GameOver();
var Words = require("./words");
var theWords = ["jedi", "sith", "clones", "empire", "rebels", "the republic", "lightsaber", "droids", "cis"];
var tips = {
    jedi: "this group use the light side of the force and focus on helping others",
    sith: "this group use the dark side of the force and focus on helping themselves",
    clones: "the men who made up the grand army of the republic are ______",
    empire: "the force the ruled the galaxy after the fall of the republic lead by emperor palpatine",
    rebels: "the force that resisted the rule of emperor palpatine",
    "the republic": "the goverment that was made up of the galatic senate that ruled in peace for thousands of years",
    lightsaber: "the weapon of choice for both jedi and sith",
    droids: "the ______ army was largest of its kind and was used to fight the republic",
    cis: "the short hand name for goverment of planets that broke away from the republic"
}
var tipNum = 0;
var guessCount = 0;
var guesses = []
console.log(tips["jedi"]);
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

    console.log("Guesses Remaining " + guessCount);
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
            if (tipNum === 0) {
                helpDesk(cpu, user);
            }
            if (tipNum === 1) {
                theGame(cpu, user);
            }
        })
    }

}
var helpDesk = function(cpu, word) {
    inquirer.prompt([{
        type: "confirm",
        message: "would you like a tip?",
        name: "tip"
    }]).then(function(res) {
        // console.log(res.tip);
        // console.log(tips[cpu]);
        if (res.tip) {
            console.log("This is all the help we can offer you may the force be with you", '\n', tips[cpu]);
            tipNum++;
            theGame(cpu, word);
        }
        if (!res.tip) {
            console.log("If the force isnt enough of guide we shall be here");
            theGame(cpu, word);
        }
    })

}
var done = function() {
    inquirer.prompt([{
        type: "confirm",
        message: "Would you like to play again",
        name: "replay"
    }]).then(function(res) {
        if (res.replay) {
            console.log('\n', "There is no Try", '\n');
            tipNum = 0;
            diffculty();
        }
        if (!res.replay) {
            gameOver.done();
        }
    })
}
startUp();