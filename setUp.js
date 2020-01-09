var setUp = function() {
    this.words = ["coding", "css", "javascript", "node", "mysql", "bugs", "debugging"];
    this.userGuess = false;
    this.theLetters = [];
    this.cpuGuess = this.words[Math.floor(Math.random() * this.words.length)];
    this.setUp = function() {

        for (var i = 0; i < this.cpuGuess.length; i++) {
            this.theLetters[i] = this.theLetters[i] = " _ ";

        }
    }

}
module.exports = setUp;