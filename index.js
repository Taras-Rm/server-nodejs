import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload"

const DB_URL =
  "mongodb+srv://user:root@cluster0.1zdbi.mongodb.net/?retryWrites=true&w=majority";

const PORT = 3000;

const app = express();

app.use(fileUpload({}))
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
