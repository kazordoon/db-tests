import Knex from 'knex'
import Crud from '../models/Crud'
import CreateProduct from '../models/CreateProduct'

class ProductSchema extends Crud {
  public constructor (protected connection: Knex) {
    super(connection)
  }

  public async create (product: CreateProduct) {
    const productId = await this.connection('products')
      .insert(product)
      .returning('id')
    return productId
  }

  public find (product) {}

  public update (id, product) {}

  public destroy (id) {}
}

export default ProductSchema
