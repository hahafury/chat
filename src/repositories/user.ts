import db from "../models";
import {User} from "../interfaces/auth";
// @ts-ignore
const {User} = db;

export const create = (newUserData: User): Promise<User> => {
	return User.create(newUserData);
};

export const find = (predicate: object): Promise<User> => {
	return User.findOne({
		where: predicate
	});
};

export const update = (userId: number, data: object): Promise<User> => {
	return User.update(data, {
		where: {id: userId}
	});
};