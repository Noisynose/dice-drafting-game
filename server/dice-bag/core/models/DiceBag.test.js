import DiceBag from './DiceBag';

describe('DiceBag', () => {
  let diceBag

  beforeEach(() => {
    diceBag = new DiceBag();
  });

  it('should be defined', () => {
    expect(diceBag).toBeDefined();
  });

  describe('isEmpty', () => {
    it('should be true when no dice available', () => {
      expect(diceBag.isEmpty()).toEqual(true);
    });

    it('should be false when at least one die is available', () => {
      diceBag = new DiceBag([1]);

      expect(diceBag.isEmpty()).toEqual(false);
    });
  });

  describe('shuffle', () => {
    it('should shuffle dice', () => {
      const bigDiceBag = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      diceBag = new DiceBag(bigDiceBag);

      diceBag.shuffle();

      expect(diceBag._dice).not.toEqual(bigDiceBag);
    });
  });

  describe('draft', () => {
    it('should draft an amount of size dice', () => {
      const numberToDraft = 5;
      diceBag = new DiceBag([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

      const result = diceBag.draft(numberToDraft);

      expect(result).toHaveLength(numberToDraft);
    });

    it('should draft no dice when bag is empty', () => {
      const result = diceBag.draft(5);

      expect(result).toEqual([]);
    })
  });
});
