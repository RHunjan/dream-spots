const { Schema, model } = require("mongoose");

const spotSchema = new Schema({
  _id: {
    type: String,
  },

  city: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
  },
  temperature: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  treat: {
    type: String,
  },
});

const Spot = model("Spot", spotSchema);
module.exports = Spot;
