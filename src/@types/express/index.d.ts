import {User} from "../../interfaces/auth";

declare module "express-serve-static-core" {
	interface Request {
		user: User;
	}
}