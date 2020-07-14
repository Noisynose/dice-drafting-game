const DIE_COLORS = {
  BLUE: 'blue',
  GREEN: 'green',
  PURPLE: 'purple',
  RED: 'red',
  YELLOW: 'yellow',
}

class Die {
  _value;
  _numberOfFaces;
  _color;

  constructor(value, numberOfFaces, color) {
    this._value = value || 1;
    this._numberOfFaces = numberOfFaces || 6;
    this._color = color;
  }

  roll() {
    this._value = Math.round(Math.random() * this._numberOfFaces) + 1;
    return this._value;
  }

  reverse() {
    this._value = this._numberOfFaces - this._value + 1;
    return this._value;
  }
}