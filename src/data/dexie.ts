import Dexie from "dexie";
import { IPin } from "../typeDefs/types/pinType";
import { ISession } from "../typeDefs/types/sessionType";
import { IUser } from "../typeDefs/types/userType";

// Reference https://dexie.org/docs/Typescript

export class Database extends Dexie {
  public pins: Dexie.Table<IPin, number>;
  public users: Dexie.Table<IUser, number>;
  public sessions: Dexie.Table<ISession, number>;
  constructor() {
		super("Database");
		this.version(1).stores({
			pins: "++id, location, imageUrl, title, description",
			users: "++id, username, email, firstName, lastName, country, profileImg, hash",
			sessions: "++id, ssid, userId, expiresOn"
		});
		this.pins = this.table("pins");
		this.users = this.table("users");
		this.sessions = this.table("sessions");
  }
}
