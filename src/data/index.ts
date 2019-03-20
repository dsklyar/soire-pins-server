import lokiDB from "lokijs";
import { IPin } from "../typeDefs/types/pinType";

export const loki = new lokiDB("db.json");

export const pinsColelction = loki.addCollection("pins");

export const pins = [
	{ location: "", title: "Home", description: "My home is here", imageUrl: "" },
	{ location: "", title: "Work", description: "My home is here", imageUrl: "" },
	{ location: "", title: "Dank Hill", description: "My home is here", imageUrl: "" },
	{ location: "", title: "Dnepr", description: "My home is here", imageUrl: "" },
] as IPin[];

pins.forEach((pin) => pinsColelction.insert(pin));
