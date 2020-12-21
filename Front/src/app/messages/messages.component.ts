import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  currentFriend = this.user.friends[0];
  picture: any | undefined;

  constructor(
    private data: DataService,
    private toastr: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  changeCurrentThread(newFriend: any) {
    this.currentFriend = newFriend;
  }

  submitUserProfilePicture() {}

  linkImg(fileName: string) {
    return `http://localhost:3001/${fileName}`;
  }
}
