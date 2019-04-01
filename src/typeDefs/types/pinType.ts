import { gql } from "apollo-server";

export interface IPin {
	location: string;
	imageUrl?: string;
	title: string;
	description?: string;
	id?: number;
}

export const pinType = gql`
	type Pin {
		location: String!
		imageUrl: String
		title: String!
		description: String
	}
`;
