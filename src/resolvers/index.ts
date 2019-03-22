import { IResolvers } from "graphql-tools";
import { pinsResolvers } from "./pinsResolver";
import { usersResolvers } from "./usersResolver";

export interface IAppResolver<T> {
	parent: any;
	data: T;
	context: any;
	info: any;
}

export const resolvers: IResolvers = { ...pinsResolvers, ...usersResolvers };
