import {NextFunction, Request, Response} from "express";
import * as chatService from "../services/chat";
import ApplicationError from "../errors/application-error";

export const getUserRooms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		res.send(
			await chatService.getUserRooms(req.user.id)
		);
	} catch (error) {
		next(error);
	}
};

export const getRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		if (!req.query.roomId) {
			return next(new ApplicationError('Invalid roomId parameter', 400));
		}
		res.send(
			await chatService.getRoom(req.user.id, parseInt(<string>req.query.roomId))
		);
	} catch (error) {
		next(error);
	}
};

export const addMessage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		res.send(
			await chatService.addMessage(parseInt(<string>req.body.roomId), req.user.id, req.body.messageBody)
		);
	} catch(error) {
		next(error);
	}
};