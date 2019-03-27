import passport from "passport";
import {
	ExtractJwt,
	Strategy,
	StrategyOptions,
	VerifiedCallback
} from "passport-jwt";
import dotenv from "dotenv";
// import User from "./../models/user";

dotenv.config();
const { JWT_SECRET } = process.env;

function setupJWTStrategy() {
	const jwtParams: StrategyOptions = {
		secretOrKey: JWT_SECRET,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	};
	
	const strategy = new Strategy(
		jwtParams,
		(req: any, payload: any, done: VerifiedCallback) => {
			try {
				
			} catch (e) {
				done(e);
			}
		}
	);

	passport.use(strategy);
}

export default function() {
	setupJWTStrategy();
}
