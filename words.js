var Letters = require("./letters");
var Word = function(word) {
    this.wordString = [];
    this.wordArray = [];
    this.wordBuilder = function() {
        for (var i = 0; i < word.length; i++) {

            var letter = new Letters(word[i]);
            this.wordArray.push(letter);
            this.wordArray[i].setUp();
            this.wordString.push(this.wordArray[i].letter);
            this.wordString.join("");

        }
    }
    this.checker = function(userInput) {
        for (var j = 0; j < this.wordArray.length; j++) {
            this.wordArray[j].check(userInput);
            this.wordArray[j].setUp();
            this.wordString[j] = this.wordArray[j].letter;

        }
    }
}
module.exports = Word;