class BowlingGame {
  constructor() {
    this.rolls = [];
    this.currentRoll = 0;
  }

  roll(pins) {
    this.rolls[this.currentRoll] = pins;
    this.currentRoll++;
  }

  score() {
    let score = 0;
    let frameIndex = 0;

    for (let i = 0; i < 10; i++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.scoreOfFrame(frameIndex + 1);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        score += this.scoreOfFrame(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  isSpare(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10;
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] == 10;
  }

  scoreOfFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }
}

module.exports = BowlingGame;
