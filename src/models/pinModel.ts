import { pinCollection } from "../data/index";
import { IPin } from "../../src/typeDefs/types/pinType";

export class PinModel {
	public static all(): IPin[] {
		return pinCollection.find();
	}
	public static addOne(pin: IPin) {
		return pinCollection.insert(pin);
	}
}
