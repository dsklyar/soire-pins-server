import { PinModel } from "../models/index";

export const pinsResolvers = {
	Query: {
		getPins: () => PinModel.all()
	},
	// Mutation: {
	// 	// addPin: () =>
	// }
};
