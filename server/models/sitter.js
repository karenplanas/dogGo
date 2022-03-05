const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SitterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

const Sitter = mongoose.model("Sitter", SitterSchema);
module.exports = Sitter;
