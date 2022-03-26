import {AppError} from "../interfaces/base";
import {NextFunction, Request, Response} from "express";

export default (error: AppError, req: Request, res: Response, next: NextFunction) => {
	console.log(error)
	res.status(error.code ?? 500).send(error.message ?? 'Server Error');
};