import {Schema, model} from 'mongoose'

const LogosSchema = new Schema(
    {
      image: { type: String, required: true },
    
    },
    { timestamps: true }
  );

export const Logos= model('Logos', LogosSchema);