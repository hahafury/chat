import {Room} from "./chat";

export interface Login {
	email: string;
	password: string;
}

export interface Signup {
	username: string;
	email: string;
	password: string;
	phone: string;
}

export interface AccessTokens {
	accessToken: string;
	refreshToken: string;
}

export interface User {
	id: number;
	username: string;
	password: string;
	email: string;
	phone: string;
	lastRoom: Room;
}

export interface TokenData {
	id: number;
}