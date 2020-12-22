import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
// import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe((data) => {
      console.log(data);
    });
  }
}
