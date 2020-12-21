import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private kickersSource = new BehaviorSubject(new Array());
  currentkickers = this.kickersSource.asObservable();

  private currentuserSource = new BehaviorSubject(new Object());
  currentuser = this.currentuserSource.asObservable();

  constructor() {}

  changeuser(user: any) {
    this.currentuserSource.next(user);
  }
  changekickers(kickers: any) {
    this.kickersSource.next(kickers);
  }
}
