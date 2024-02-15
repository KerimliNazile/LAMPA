import {Schema, model} from 'mongoose'

const ProductsSchema = new Schema(
    {
      image: { type: String, required: true },
      title: { type: String, required: true },
      by: { type: String, required: true },
      price: { type: Number, required: true },

      category: { type: String, required: true },
      formtyp: { type: String, required: true },
      size: { type: String, required: true }
    },
    { timestamps: true }
  );

export const Products= model('Products', ProductsSchema);