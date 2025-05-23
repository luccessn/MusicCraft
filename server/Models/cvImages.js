const mongoose = require("mongoose");

const CvImagesSchema = new mongoose.Schema({
  id: String, // ← ეს უნდა იყოს
  name: String,
  descr: String,
  price: String,
  images: {
    img1: String,
    img2: String,
    img3: String,
  },
});

const CvImagesModel = mongoose.model("coverImages", CvImagesSchema);
module.exports = CvImagesModel;
