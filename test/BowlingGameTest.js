var expect = require('chai').expect;
var BowlingGame = require('../src/BowlingGame');

describe('Bowling Game:', () => {
  var game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  describe('score()', () => {
    it('when a gutter game should return 0', () => {
      rollTwentyWith(0);
      scoreShouldEqualTo(0);
    });

    it('when roll all ones should return 20', () => {
      rollTwentyWith(1);
      scoreShouldEqualTo(20);
    });

    it('when roll all 9 at first and all 0 at second should return 90', () => {
      for (let i = 0; i < 20; i++) {
        if (i % 2 == 0) {
          game.roll(9);
        } else {
          game.roll(0);
        }
      }

      scoreShouldEqualTo(90);
    });

    it('when roll 5 three times, then is a spare and should return 20', () => {
      rollMany(3, 5);
      rollMany(17, 0);
      scoreShouldEqualTo(20);
    });

    it('when roll all 5 should return 150', () => {
      rollTwentyWith(5);
      game.roll(5);
      scoreShouldEqualTo(150);
    });

    it('when roll 10, then roll 4 and 3, then is a strike and should return 24', () => {
      game.roll(10);
      game.roll(4);
      game.roll(3);
      rollMany(16, 0);
      scoreShouldEqualTo(24);
    });

    it('when is a perfect game, then should return 300', () => {
      rollMany(21, 10);
      scoreShouldEqualTo(300);
    });
  });

  function rollMany(times, pins) {
    for (let i = 0; i < times; i++) {
      game.roll(pins);
    }
  }

  function rollTwentyWith(pins) {
    rollMany(20, pins);
  }

  function scoreShouldEqualTo(points) {
    expect(game.score()).to.equal(points);
  }
});
