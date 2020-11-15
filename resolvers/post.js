const { gql } = require("apollo-server-express");

const totalPosts = () => {
    return 42;
}

const resolvers = {
  Query: {
    totalPosts
  },
};

module.exports = resolvers;
