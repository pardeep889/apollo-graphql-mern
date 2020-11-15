const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

require("dotenv").config();

const app = express();
// types ( query or mutation or subscritions or custom types )
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, "./typeDefs")));
// resolvers
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"))
);


// server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// apply middelware method connects apollo server to a specific htto framework (exoress)

apolloServer.applyMiddleware({
  app: app,
});

// server
const httpServer = http.createServer(app);

app.get("/rest", (req, res) => {
  res.send("ok");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port ", process.env.PORT);
  console.log("Apollo Server running at", apolloServer.graphqlPath);

});
