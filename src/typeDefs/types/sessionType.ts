import { gql } from "apollo-server";

export interface ISession {
	id?: string;
	ssid: string;
	userId: string;
	expiresOn: string;
}

export interface ISessionResponse<T> {
	success: boolean;
	error?: string;
	session?: T;
}

export const sessionType = gql`
	type Session {
		ssid: String!
		userId: String!
		expiresOn: String!
	}
`;
