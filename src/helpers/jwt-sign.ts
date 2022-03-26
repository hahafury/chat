import jwt from "jsonwebtoken";
import {AccessTokens} from "../interfaces/auth";

export default (userId: number): AccessTokens => {
	const accessToken = jwt.sign({
			id: userId
		},
		process.env.JWT_SECRET as string,
		{
			expiresIn: parseInt(process.env.JWT_REFRESH_TIME as string)
		}
	)
	const refreshToken = jwt.sign({
			id: userId
		},
		process.env.JWT_SECRET as string,
		{
			expiresIn: parseInt(process.env.JWT_REFRESH_TIME as string) + 86400
		}
	)

	return {accessToken, refreshToken}
}