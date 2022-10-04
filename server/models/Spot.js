const { Schema, model } = require("mongoose");

const spotSchema = new Schema({
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  temperature: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Spot = model("Spot", spotSchema);
module.exports = Spot;
