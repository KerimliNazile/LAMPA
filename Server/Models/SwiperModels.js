import {Schema, model} from 'mongoose'

const SwiperSchema = new Schema(
    {
      image: { type: String, required: true },
    
      title: { type: String, required: true },
      text: { type: String, required: true },
     
    },
    { timestamps: true }
  );

export const Swipers= model('Swipers', SwiperSchema);