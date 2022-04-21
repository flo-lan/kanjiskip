import { createLogger, format, transports } from 'winston'

import Config from '../Config'

const printf = format.printf(
  ({ timestamp, level, message, stack }) =>
    `[${timestamp}] ${level}: ${stack ?? message}`
)

export const logger = createLogger({
  level: Config.logger.logLevel,
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.colorize({ all: true }),
    format.errors({ stack: true }),
    printf
  ),
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), printf),
    })
  )
}

export function addTransports(fileName: string): void {
  logger.add(
    new transports.File({
      filename: `logs/${fileName}-error.log`,
      level: 'error',
      maxsize: Config.logger.maxFileSize,
    })
  )
  logger.add(new transports.File({ filename: `logs/${fileName}.log` }))
  logger.exceptions.handle(
    new transports.File({
      filename: `logs/${fileName}-exceptions.log`,
      maxsize: Config.logger.maxFileSize,
    })
  )
}
