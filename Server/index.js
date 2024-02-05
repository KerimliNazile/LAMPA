import express from "express";
const app = express();

import cors from "cors";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";

dotenv.config();
app.use(cors());
app.use(express.json());

const lampsSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Lamps = mongoose.model("Lamps", lampsSchema);
app.get("/lamps", async (req, res) => {
  try {
    const lamps = await Lamps.find({});
    res.send(lamps);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
app.get("/lamps/:id", async (req, res) => {
  try {
    const lamps = await Lamps.findById(req.params.id);
    res.send(lamps);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.post("/lamps", async (req, res) => {
  try {
    const lamp= new Lamps({
      image: req.body.image,
      title: req.body.title,
      text: req.body.text,
      price: req.body.price,
    });
    await lamp.save();
    res.send({ message: "Created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.put("/lamps/:id", async (req, res) => {
    try {
      const lamps = await Lamps.findByIdAndUpdate(req.params.id);
      res.status(200).json({ message: "Update" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

app.delete("/lamps/:id", async (req, res) => {
  try {
    const lamps = await Lamps.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
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
