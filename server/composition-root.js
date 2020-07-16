import "reflect-metadata";
import { Container } from 'inversify';
import composeDiceBag from './dice-bag/container';
import DICEBAG_TYPES from './dice-bag/types'

const container = new Container();

composeDiceBag(container);

const DiceBagController = container.get(DICEBAG_TYPES.DiceBagController);

export { DiceBagController };
export default container;