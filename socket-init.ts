import { Server } from "socket.io";
import http from "http";
import WebSocket from "./src/socket";

const cors = {
	origin: '*',
};

export default (httpServer: http.Server) => {
	console.log(12321321);
	const io = new Server(httpServer, { cors });
	new WebSocket().init(io);
	return io;
};
