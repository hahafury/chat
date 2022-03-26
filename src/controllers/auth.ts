import {Request, Response, NextFunction} from "express";
import * as authService from "../services/auth";

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try{
		res.send(
			await authService.signup(req.body)
		);
	} catch (error) {
		next(error);
	}
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try{
		res.send(
			await authService.login(req.body)
		);
	} catch (error) {
		next(error);
	}
};

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		res.send(req.user);
	} catch (error) {
		next(error);
	}
};
