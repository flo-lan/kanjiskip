interface Config {
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
