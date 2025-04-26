require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CvImagesModel = require("./Models/cvImages");
// const PsImagesModel = require("./Models/psImages");

const app = express();

// Cors

app.use(cors());
app.use(express.json());

//MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 50000, // 50 seconds timeout
  })
  .then(() => console.log("კავშირი დამყარებელუია"))
  .catch((err) => console.error("MongoDB კავშირის შეცდომა:", err));
//
app.get("/", (req, res) => {
  res.send("API მუშაობსa");
});

// ამოღება cvImages დან
app.get("/getcvImages", async (req, res) => {
  const id = req.query.id;

  try {
    if (id) {
      const image = await CvImagesModel.findOne({ id: id });

      if (!image) {
        return res.status(404).json({ error: "პროდუქტი ვერ მოიძებნა" });
      }

      return res.json(image);
    } else {
      // თუ id არ არის, დააბრუნე ყველა ელემენტი
      const allImages = await CvImagesModel.find();
      return res.json(allImages);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ამოღება psImages დან
// app.get("/getpsImages", (req, res) => {
//   PsImagesModel.find()
//     .then((images) => res.json(images))
//     .catch((err) => res.status(500).json({ error: err.message }));
// });
// პორტი
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`სერვერი მუშაობს პორტზე ${PORT}`);
});
