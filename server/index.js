import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import SubscribeModel from "./models/SubscribeModel.js";
import { addSubscribe } from "./controllers/SubscribeController.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database Connected"));

app.post("/subscribe", addSubscribe);

app.listen(8000, () => console.log("App started listening on port 8000"));
