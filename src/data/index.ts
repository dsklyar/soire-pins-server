import lokiDB from "lokijs";
import { IPin } from "../typeDefs/types/pinType";
import { IUser } from "../typeDefs/types/userType";

export const loki = new lokiDB("db.json", {
	autoload: true,
	autosave: true,
	autosaveInterval: 1000
});

export const pinCollection = loki.addCollection("pins");
export const userCollection = loki.addCollection("users");

const pins = [
	{ location: "", title: "Home", description: "My home is here", imageUrl: "" },
	{ location: "", title: "Work", description: "My home is here", imageUrl: "" },
	{
		location: "",
		title: "Dank Hill",
		description: "My home is here",
		imageUrl: ""
	},
	{ location: "", title: "Dnepr", description: "My home is here", imageUrl: "" }
] as IPin[];

const users = [
	{
		username: "Soire",
		email: "legendw2008@gmail.com",
		country: "Denmark",
		firstName: "Daniel",
		lastName: "Sklyar",
		userType: "ADMIN",
		profileImg: "",
		hash: ""
	}
] as IUser[];

pins.forEach(pin => pinCollection.insert(pin));
users.forEach(user => userCollection.insert(user));