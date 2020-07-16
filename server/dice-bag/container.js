import { decorate, injectable, inject } from 'inversify';
import DiceBagController from './api/controllers/DiceBagController';
import DiceBagService from './core/services/DiceBagService';
import DiceGenerator from './core/generators/DiceGenerator';
import DiceBagGenerator from './core/generators/DiceBagGenerator';
import TYPES from './types';

const composeDiceBag = (container) => {
  decorate(injectable(), DiceGenerator);

  decorate(injectable(), DiceBagGenerator);
  decorate(inject(TYPES.DiceGenerator), DiceBagGenerator, 0);

  decorate(injectable(), DiceBagService);
  decorate(inject(TYPES.DiceBagGenerator), DiceBagService, 0);

  decorate(injectable(), DiceBagController);
  decorate(inject(TYPES.DiceBagService), DiceBagController, 0);

  container.bind(TYPES.DiceGenerator).to(DiceGenerator);
  container.bind(TYPES.DiceBagGenerator).to(DiceBagGenerator);
  container.bind(TYPES.DiceBagService).to(DiceBagService);
  container.bind(TYPES.DiceBagController).to(DiceBagController);
};

export default composeDiceBag
