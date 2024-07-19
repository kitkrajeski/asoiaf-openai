const express = require("express");
const housesRouter = express.Router();
const House = require("../models/house.js");
const { prompt } = require("../prompts.js");

// housesRouter.get('/', (req, res) => {
//     res.send('hello from the houses api');
// });

housesRouter.get("/random", async (req, res) => {
  try {
    const housesWithCrests = await House.find({
      coatOfArms: { $exists: true, $ne: "" },
    });
    const randomInt = Math.floor(Math.random() * housesWithCrests.length);
    const randomHouse = housesWithCrests[randomInt].toObject();
    const crest = await prompt(randomHouse.coatOfArms);
    randomHouse.crest = crest;
    res.status(200).send(randomHouse);
    console.log(crest);
  } catch (error) {
    res.status(500).send(error);
  }
});

housesRouter.post("/", async (req, res, next) => {
  try {
    const newHouse = new House(req.body);
    await newHouse.save();
    res.status(201).send(newHouse);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = housesRouter;
