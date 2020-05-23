import Knex from 'knex'
import Crud from '../models/Crud'
import CreateProduct from '../models/CreateProduct'
import FindProduct from '../models/FindProduct'

class ProductSchema extends Crud {
  public constructor (protected connection: Knex) {
    super(connection)
  }

  public async create (product: CreateProduct) {
    const result = await this.connection('products')
      .insert(product)
      .returning('id')
    const productId: number = result[0]
    return productId
  }

  public async find (product: FindProduct) {
    const products: FindProduct[] = await this.connection('products')
      .select('*')
      .where(product)

    return products
  }

  public update (id, product) {}

  public destroy (id) {}
}

export default ProductSchema
