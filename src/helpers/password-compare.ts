import bcrypt from "bcrypt";

export default async (receivedPassword: string, comparisonPassword: string) => {
	const passwordCompare = await bcrypt.compare(receivedPassword, comparisonPassword);

	if (!passwordCompare) {
		throw new Error('Wrong password');
	}
};