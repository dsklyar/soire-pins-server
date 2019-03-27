import { ISession } from "../typeDefs/types/sessionType";
import { sessionCollection } from "../data";

export class SessionModel {
	public static createSession(newSession: ISession): ISession {
		try {
			return sessionCollection.insert(newSession)
		} catch (e) {
			console.log("Error?");
		}
	}
	public static getSession(ssid: string): ISession | null {
		return sessionCollection.findOne({ ssid })
	}
}