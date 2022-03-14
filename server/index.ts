import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./router";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
  .connect("mongodb://127.0.0.1/doggo")
  .then(() => console.log("mongoose connected to db"))
  .catch((e) => console.error(e));

app.listen(PORT, () => {
  console.log("listening at 3001");
});
