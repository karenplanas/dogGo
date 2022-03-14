import mongoose from "mongoose";
const Schema = mongoose.Schema;

interface ISitterSchema {
  name: string;
  quote: string;
  avatar: string;
}

const SitterSchema = new Schema<ISitterSchema>({
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

const Sitter = mongoose.model<ISitterSchema>("Sitter", SitterSchema);

export default Sitter;
