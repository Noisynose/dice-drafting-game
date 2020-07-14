class DiceBagController {
  diceBagService;

  constructor(diceBagService) {
    this.diceBagService = diceBagService;
  }

  generate() {
    return this.diceBagService.create();
  }
}

export default DiceBagController;
