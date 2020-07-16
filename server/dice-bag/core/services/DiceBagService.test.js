import DiceBagService from './DiceBagService';

describe('DiceBagService', () => {
  let service;
  let mockDiceBagGenerator;

  const A_DICE_BAG = {};

  beforeEach(() => {
    mockDiceBagGenerator = {
      generate: jest.fn().mockReturnValue(A_DICE_BAG),
    };

    service = new DiceBagService(mockDiceBagGenerator);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should generate dice bag with config', () => {
      const A_CONFIG = {};

      service.create(A_CONFIG);

      expect(mockDiceBagGenerator.generate).toHaveBeenCalledWith(A_CONFIG);
    });

    it('should return dice bag from generator', () => {
      const result = service.create();

      expect(result).toEqual(A_DICE_BAG);
    });
  });
});
