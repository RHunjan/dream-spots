// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    spots: [Spot]
  }

  type Spot {
    _id: ID
    city: String
    country: String
    temperature: String
    description: String
    category: String
    image: String
  }

  type Query {
    helloWorld: String
  }

  type Mutation {
    addSpot(
      city: String
      country: String
      temperature: String
      category: String
      description: String
      image: String
    ): Spot
  }
`;

// export the typeDefs
module.exports = typeDefs;
