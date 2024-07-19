const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const userHouseRouter = express.Router();
const House = require("../models/house");
const UserHouse = require("../models/userHouse");

userHouseRouter.get("/houses", async (req, res, next) => {
  try {
    // console.log(req.auth._id);
    // console.log(req.auth._id);
    // console.log(req.body.user);
    const userHouses = await UserHouse.find({
      user: req.auth._id,
    })
      .populate("house")
      .exec();
    res.status(200).send(userHouses);
  } catch (error) {
    console.log(error);
  }
});

userHouseRouter.post("/", async (req, res, next) => {
  try {
    const house = await House.findOne({ name: req.body.house });
    if (!house) {
      return res.status(404).send({ error: "house not found" });
    }
    const userHouse = await UserHouse.findOne({ house: house._id });
    if (!!userHouse) {
      return res.status(404).send({ error: "house already in favorites" });
    }

    const imageUrl = req.body.customizations.crest; // Assuming the URL is passed in the request body
    const imagePath = path.resolve(
      __dirname,
      "../public/images",
      `${house.name}.png`
    );

    // Download and save the image
    const response = await axios({
      url: imageUrl,
      method: "GET",
      responseType: "stream",
    });
    response.data.pipe(fs.createWriteStream(imagePath));

    const newUserHouse = new UserHouse({
      house: house._id,
      user: req.auth._id,
      customizations: {
        crest: `${house.name}.png`,
      },
    });
    console.log(newUserHouse);
    const savedHouse = await newUserHouse
      .save()
      .then((house) => house.populate("house"));
    // await newUserHouse.populate("user", "username").exec();
    res.status(201).send(savedHouse);
  } catch (error) {
    console.log(error);
  }
});

// userHouseRouter.post("/", async (req, res, next) => {
//   try {
//     const house = await House.findOne({ name: req.body.house });
//     if (!house) {
//       return res.status(404).send({ error: "house not found" });
//     }
//     const userHouse = await UserHouse.findOne({ house: house._id });
//     if (!!userHouse) {
//       return res.status(404).send({ error: "house already in favorites" });
//     }

//     const imageUrl = req.body.crest; // Assuming the URL is passed in the request body
//     const imagePath = path.resolve(
//       __dirname,
//       "../public/images",
//       `${house.name}.png`
//     );

//     // Download and save the image
//     const response = await axios({
//       url: imageUrl,
//       method: "GET",
//       responseType: "stream",
//     });
//     response.data.pipe(fs.createWriteStream(imagePath));

//     const newUserHouse = new UserHouse({
//       house: house._id,
//       user: req.auth._id,
//       customizations: req.body.customizations,
//       crestPath: `/images/${house.name}.png`, // Save the local path to the image
//     });
//     const savedHouse = await newUserHouse
//       .save()
//       .then((house) => house.populate("house"));
//     res.status(201).send(savedHouse);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error.message);
//   }
// });

userHouseRouter.delete("/:id", async (req, res, next) => {
  const userHouse = await UserHouse.findByIdAndDelete(req.params.id);
  // delete file from images
  fs.unlink(
    path.resolve(
      __dirname,
      `../public/images/${userHouse.customizations.crest}`
    ),
    (err) => {
      console.log(err);
    }
  );
  res.status(204).send(req.params.id);
});

module.exports = userHouseRouter;
