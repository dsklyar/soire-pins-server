import { pinsColelction } from "../data/index";

export class PinModel {
	public static all() {
		return pinsColelction.find();
	}
}
