import * as userRepository from "../repositories/user";
import {TokenData, User} from "../interfaces/auth";
import {AccessTokens, Login} from "../interfaces/auth";
import jwtSign from "../helpers/jwt-sign";
import passwordCompare from "../helpers/password-compare";
import jwt from "jsonwebtoken";
import AlreadyExistsError from "../errors/already-exists-error";
import NotFoundError from "../errors/not-found-error";


export const signup = async (signupData: User): Promise<AccessTokens> => {
	const foundUser = await userRepository.find({
		email: signupData.email
	});
	if (foundUser) {
		throw new AlreadyExistsError('User with this login already exists');
	}
	const {id}: User = await userRepository.create(signupData);
	return jwtSign(id);
};

export const login = async (loginData: Login): Promise<AccessTokens> => {
	console.log(loginData)
	const foundUser: User = await userRepository.find({
		email: loginData.email
	});
	if (!foundUser) {
		throw new NotFoundError('User with this email was not found');
	}
	await passwordCompare(loginData.password, foundUser.password);
	return jwtSign(foundUser.id);
};

export const getUser = async (accessTokens: AccessTokens): Promise<User> => {
	const {id} = (jwt.verify(accessTokens.accessToken, process.env.JWT_SECRET as string)) as TokenData;
	return userRepository.find({
		id: id
	});
};