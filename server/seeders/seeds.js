const spotSeeds = require("./spotSeed.json");
const db = require("../config/connection");
const { Spot } = require("../models");

db.once("open", async () => {
  try {
    await Spot.deleteMany({});
    await Spot.insertMany(spotSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
