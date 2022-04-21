import { Dialect } from 'sequelize'

function isDialect(dialect: string): dialect is Dialect {
  return ['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql'].includes(dialect)
}

interface Config {
  database: {
    name: string
    user: string
    pass: string
    host: string
    port: number
    dialect: Dialect
    logging: boolean
  }

  server: {
    port: number
    url: string
  }

  logger: {
    maxFileSize: number
    fileName: string
    logLevel: string
  }
}

const config: Config = {
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    dialect:
      process.env.DB_DIALECT && isDialect(process.env.DB_DIALECT)
        ? process.env.DB_DIALECT
        : 'mysql',
    logging: process.env.DB_LOGGING
      ? process.env.DB_LOGGING.toLowerCase() === 'true'
      : false,
  },

  server: {
    port: parseInt(process.env.SERVER_PORT, 10),
    url: process.env.SERVER_URL || `http://localhost:${process.env.PORT}`,
  },

  logger: {
    maxFileSize: process.env.LOG_FILE_SIZE
      ? parseInt(process.env.LOG_FILE_SIZE, 10)
      : 10485760, // 10mb,
    fileName: process.env.LOG_FILE_NAME || 'kanjiskip_logs',
    logLevel: process.env.LOG_LEVEL || 'info',
  },
}

export default config
