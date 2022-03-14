import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface ISitter {
  name: string;
  quote: string;
  avatar: string;
}

const SitterSchema = new Schema<ISitter>({
  name: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

const Sitter = mongoose.model<ISitter>("Sitter", SitterSchema);


const findSitters = () => {
  return Sitter.find();
}

export { ISitter, Sitter, findSitters };
