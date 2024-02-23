import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    password: { type: String },
    role: { type: String, default: "user" },
    email: { type: String },
    wishlist: [
      {
        // product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      },
    ],
    basket:[{
      
    },

    ],
  },

  { timestamps: true }
);

export const Users = mongoose.model("Users", UserSchema);