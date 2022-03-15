import express from "express";
import * as sitterController from "./controllers/sitter-controller";
import * as userController from "./controllers/user-controller";

const router = express.Router();

router.get("/sitters", sitterController.getSitters);
router.post("/sitters", sitterController.addSitter);

router.post("/social-login", userController.socialLogin);

export default router;
