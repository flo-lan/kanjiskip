import express from 'express'
import { Server } from 'http'
import { Container, Service } from 'typedi'
import fs from 'fs'

import config from '../../Config'
import loggerMiddleware from './LoggerMiddleware'
import EndpointToken from '../../endpoint/EndpointToken'

const startGracefulShutdown = (server: Server): void => {
  // eslint-disable-next-line no-console
  console.log('Starting shutdown of express...')
  if (server) {
    server.close(() => {
      // eslint-disable-next-line no-console
      console.log('Express shut down.')
    })
  } else {
    // eslint-disable-next-line no-console
    console.log('Express was not running')
  }
  process.exit()
}

@Service()
class ServerController {
  public server: Server

  async run(): Promise<void> {
    const app = express()
    const router = express.Router()

    // import all endpoints so they get registered for DI
    fs.readdirSync(`${__dirname}/../../endpoint`)
      .filter((file) => file.slice(-3) === '.ts')
      .forEach((file) => {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        require(`/app/server/endpoint/${file}`)
      })

    const endpoints = Container.getMany(EndpointToken)
    endpoints.forEach((endpoint) => endpoint.registerRoutes(router))

    app.use(express.json())

    app.use('/api', loggerMiddleware, router)

    try {
      this.server = await app.listen(config.server.port)
    } catch (e) {
      if (e.code === 'EADDRINUSE') {
        console.error(
          `-- Could not start server on port ${config.server.port}, because the port is already in use!`
        )
      } else {
        console.error(`-- Could not start server: ${e.message}`)
      }
      throw new Error(e)
    }

    console.info(
      `-- Successfully started server on port ${config.server.port}!`
    )

    process.on('SIGTERM', () => startGracefulShutdown(this.server))
    process.on('SIGINT', () => startGracefulShutdown(this.server))
  }
}

export default ServerController
