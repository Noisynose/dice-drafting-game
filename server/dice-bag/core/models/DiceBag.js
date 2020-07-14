class DiceBag {
  _dice;

  constructor(dice) {
    this._dice = dice;
  }

  shuffle() {

  }

  draft() {

  }

  isEmpty() {
    return this._dice.length === 0;
  }
}