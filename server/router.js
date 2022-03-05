const express = require("express");
router = express.Router();
const { addSitter, getSitters } = require("./controllers/sitterControl");

router.get("/sitters", getSitters);

router.post("/sitters", addSitter);

module.exports = router;
