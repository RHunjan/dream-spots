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
    treat: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    helloWorld: String
    spots: [Spot]
    users: [User]
    user(_id: ID!): User
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addDreamSpot(_id: ID!): User
    removeDreamSpot(_id: ID!): Spot
    deleteUser(_id: ID!): User
    removeSpotUser(_id: ID!): User

    addSpot(
      _id: ID
      city: String
      country: String
      temperature: String
      description: String
      category: String
      image: String
    ): Spot
  }
`;

// export the typeDefs
module.exports = typeDefs;
