import Die from './Die';

describe('Die', () => {
  let model;

  beforeEach(() => {
    model = new Die();
  });

  it('should be defined', () => {
    expect(model).toBeDefined();
  });

  describe('roll', () => {
    it('should change die value', () => {
      model = new Die(1, 10);

      const newValue = model.roll();

      expect(newValue).toEqual(model._value);
    });
  });

  describe('reverse', () => {
    it('should return 8 on a 10faced die of value 3', () => {
      model = new Die(3, 10);

      const newValue = model.reverse();

      expect(newValue).toEqual(8);
    });
  });
});
