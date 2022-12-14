const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

// import schema from Spots.js
const spotSchema = require("./Spot");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedSpots to be an array of data that adheres to the spotsSchema
    spots: [
      {
        type: Schema.Types.ObjectId,
        ref: "Spot",
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `spotsCount` with the number of saved spots we have
userSchema.virtual("spotsCount").get(function () {
  return this.savedSpots.length;
});

const User = model("User", userSchema);

module.exports = User;
