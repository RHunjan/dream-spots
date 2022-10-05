const { Spot } = require("../models");

const resolvers = {
  Query: {
    helloWorld: () => {
      return "Hello purple world!";
    },
  },
  Mutation: {
    addSpot: async (parent, args) => {
      const spot = await Spot.create(args);

      return spot;
    },
  },
};

module.exports = resolvers;
