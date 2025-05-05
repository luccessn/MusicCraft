require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CvImagesModel = require("./Models/cvImages");
const CaseImagesModel = require("./Models/caseImages");
const HodImagesModel = require("./Models/hoodImages");
const TshImagesModel = require("./Models/tshirtImages");
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
// Case ფოტოების ამოღება
app.get("/getcaseImages", async (req, res) => {
  const id = req.query.id;

  try {
    if (id) {
      const image = await CaseImagesModel.findOne({ id: id });

      if (!image) {
        return res.status(404).json({ error: "პროდუქტი ვერ მოიძებნა" });
      }

      return res.json(image);
    } else {
      // თუ id არ არის, დააბრუნე ყველა ელემენტი
      const allImages = await CaseImagesModel.find();
      return res.json(allImages);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//Hood ფოტოების ამოღება
app.get("/gethoodImages", async (req, res) => {
  const id = req.query.id;

  try {
    if (id) {
      const image = await HodImagesModel.findOne({ id: id });

      if (!image) {
        return res.status(404).json({ error: "პროდუქტი ვერ მოიძებნა" });
      }

      return res.json(image);
    } else {
      // თუ id არ არის, დააბრუნე ყველა ელემენტი
      const allImages = await HodImagesModel.find();
      return res.json(allImages);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//T-SHIRT ფოტოების ამოღება
app.get("/gettshirtImages", async (req, res) => {
  const id = req.query.id;

  try {
    if (id) {
      const image = await TshImagesModel.findOne({ id: id });

      if (!image) {
        return res.status(404).json({ error: "პროდუქტი ვერ მოიძებნა" });
      }

      return res.json(image);
    } else {
      // თუ id არ არის, დააბრუნე ყველა ელემენტი
      const allImages = await TshImagesModel.find();
      return res.json(allImages);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// პორტი
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`სერვერი მუშაობს პორტზე ${PORT}`);
});
