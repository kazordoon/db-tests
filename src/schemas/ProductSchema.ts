import Knex from 'knex'
import Crud from '../models/Crud'
import CreateProduct from '../models/CreateProduct'
import FindProduct from '../models/FindProduct'
import UpdateProduct from '../models/UpdateProduct'

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

  public async update (id: number, product: UpdateProduct) {
    const result = await this.connection('products')
      .update(product)
      .where('id', '=', id)
      .returning('*')

    const updatedProduct: FindProduct = result[0]
    return updatedProduct
  }

  public async destroy (id: number) {
    await this.connection('products')
      .delete('*')
      .where('id', '=', id)

    return true
  }
}

export default ProductSchema
