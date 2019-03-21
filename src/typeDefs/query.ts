import { gql } from "apollo-server";

export const query = gql`
	type Query {
		getPins: [Pin]
		getUsers: [User]
	}
	type Mutation {
		addUser(
			username: String!, 
			email: String!,
			firstName: String,
			lastName: String,
			country:String,
			profileImage: String,
			userType: String!,
			hash: String!): UserResponse
	}
`;
