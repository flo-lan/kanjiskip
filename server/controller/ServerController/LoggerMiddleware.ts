import express from 'express'
import { logger } from '../../utils/Logger'

const loggerMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  logger.debug(`${req.method} ${req.url} Request received`)

  if (Object.keys(req.params).length !== 0) {
    logger.debug(`With params: ${JSON.stringify(req.params)}`)
  }
  if (Object.keys(req.body).length !== 0) {
    logger.debug(`With body: ${JSON.stringify(req.body)}`)
  }

  const oldSend = res.send
  res.send = (data) => {
    logger.debug(`${req.method} ${req.url} Response: ${JSON.stringify(data)}`)
    res.send = oldSend
    return res.send(data)
  }

  next()
}

export default loggerMiddleware
