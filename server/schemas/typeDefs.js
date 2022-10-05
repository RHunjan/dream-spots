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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    helloWorld: String
    spots: [Spot]
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addSpot(
      spotId: ID
      city: String
      country: String
      temperature: String
      description: String
      image: String
    ): Spot
  }
`;

// export the typeDefs
module.exports = typeDefs;
