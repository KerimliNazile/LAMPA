import {Schema, model} from 'mongoose'

const ProductsSchema = new Schema(
    {
      image: { type: String,},
      detailsImage: [{ type: String,  }],
      title: { type: String,  },
      by: { type: String,  },
      price: { type: Number, },
      category: { type: String, },
      formtyp: { type: String,},
      size: { type: String,  },
    },
    { timestamps: true }
  );

export const Products= model('Products', ProductsSchema);