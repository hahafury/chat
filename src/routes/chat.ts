import * as chatController from "../controllers/chat";
import {Router} from "express";
import checkToken from "../middlewares/check-token";

export default (router: Router): void => {
	router.get(
		'/rooms',
		checkToken,
		chatController.getUserRooms
	);

	router.get(
		'/room',
		checkToken,
		chatController.getRoom
	);

	router.post(
		'/message',
		checkToken,
		chatController.addMessage
	);
};
