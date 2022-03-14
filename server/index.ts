import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config();
import router from "./router";
import * as db from "./models/db";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await db.connect();
});
