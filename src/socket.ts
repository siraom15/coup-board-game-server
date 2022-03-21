import { Server as HttpServer } from 'http';
import { useSocketServer } from 'socket-controllers';
import { Server as SocketServer } from 'socket.io';
import { MainSocketController } from './socket-controllers/main.socket-controller';
import path from 'path';
import { RoomSocketController } from './socket-controllers/room.socket-controller';
import { GameSocketController } from './socket-controllers/game.socket-controller';

export default function (httpServer: HttpServer) {
  const io: SocketServer = new SocketServer(httpServer, {
    cors: {
      origin: '*',
    },
  });
  useSocketServer(io, {
    controllers: [
      MainSocketController,
      RoomSocketController,
      GameSocketController,
    ],
  });
  return io;
}
