import db from "../models";
import {Message, Room} from "../interfaces/chat";
// @ts-ignore
const {Participant, Room, User, Message} = db;

export const getUserRooms = async (userId: number): Promise<Room[]> => {
	return Room.findAll({
		include: [
			{
				model: User,
				as: "users",
				where: {
					id: userId
				},
				through: {
					attributes: []
				},
				attributes: []
			},
			{
				model: Message,
				as: "preview",
				where: {
					id: await Message.max("id")
				},
				include: {
					model: User,
					as: "user"
				},
				attributes: ["id", "body", "created_at"]
			}
		],
	});
};

export const getRoomWithMessages = (roomId: number): Promise<Room> => {
	return Room.findOne({
		where: {
			id: roomId
		},
		include: [
			{
				model: Message,
				as: "messages",
				attributes: ["id", "body", "created_at"],
				include: {
					model: User,
					as: "user",
				}
			},
			{
				model: User,
				as: "users",
			}
		],
		attributes: ["id", "name", "photo", "created_at"]
	});
};

export const addMessage = (messageData: object): Promise<Message> => {
	return Message.create(messageData, {
		include: {
			model: User,
			as: "user"
		}
	});
};

export const find = (predicate: object): Promise<Message> => {
	return Message.findOne({
		where: predicate,
		include: {
			model: User,
			as: "user"
		},
		attributes: ["id", "body"]
	});
};
