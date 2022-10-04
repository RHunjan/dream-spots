const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedSpots` array in User.js
const spotSchema = new Schema({
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  temperature: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
  },
});

const Spot = model("Spot", spotSchema);
module.exports = Spot;
