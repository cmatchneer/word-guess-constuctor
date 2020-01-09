var Game = function() {
    this.words = ["coding", "css", "javascript", "node", "mysql", "bugs", "debugging"];
    this.cpuGuess = this.words[Math.floor(Math.random() * this.words.length)];

    this.guessArray = [];
    this.setUp = function() {
        for (var i = 0; i < this.cpuGuess.length; i++) {
            this.guessArray[i] = "_";
        }
    }
    this.game = function(userInput) {

        for (var j = 0; j < this.cpuGuess.length; j++) {
            if (userInput.toLowerCase() === this.cpuGuess.charAt(j)) {
                this.guessArray[j] = userInput;
            }
        }

    }

}

module.exports = Game;