const { Schema, model } = require("mongoose");

const spotSchema = new Schema({
  _id: {
    type: String,
  },

  city: {
    type: String,
    
  country: {
    type: String,
   
  climate: {
    type: String,
   
  },
  description: {
    type: String,
 
  },
  category: {
    type: String,
 
  },
  image: {
    type: String,
     
  },
  treat: {
    type: String,
  },
});

const Spot = model("Spot", spotSchema);
module.exports = Spot;
