import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

dotenv.config();

const { SERVER_PORT, GRAPHQL_PATH } = process.env;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

// start the Express server
app.listen({ port: SERVER_PORT }, () => {
	console.log(`server started at http://localhost:${SERVER_PORT}${GRAPHQL_PATH}`);
});
