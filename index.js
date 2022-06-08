const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/router.js");
require('dotenv').config();


const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use("/api", router)

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Listening port ${PORT} ...`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
