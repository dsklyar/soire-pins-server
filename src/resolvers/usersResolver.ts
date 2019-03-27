import { UserModel } from "../models/index";
import { IUser, IUserSignUp } from "../typeDefs/types/userType";
import { IAppResolver } from ".";

export const usersResolvers = {
	Query: {
		getUsers: () => UserModel.all()
	},
	Mutation: {
		signUp: (parent: any, data: IUserSignUp, context: any, info: any) => {
			console.debug(parent, data, context, info);
			return UserModel.signUp(data);
		}
	}
};
