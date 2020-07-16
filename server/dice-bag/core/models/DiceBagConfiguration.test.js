import DiceBagConfiguration from './DiceBagConfiguration';

describe('DiceBagConfiguration', () => {
  let config;

  beforeEach(() => {
    config = new DiceBagConfiguration();
  });

  it('should be defined', () => {
    expect(config).toBeDefined();
  });
});
