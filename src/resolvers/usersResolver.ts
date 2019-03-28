import { IAppResolver } from ".";
import { UserModel } from "../models/index";
import { IUser, IUserSignIn, IUserSignUp } from "../typeDefs/types/userType";

export const usersResolvers = {
	Query: {
		getUsers: () => UserModel.all()
	},
	Mutation: {
		signUp: (parent: any, data: IUserSignUp, context: any, info: any) => {
			console.debug(data);
			return UserModel.signUp(data);
		},
		signIn: (parent: any, data: IUserSignIn, context: any, info: any) => {
			console.log(data);
			return UserModel.signIn(data.username, data.password);
		}
	}
};
