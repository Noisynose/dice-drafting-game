import DiceGenerator from './DiceGenerator';

describe('DiceGenerator', () => {
  let generator;

  beforeEach(() => {
    generator = new DiceGenerator();
  });

  it('should be defined', () => {
    expect(generator).toBeDefined();
  });
});
