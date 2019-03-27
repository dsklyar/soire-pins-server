import { gql } from "apollo-server";

export enum UserTypeEnum {
	Admin = "ADMIN",
	Moderator = "MODERATOR",
	User = "USER"
}

export interface IUser {
	username: string;
	email: string;
	firstName?: string;
	lastName?: string;
	country?: string;
	profileImg?: string;
	userType: UserTypeEnum
	hash: string;
	_id?: string
}

export interface IUserSignUp {
	username: string;
	email: string;
	password: string;
}

export interface IUserResponse<T> {
	success: boolean;
	error?: string;
	newUser?: T;
}

export const userType = gql`
	type UserResponse {
		success: Boolean!
		error: String
		newUser: User
	}
	type User {
		username: String!
		email: String!
		firstName: String
		lastName: String
		country: String
		profileImg: String
		userType: String
		hash: String!
	}
`;