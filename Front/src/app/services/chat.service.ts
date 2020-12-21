import { Injectable } from '@angular/core';
import { WebsocketService } from './web-socket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {
  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.messages = <Subject<any>>(
      wsService.connect().map((response: any): any => {
        console.log(response)
        return response;
      })
    );
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: any) {
    this.messages.next(msg);
  }
}
