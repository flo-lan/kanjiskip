import { Dialect, Sequelize, Transaction } from 'sequelize'
import { Service } from 'typedi'

import DatabaseServiceError from '../error/DatabaseServiceError'
import { Models } from '../database/model/IModel'
import KanjiModel from '../database/model/KanjiModel'

@Service()
class DatabaseService {
  sequelize: Sequelize | undefined

  models: Models

  connect(
    host: string,
    port: number,
    name: string,
    user: string,
    pass: string,
    dialect: Dialect,
    logging?: boolean
  ): Promise<void> {
    this.sequelize = new Sequelize(name, user, pass, {
      host,
      port,
      dialect,
      logging: logging || false,
    })

    this.initModels()

    return this.sequelize.authenticate()
  }

  initModels(): void {
    KanjiModel.initialize(this.sequelize)

    this.models = {
      Kanji: KanjiModel,
    }

    Object.keys(this.models).forEach((modelName) => {
      if (this.models[modelName].associate) {
        this.models[modelName].associate(this.models)
      }
    })
  }

  async createTransaction(): Promise<Transaction | DatabaseServiceError> {
    if (!this.sequelize) {
      return new DatabaseServiceError(
        'Transaction creation failed, because there is no connection to the database!'
      )
    }

    try {
      return await this.sequelize.transaction()
    } catch (err) {
      return new DatabaseServiceError(undefined, err)
    }
  }

  async commitTransaction(
    transaction: Transaction
  ): Promise<void | DatabaseServiceError> {
    if (!this.sequelize) {
      return new DatabaseServiceError(
        'Transaction commit failed, because there is no connection to the database!'
      )
    }

    try {
      await transaction.commit()
    } catch (err) {
      return new DatabaseServiceError(undefined, err)
    }

    return Promise.resolve()
  }

  async rollbackTransaction(
    transaction: Transaction
  ): Promise<void | DatabaseServiceError> {
    if (!this.sequelize) {
      return new DatabaseServiceError(
        'Transaction rollback failed, because there is no connection to the database!'
      )
    }

    try {
      await transaction.rollback()
    } catch (err) {
      return new DatabaseServiceError(undefined, err)
    }

    return Promise.resolve()
  }
}

export default DatabaseService
