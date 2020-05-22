import knex from 'knex'

import config from '../../knexfile'

const connection = knex(config[process.env.NODE_ENV])

export default connection
