const { User, Spot } = require("../models");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello purple world!";
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async () => {},

    addSpot: async (parent, args) => {
      const spot = await Spot.create(args);

      return spot;
    },
  },
};

module.exports = resolvers;
