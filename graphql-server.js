const { ApolloServer } = require("apollo-server");
require("dotenv").config();

// types ( query or mutation or subscritions or custom types )
const typeDefs = `
            type Query {
                totalPosts: Int!
            }                
        `;
// resolvers
const resolvers = {
  Query: {
    totalPosts: () => {
      return 32;
    },
  },
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// server
apolloServer.listen(process.env.PORT, () => {
  console.log("Apollo Server running!!!");
});
////////////////////////
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

// usage
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, "./schema")));
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"))
);

/////////////////////////////////////

// imports
const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require("merge-graphql-schemas");

// usage
// typedefs autoloader
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "./typeDefs")));
// resolvers autoloader
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);
