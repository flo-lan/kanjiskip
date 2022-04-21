import { Model, Sequelize } from 'sequelize'

import KanjiModel from './KanjiModel'

interface IModel extends Model {
  associate: (models?: Models) => void
  initialize: (sequelize: Sequelize) => void
}

export interface Models {
  Kanji: typeof KanjiModel
}

export default IModel
