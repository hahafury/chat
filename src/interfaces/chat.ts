import {User} from "./auth";

export interface Room {
	id: number;
	name: string;
	type: string;
	preview?: Message;
	messages: Message[];
	createdAt: string;
	updatedAt: string;
}

export interface Message {
	id?: number;
	user: User;
	body: string;
	room?: Room;
	createdAt: string;
	updatedAt: string;
}