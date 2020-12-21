import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user') || '{}');
  friends = this.user.friends;
  invitations = this.user.invitations;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    console.log(this.invitations);
  }
}
