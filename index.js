const express = require("express");
const mongoose = require("mongoose");
const router = require("./router.js");
const fileUpload = require("express-fileupload");
require('dotenv').config();


const DB_URL = process.env.DB_URL;

const PORT = process.env.PORT || 5000;

const app = express();

app.use(fileUpload())
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
