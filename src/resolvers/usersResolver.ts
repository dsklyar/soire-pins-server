import { UserModel } from "../models/index";
import { IUser } from "../typeDefs/types/userType";

export const usersResolvers = {
	Query: {
		getUsers: () => UserModel.all()
	},
	Mutation: {
		addUser: (resolve: IAppResolver<IUser>) => {
			console.log(resolve);
			return UserModel.addOne(resolve.data)
		}
	}
};
