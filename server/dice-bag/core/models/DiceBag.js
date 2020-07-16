// TODO: introduce class for algo shuffle ? prolly wont happen
const shuffleAlgo = (array) => {
  const result = [...array];

  let to = 0;
  let swap;
  for (let from = result.length - 1; from > 0; from--) {
    to = Math.floor(Math.random() * (from + 1));
    swap = result[from];
    result[from] = result[to];
    result[to] = swap;
  }

  return result;
}

class DiceBag {
  _dice;

  constructor(dice) {
    this._dice = dice || [];
  }

  draft(size) {
    const diceToRemove = Math.max(0, Math.min(size, this._dice.length));

    const draftedDice = [];
    if (diceToRemove) {
      this.shuffle();

      for (let i = 0; i < diceToRemove; i++) {
        draftedDice.push(this._dice.shift());
      }
    }

    return draftedDice;
  }

  shuffle() {
    this._dice = shuffleAlgo(this._dice);
  }

  isEmpty() {
    return this._dice.length === 0;
  }
}

export default DiceBag
