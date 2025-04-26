const mongosee = require("mongoose");
const PsImagesSchema = new mongosee.Schema({
  frfr: {
    propf: String,
    lecl1: String,
    hamf251: String,
  },
});

const PsImagesModel = mongosee.model("psimages", PsImagesSchema);
module.exports = PsImagesModel;
