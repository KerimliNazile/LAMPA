import express from "express";
const app = express();

import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Stripe from 'stripe';
import bodyParser from 'body-parser';

import ProductRouter from "./Router/ProductsRouter.js";
import UserRouter from "./Router/userRouter.js";
import LogoRouter from "./Router/LogoRouter.js";
import SwiperRouter from "./Router/SwiperRouter.js";

const stripe = new Stripe(process.env.SECRET_KEY);
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/", ProductRouter)
app.use("/", LogoRouter)
app.use("/", UserRouter)
app.use("/", SwiperRouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/payment", async (req, res) => {
  let status, error;
  const { token, amount } = req.body;
  try {
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: 'usd',
    });
    status = 'success';
  } catch (error) {
    console.log(error);
    status = 'Failure';
  }
  res.json({ error, status });
});

const port = process.env.PORT;
const url = process.env.URL.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(url)
  .then(() => console.log("Db connect"))
  .catch((err) => console.log("Db not connect" + err));
app.listen(port, () => {
  console.log(`Example app listening on port `);
});
