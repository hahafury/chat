import {NextFunction, Request, Response} from "express";
import {getUser} from "../services/auth";
import TokenError from "../errors/token-error";

export default async (req: Request, res: Response, next: NextFunction) => {
	if (!req.headers.authorization) {
		return next(new TokenError('Token was not found'));
	}
	try {
		const authorizationTokens = JSON.parse(req.headers.authorization);
		console.log(authorizationTokens);
		req.user = await getUser(authorizationTokens);
		next();
	} catch (error) {
		next(error)
	}
};