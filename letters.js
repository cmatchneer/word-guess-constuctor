var Letters = function(lett) {
    this.letter = "";
    this.guess = false;
    this.setUp = function() {
        if (lett === " ") {
            this.letter = " ";
            this.guess = true;
        }
        if (this.guess === false) {
            this.letter = "_";
        }

        if (this.guess === true) {
            this.letter = lett;
        }
    }
    this.check = function(userInput) {
        if (userInput.toLowerCase() === lett.toLowerCase()) {
            this.guess = true;
        }
    }
}
module.exports = Letters;