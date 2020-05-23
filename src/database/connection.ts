import knex from 'knex'
import pg, { types } from 'pg'

import config from '../../knexfile'

// Postgres numeric type was coming as string
// But this settings will set it as a number
types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => (
  parseFloat(value)
))

const connection = knex(config[process.env.NODE_ENV])

export default connection
