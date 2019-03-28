import lokiDB from "lokijs";
import { IPin } from "../typeDefs/types/pinType";
import { ISession } from "../typeDefs/types/sessionType";
import { IUser } from "../typeDefs/types/userType";

const adapter = new lokiDB.LokiFsAdapter();
const databaseInitialize = () => {
	console.log("Database Initialized");
};

const databaseSaved = () => {
	console.log("Database saved");
};

export const loki = new lokiDB("warpDB.json", {
	adapter,
	autoload: true,
	autosave: true,
	autoloadCallback: databaseInitialize,
	autosaveCallback: databaseSaved,
	autosaveInterval: 1000,
	serializationMethod: "pretty"
});

export const pinCollection = loki.addCollection("pins");
export const userCollection = loki.addCollection("users");
export const sessionCollection = loki.addCollection<ISession>("sessions");

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

pins.forEach((pin) => pinCollection.insert(pin));
users.forEach((user) => userCollection.insert(user));
