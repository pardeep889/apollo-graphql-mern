const { gql } = require("apollo-server-express");

const me = () => "Pardeep kumar";

const resolvers = {
    Query: {
      me
    },
  };

  module.exports = resolvers;