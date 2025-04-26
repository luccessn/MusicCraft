const mongosee = require("mongoose");

const CvImagesSchema = new mongosee.Schema({
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

const CvImagesModel = mongosee.model("coverImages", CvImagesSchema);
module.exports = CvImagesModel;
