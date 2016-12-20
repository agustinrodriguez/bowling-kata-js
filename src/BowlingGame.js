class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let i = 0; i < 10; i++) {
      if (this.isStrike(rollIndex)) {
        score += this.scoreOfStrike(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        score += this.scoreOfSpare(rollIndex);
        rollIndex += 2;
      } else {
        score += this.scoreOfFrame(rollIndex);
        rollIndex += 2;
      }
    }

    return score;
  }

  isSpare(rollIndex) {
    return this.scoreOfFrame(rollIndex) == 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] == 10;
  }

  scoreOfFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  scoreOfStrike(rollIndex) {
    return 10 + this.scoreOfFrame(rollIndex + 1);
  }

  scoreOfSpare(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
}

module.exports = BowlingGame;
