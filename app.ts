import dotenv from "dotenv";
dotenv.config({path: "./.env"})
import express, {Express} from "express";
import http from "http";
import router from "./src/routes";
import cors from "cors";
import errorHandler from "./src/middlewares/error-handler";
import socketInit from "./socket-init";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api/' + `v${process.env.API_VERSION}`, router);
app.use(errorHandler);

const server: http.Server = http.createServer(app);

server.listen(4000, () => {
	console.log('started');
});

export const io = socketInit(server);