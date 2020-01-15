var GameOver = function() {
    this.wins = 0;
    this.losses = 0;
    this.win = function() {
        this.wins++;
        console.log("\n", "The force was with you", "\n",
            "You have won " + this.wins + " times");
    }
    this.lose = function(cpuGuess) {
        this.losses++;
        console.log("\n", "You need more training in the force ",
            "\n", cpuGuess + " was the word you missed", "\n", "You have lost " + this.losses + " times");
    }
    this.done = function() {
        console.log("\n", "May the force be with you" + '\n', "Your win total: " + this.wins, "\n",
            " Your total losses: " + this.losses)
    }
}
module.exports = GameOver;