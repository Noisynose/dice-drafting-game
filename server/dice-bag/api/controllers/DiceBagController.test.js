import DiceBagController from './DiceBagController';

describe('DiceBagController', () => {
  let controller;
  let mockDiceBagService;

  const A_DICE_BAG = {};

  beforeEach(() => {
    mockDiceBagService = {
      create: jest.fn().mockReturnValue(A_DICE_BAG),
    };

    controller = new DiceBagController(mockDiceBagService)
  });

  it('expect controller to be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create dice bag', () => {
      controller.generate();

      expect(mockDiceBagService.create).toHaveBeenCalledTimes(1);
    })

    it('should return value', () => {
      const diceBag = controller.generate();

      expect(diceBag).toEqual(A_DICE_BAG);
    })
  })
});
