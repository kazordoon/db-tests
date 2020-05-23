import CreateProduct from '../src/models/CreateProduct'
import UpdateProduct from '../src/models/UpdateProduct'
import ProductSchema from '../src/schemas/ProductSchema'
import connection from '../src/database/connection'

const CREATE_PRODUCT_MOCK: CreateProduct = {
  name: 'Notebook',
  description: 'An awesome notebook',
  price: 700.99
}
const UPDATE_PRODUCT_MOCK: UpdateProduct = {
  price: 1699.50
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
    expect(productId).toBeDefined()
  })

  it('should list all products', async () => {
    const productSchema = new ProductSchema(connection)

    const productId = await productSchema.create(CREATE_PRODUCT_MOCK)

    const products = await productSchema.find({ id: productId })

    expect(products).toBeDefined()
    expect(products[0].id).toBe(productId)
  })

  it('should update a product', async () => {
    const productSchema = new ProductSchema(connection)

    const productId = await productSchema.create(CREATE_PRODUCT_MOCK)

    const product = await productSchema.update(productId, UPDATE_PRODUCT_MOCK)

    expect(product).toBeDefined()
    expect(product.price).toBe(UPDATE_PRODUCT_MOCK.price)
  })
})
