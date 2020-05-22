import dotenv from 'dotenv'

// Load environment variables that are at ".env" file
if (process.env.NODE_ENV === 'development') {
  dotenv.config()
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({
    path: '.env.test'
  })
}

// eslint-disable-next-line import/first
import './database/connection'
