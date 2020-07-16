import { DiceBagController } from '../../../server/composition-root'

export default (req, res) => {

  const result = DiceBagController.generate();

  res.status(200).json(result || {});
}
