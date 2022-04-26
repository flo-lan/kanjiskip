/* eslint-disable no-console */
import { Container } from 'typedi'
import { createConnection, useContainer } from 'typeorm'
import { Container as ORMContainer } from 'typeorm-typedi-extensions'

import ServerController from './controller/ServerController/ServerController'
import { addTransports } from './utils/Logger'
import Config from './Config'

class Application {
  private serverController: ServerController

  constructor() {
    this.serverController = Container.get(ServerController)
  }

  async run(): Promise<void> {
    addTransports(Config.logger.fileName)

    console.log('-- - - - - - - - - --')
    console.log('-- Kanijdict Server --')
    console.log('-- - - - - - - - - --')
    console.log(`-- DB Host: ${process.env.DB_HOST}`)
    console.log(`-- DB Port: ${process.env.DB_PORT}`)
    console.log(`-- DB Name: ${process.env.DB_NAME}`)
    console.log(`-- DB User: ${process.env.DB_USER}`)
    console.log(`-- DB Logging: ${process.env.DB_LOGGING}`)

    console.log(`-- Log File: ${Config.logger.fileName}`)

    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useContainer(ORMContainer)
      await createConnection()

      console.log(`-- Successfully connected to database!`)
    } catch (err) {
      console.error(`-- Could not connect to database: ${err}`)
      return
    }

    await this.serverController.run()
  }
}

export default Application
