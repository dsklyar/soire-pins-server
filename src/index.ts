import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import {
	ExtractJwt,
	Strategy,
	StrategyOptions,
	VerifiedCallback
} from "passport-jwt";

import { loki } from "./data";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

dotenv.config();

const { SERVER_PORT, GRAPHQL_PATH, JWT_SECRET } = process.env;

const jwtParams: StrategyOptions = {
	secretOrKey: JWT_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(
	jwtParams,
	(req: express.Request, payload: any, done: VerifiedCallback) => {
		// const user = users.find(user => user.id === payload.id) || null
		console.log(payload);
		return done(null, null); // user);
	}
);

passport.use(strategy);

const app = express();

passport.initialize();

app.use("/graphql", (req, res, next) => {
	passport.authenticate("jwt", { session: false }, (error, user, info) => {
		if (user) {
			req.user = user;
			console.log(user);
		}
		next();
	})(req, res, next);
});

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({
	user: req.user
})});

server.applyMiddleware({ app });

// start the Express server
app.listen({ port: SERVER_PORT }, () => {
	console.log(
		`server started at http://localhost:${SERVER_PORT}${GRAPHQL_PATH}`
	);
});
