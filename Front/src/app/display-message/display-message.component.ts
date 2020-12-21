import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss'],
})
export class DisplayMessageComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  @Input() currentFriend: User | any;
  message: string = '';
  diplayedMessages: [] | undefined;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.messages.subscribe((msg) => {
      console.log(msg);
    });
  }

  sendMessage() {
    // push the message to the server via socket.io
    // we need to tweak the polling to get messages from DB
    let newMsg = new Message();
    newMsg.message = this.message;
    newMsg.receiverId = this.currentFriend._id;
    newMsg.senderId = this.user._id;
    this.chatService.sendMsg(newMsg);
    this.message = '';
  }
}
