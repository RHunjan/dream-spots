// const faker = require('faker');
const userSeeds = require("./userSeed.json");
const spotSeeds = require("./spotSeed.json");
const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  try {
    await Spot.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < spotSeeds.length; i++) {
      const { city } = await Spot.create(spotSeeds[i]);
      const user = await User.findOneAndUpdate({
        $addToSet: {
          savedSpots: city,
        },
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
