import DiceBagConfiguration from '../../core/models/DiceBagConfiguration'

class DiceBagController {
  _diceBagService;

  constructor(diceBagService) {
    this._diceBagService = diceBagService;
  }

  generate() {
    const defaultConfig = new DiceBagConfiguration(5, 5, 5, 5, 5, 3);

    return this._diceBagService.create(defaultConfig);
  }
}

export default DiceBagController;
