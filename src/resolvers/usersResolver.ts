import { UserModel } from "../models/index";
import { IUser } from "../typeDefs/types/userType";
import { IAppResolver } from ".";

export const usersResolvers = {
	Query: {
		getUsers: () => UserModel.all()
	},
	Mutation: {
		addUser: (parent: any, data: IUser, context: any, info: any) => {
			console.debug(parent, data, context, info);
			return UserModel.addOne(data);
		}
	}
};
