import {
  ConnectedSocket,
  OnConnect,
  OnDisconnect,
  SocketController,
} from 'socket-controllers';
import { Socket } from 'socket.io';

@SocketController()
export class MainSocketController {
  @OnConnect()
  public connect(@ConnectedSocket() socket: Socket) {
    console.log('Client connected' + socket.id);
  }

  @OnDisconnect()
  public disconnect() {
    console.log('client disconnected');
  }
}
