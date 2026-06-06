import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  name: String,
  image: String
}, { timestamps: true });

const Image = mongoose.model("imagecrud", imageSchema);

export default Image;