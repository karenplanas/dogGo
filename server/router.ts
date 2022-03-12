import express from "express";
import * as sitterController from "./controllers/sitterControl";

const router = express.Router();

router.get("/sitters", sitterController.addSitter);

router.post("/sitters", sitterController.getSitters);

export default router;
