import Knex from 'knex'

import NotImplementedException from '../errors/NotImplementedException'

abstract class Crud {
  public constructor (protected connection: Knex) {}

  public create (item) {
    throw new NotImplementedException()
  }

  public find (item) {
    throw new NotImplementedException()
  }

  public update (id, item) {
    throw new NotImplementedException()
  }

  public destroy (id) {
    throw new NotImplementedException()
  }
}

export default Crud
