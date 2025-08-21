import express from "express";
import dotenv from "dotenv/config"
import {ENV} from "./config/env.js"
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 1 2 3")
  
  
})
console.log("mongo uri",ENV.MONGO_URI);

app.listen(ENV.PORT,()=>console.log("Server started on port",ENV.PORT))