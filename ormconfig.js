require('dotenv').config()

module.exports = {
  type: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  entities: ['server/database/entity/**/*.entity{.js,.ts}'],
  migrations: ['server/database/migration/**/*{.js,.ts}'],
  logging: process.env.DB_LOGGING.toLowerCase() === 'true',
  cli: {
    entitiesDir: 'server/database/entity',
    migrationsDir: 'server/database/migration',
  },
}
