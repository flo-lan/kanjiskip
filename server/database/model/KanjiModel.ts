import { Sequelize, Model, DataTypes } from 'sequelize'

interface Kanji {
  id: string
  character: string
  createdAt: string
  updatedAt: string
}

class KanjiModel extends Model<Kanji> {
  public id!: string

  public character!: string

  public readonly createdAt!: Date

  public readonly updatedAt!: Date

  static initialize(sequelize: Sequelize): void {
    KanjiModel.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
        },
        character: {
          type: DataTypes.CHAR,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'kanjis',
      }
    )
  }
}

export default KanjiModel
