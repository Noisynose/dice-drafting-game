import { Container } from 'inversify';
import composeDiceBag from './dice-bag/container';

const container = new Container();

composeDiceBag(container);

const DiceBagController = container.get(TYPES.DiceBagController);

export { DiceBagController };
export default container;