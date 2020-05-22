import CreateProduct from '../src/models/CreateProduct'
import ProductSchema from '../src/schemas/ProductSchema'
import connection from '../src/database/connection'

const CREATE_PRODUCT_MOCK: CreateProduct = {
  name: 'Notebook',
  description: 'An awesome notebook',
  price: 700.99
}

describe('Product', () => {
  afterAll(async () => {
    await connection.destroy()
  })

  afterEach(async () => {
    await connection('products').truncate()
  })

  it('should create a new product', async () => {
    const productSchema = new ProductSchema(connection)

    const productId = await productSchema.create(CREATE_PRODUCT_MOCK)
    console.log(productId)
    expect(productId).toBeDefined()
  })
})
