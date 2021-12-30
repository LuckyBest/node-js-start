import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router } from "./router/index.js";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.URL;

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("error", e);
  }
};

start();
