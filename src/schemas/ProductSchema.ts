import Knex from 'knex'
import Crud from '../models/Crud'

class ProductSchema extends Crud {
  public constructor (protected connection: Knex) {
    super(connection)
  }

  public async create (product) {}

  public find (product) {}

  public update (id, product) {}

  public destroy (id) {}
}

export default ProductSchema
