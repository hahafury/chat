import hashPassword from "../middlewares/hash-password";
import * as authController from "../controllers/auth";
import express, {Router} from "express";
import checkToken from "../middlewares/check-token";

export default (router: Router): void => {
	router.post(
		'/signup',
		hashPassword,
		authController.signup
	);

	router.post(
		'/login',
		authController.login
	);

	router.get(
		'/user',
		checkToken,
		authController.getUser
	);
};
