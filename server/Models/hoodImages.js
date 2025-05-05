const mongoose = require("mongoose");

const HodImagesSchema = new mongoose.Schema({
  id: String,
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

const HodImagesModel = mongoose.model("hoodimages", HodImagesSchema);
module.exports = HodImagesModel;
