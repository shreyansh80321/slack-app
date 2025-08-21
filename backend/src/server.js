import express from "express";
import dotenv from "dotenv/config"
import {ENV} from "./config/env.js"
import { connectDB } from "./config/db.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 1 2 3")
  
  
})

app.listen(ENV.PORT, () => {
  console.log("Server started on port", ENV.PORT)
  connectDB();
})