import express from "express";
const app = express();

import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRouter from "./Router/ProductsRouter.js";
import UserRouter from "./Router/userRouter.js";

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/", ProductRouter)
app.use("/", UserRouter)



const port = process.env.PORT;
const url = process.env.URL.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(url)
  .then(() => console.log("Db connect"))
  .catch((err) => console.log("Db not connect" + err));
app.listen(port, () => {
  console.log(`Example app listening on port `);
});
