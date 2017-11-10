import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { User } from '../Classes/user';
import { SessionService } from '../Services/session/session.service';


@Component({
  selector: 'bc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  socket: any;
  message: string;
  messageList: Array<string>;
  user: User;


  constructor() {
    this.user = SessionService.getLoggedInUser();
    this.messageList = [];
    this.socket = io('http://localhost:1339/');
    this.socket.on('newmessage', (msg) => {
      this.messageList.push(msg.message);
    });
  }

  sendMessage() {
    console.log('send Message : ' + this.message);
    this.socket.emit('emit', `${this.user.firstname} ${this.user.firstname} : ${this.message}`);
  }

  ngOnInit() {
  }

}
