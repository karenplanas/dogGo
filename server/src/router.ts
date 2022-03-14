import express from "express";
import * as sitterController from "./controllers/sitterControl";

const router = express.Router();

router.get("/sitters", sitterController.getSitters);
router.post("/sitters", sitterController.addSitter);

export default router;
