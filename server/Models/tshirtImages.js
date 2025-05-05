const mongoose = require("mongoose");

const TshImagesSchema = new mongoose.Schema({
  id: String, // ← ეს უნდა იყოს
  name: String,
  descr: String,
  price: String,
  images: {
    img1: String,
    img2: String,
    img3: String,
  },
  type: String,
});

const TshImagesModel = mongoose.model("tshirtimages", TshImagesSchema);
module.exports = TshImagesModel;
