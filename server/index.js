const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router");

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
