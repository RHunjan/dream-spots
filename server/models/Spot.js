const { Schema, model } = require("mongoose");

const spotSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  treat: {
    type: String,
  },
});

const Spot = model("Spot", spotSchema);
module.exports = Spot;
