

class WebSocket {
	public io: any;

	init(io: any) {
		this.io = io;
		this.listen();
	}

	listen() {
		this.io.on('connection', (socket: any) => {
			console.log("JOIN")
			this.onJoin(socket)
		})
	}

	onJoin(socket: any) {
		socket.on("join", (room: any) => {
			socket.join(room)
			this.io.to(room).emit('rooms', `CONNECTED TO ROOM #${room}`)
		})
	}
}

export default WebSocket;