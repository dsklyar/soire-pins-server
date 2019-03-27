import { gql } from "apollo-server";

export const query = gql`
	type Query {
		getPins: [Pin]
		getUsers: [User]
	}
	type Mutation {
		signUp(
			username: String!, 
			email: String!,
			password: String!): UserResponse
	}
`;
