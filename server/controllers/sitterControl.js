const Sitter = require("../models/sitter");

const getSitters = async (req, res) => {
  try {
    const sitters = await Sitter.find();
    res.json(sitters);
    res.status(201);
  } catch (e) {
    console.error(e);
    res.status(400);
  }
};

const addSitter = async (req, res) => {
  try {
    const sitter = new Sitter({
      name: req.body.name,
      quote: req.body.quote,
      avatar: req.body.avatar,
    });
    await sitter.save();
    res.json(sitter);
    res.status(201);
  } catch (e) {
    res.status(400);
    console.log(e);
  }
};

module.exports = { getSitters, addSitter };
