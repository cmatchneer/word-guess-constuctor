var Letter = function() {
    this.words = ["coding", "css", "javascript", "node", "mysql", "bugs", "debugging"];
    this.userGuess = false;
    this.guessCount = 10;
    this.theLetters = [];
    this.cpuGuess = this.words[Math.floor(Math.random() * this.words.length)];
    this.setUp = function() {

        for (var i = 0; i < this.cpuGuess.length; i++) {
            this.theLetters[i] = this.theLetters[i] = " _ ";

        }
    }
    this.game = function(userInput) {
        this.guessCount -= 1;
        console.log(this.guessCount);
        for (var j = 0; j < this.cpuGuess.length; j++) {
            if (userInput.toLowerCase() === this.cpuGuess.charAt(j)) {
                this.theLetters[j] = userInput;

                console.log(this.theLetters.join(""));
                console.log(this.cpuGuess);

            }
        }

    }

}
module.exports = Letter;
// var letter = new Letter();
// letter.setUp()
// letter.game("c");