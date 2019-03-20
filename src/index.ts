import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new ApolloServer({ typeDefs, resolvers });

// initialize configuration
dotenv.config();

const app = express();
// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

server.applyMiddleware({ app });

// define a route handler for the default home page
app.get("/", (req, res) => {
	res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
