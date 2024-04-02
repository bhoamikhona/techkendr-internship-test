import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { addSubscribe } from "./controllers/SubscribeController.js";

const app = express();

app.use(
  cors({
    origin: "https://techkendr-internship-test.vercel.app",
    // origin: "http://localhost:3000",
    credentials: true,
  })
);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, HEAD, OPTIONS, POST, PUT, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

app.use(express.json());

dotenv.config();

app.get("/", (req, res) => res.send("Welcome"));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Database Connected"));

// Add CORS headers for preflight OPTIONS request
app.options("/subscribe", cors());

app.post("/subscribe", addSubscribe);

app.listen(8000, () => console.log("App started listening on port 8000"));
