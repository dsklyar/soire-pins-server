import { IUser } from "../typeDefs/types/userType";
import { userCollection } from "../data";

export class UserModel {
	public static all(): IUser[] {
		return userCollection.find();
	}
	public static addOne(user: IUser) {
		return userCollection.insert(user);
	}
}