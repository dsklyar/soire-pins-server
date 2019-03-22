import { IUser, IUserResponse } from "../typeDefs/types/userType";
import { userCollection } from "../data";

export class UserModel {
	public static all(): IUser[] {
		return userCollection.find();
	}
	public static addOne(user: IUser): IUserResponse {
		try {
			const newUser = userCollection.insert(user);
			return {
				success: true,
				error: undefined,
				newUser
			};

		} catch (e) {
			return {
				success: false,
				error: e.toString()
			}
		}
	}
}