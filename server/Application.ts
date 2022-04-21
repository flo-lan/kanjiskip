/* eslint-disable no-console */
import { Container } from 'typedi'

import ServerController from './controller/ServerController/ServerController'
import { addTransports } from './utils/Logger'
import Config from './Config'
import DatabaseService from './service/DatabaseService'

class Application {
  private serverController: ServerController

  private databaseService: DatabaseService

  constructor() {
    this.serverController = Container.get(ServerController)
    this.databaseService = Container.get(DatabaseService)
  }

  async run(): Promise<void> {
    addTransports(Config.logger.fileName)

    console.log('-- - - - - - - - - --')
    console.log('-- Kanijdict Server --')
    console.log('-- - - - - - - - - --')
    console.log(`-- DB Host: ${Config.database.host}`)
    console.log(`-- DB Port: ${Config.database.port}`)
    console.log(`-- DB Name: ${Config.database.name}`)
    console.log(`-- DB User: ${Config.database.user}`)
    console.log(`-- DB Logging: ${Config.database.logging}`)

    console.log(`-- Log File: ${Config.logger.fileName}`)
    console.info(Config.database)
    try {
      await this.databaseService.connect(
        Config.database.host,
        Config.database.port,
        Config.database.name,
        Config.database.user,
        Config.database.pass,
        Config.database.dialect,
        Config.database.logging
      )

      console.log(
        `-- Successfully connected to database ${Config.database.name}!`
      )
    } catch (err) {
      console.error(`-- Could not connect to database: ${err}`)
      return
    }

    await this.serverController.run()
  }
}

export default Application
