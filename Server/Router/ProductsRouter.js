import express from 'express'
import {  DeleteProduct, GetByIdProduct, GetProduct,PostProduct,UpdateProduct,} from '../Controllers/ProductsControllers.js'



const ProductRouter=express.Router()

ProductRouter.get('/product',GetProduct)

ProductRouter.get('/product/:id',GetByIdProduct)

ProductRouter.delete('/product/:id', DeleteProduct)

ProductRouter.post('/product',PostProduct)

ProductRouter.put('/product/:id',UpdateProduct)

export default ProductRouter 