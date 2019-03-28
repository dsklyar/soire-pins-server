import bcrypt from "bcrypt";
import sid from "shortid";
import { sessionCollection, userCollection } from "../data";
import { ISession, ISessionResponse } from "../typeDefs/types/sessionType";
import {
	IUser,
	IUserResponse,
	IUserSignUp,
	UserTypeEnum
} from "../typeDefs/types/userType";

const SALT_ROUNDS = 12;

export class UserModel {
	public static all(): IUser[] {
		return userCollection.find();
	}

	public static async signUp(
		userSignUp: IUserSignUp
	): Promise<IUserResponse<IUserSignUp>> {
		try {
			const createUser = {
				username: userSignUp.username,
				userType: UserTypeEnum.User,
				email: userSignUp.email,
				hash: await bcrypt.hash(userSignUp.password, SALT_ROUNDS)
			} as IUser;
			const user = userCollection.insert(createUser);
			return {
				success: true,
				error: undefined,
				user
			};
		} catch (e) {
			return {
				success: false,
				error: e.toString()
			};
		}
	}

	public static async signIn(
		username: string,
		password: string
	): Promise<ISessionResponse<ISession>> {
		try {
			const user = userCollection.findOne({ username }) as IUser & LokiObj;
			if (!user) {
				throw new Error(`User not found here`);
			}
			const same = await bcrypt.compare(password, user.hash);
			if (!same) {
				throw new Error(`Password is not matching`);
			}
			const ssid = sid.generate();
			const session = {
				ssid,
				userId: user.$loki.toString(),
				expiresOn: new Date(Date.now() + 3 * 60 * 60 * 100).toString()
			} as ISession;
			const newSession = sessionCollection.insert(session);
			return {
				success: true,
				session: newSession
			};
		} catch (e) {
			return {
				success: false,
				error: e.toString()
			};
		}
	}

	public static logout(ssid: string): ISessionResponse<ISession> {
		try {
			const session = sessionCollection.findOne({ ssid });
			if (!session) {
				throw new Error(`Session was not found here`);
			}
			sessionCollection.remove(session);
			return {
				success: true,
				session
			};
		} catch (e) {
			return {
				success: false,
				error: e.toString()
			};
		}
	}

	public static addOne(user: IUser): IUserResponse<IUser> {
		try {
			const newUser = userCollection.insert(user);
			return {
				success: true,
				error: undefined,
				user: newUser
			};
		} catch (e) {
			return {
				success: false,
				error: e.toString()
			};
		}
	}
}
