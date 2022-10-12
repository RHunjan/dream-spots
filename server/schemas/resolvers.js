const { AuthenticationError } = require("apollo-server-express");
const { User, Spot } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("spots");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    helloWorld: () => {
      return "Hello purple world!";
    },
    spots: async () => {
      return Spot.find();
    },
    // users
    users: async () => {
      return User.find().select("-__v -password").populate("spots");
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    //admin to add vacation spots
    addSpot: async (parent, args) => {
      const spot = await Spot.create(args);

      return spot;
    },

    //user adds dream spot to profile
    addDreamSpot: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id  },
          { $addToSet: { spots: _id } },
          { new: true }
        ).populate("spots");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    //admin remove dream spot
    removeDreamSpot: async (parent, { _id }) => {
      return await Spot.findOneAndRemove({ _id });
    },

    //user remove user

    deleteUser: async (parent, { _id }, context) => {
      if (context.user) {
        return await User.findOneAndRemove({ _id });
      }
    },

    // user remove spot
    removeSpotUser: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { spots: _id } },
          { new: true }
        ).populate("spots");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
