class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.avg = Math.round((this.min + this.max) / 2);
        return this.avg;
    }

    lower() {
        this.max = this.avg;
    }

    greater() {
        this.min = this.avg;
    }
}

module.exports = GuessingGame;
