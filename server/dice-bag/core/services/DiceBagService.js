class DiceBagService {
  _diceBagGenerator;

  constructor(diceBagGenerator) {
    this._diceBagGenerator = diceBagGenerator;
  }

  create(configuration) {
    const diceBag = this._diceBagGenerator.generate(configuration);

    return diceBag;
  }
}

export default DiceBagService;
