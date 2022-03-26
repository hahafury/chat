import * as chatRepository from "../repositories/chat";
import * as userRepository from "../repositories/user";
import {Room, Message} from "../interfaces/chat";

export const getUserRooms = (userId: number): Promise<Room[]> => {
	return chatRepository.getUserRooms(userId);
};

export const getRoom = async (userId: number, roomId: number): Promise<Room> => {
	await userRepository.update(userId, {lastRoomId: roomId});
	return chatRepository.getRoomWithMessages(roomId);
};

export const addMessage = async (roomId: number, userId: number, body: string): Promise<Message> => {
	const {id} = await chatRepository.addMessage({
		roomId,
		userId,
		body
	});
	return chatRepository.find({id});
};