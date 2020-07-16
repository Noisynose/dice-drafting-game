import DiceBagGenerator from './DiceBagGenerator';

describe('DiceBagGenerator', () => {
  let generator;

  beforeEach(() => {
    generator = new DiceBagGenerator();
  });

  it('should be defined', () => {
    expect(generator).toBeDefined();
  });
});
