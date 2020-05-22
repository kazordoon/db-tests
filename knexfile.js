// Update with your config settings.
const { resolve } = require('path')
const dotenv = require('dotenv')

// Load environment variables that are at ".env" file
if (process.env.NODE_ENV === 'development') {
  dotenv.config()
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: '.env.test'
  })
}

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      tableName: 'knex_migrations'
    }
  }
}
