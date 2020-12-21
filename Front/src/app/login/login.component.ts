import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginError: boolean = false;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  user: User = new User();
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  OnSubmitLogin(email: any, password: any) {
    this.userService.userAuthentification(email, password).subscribe(
      (data: any) => {
        if (data.success) {
          this.userService.storeUserData(data.jwt, data.user);
          this.toastr.success('Awesome!', 'You are logged in!', {
            timeOut: 4000,
          });
          this.router.navigate(['/']);
        } else {
          this.isLoginError = true;
          if (data.errors.email) {
            this.toastr.error('Oops!', data.errors.email, {
              timeOut: 4000,
            });
          } else {
            this.toastr.error('Oops!', data.errors.password, {
              timeOut: 4000,
            });
          }
        }
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      }
    );
  }

  OnSubmit(form: NgForm) {
    console.log(form);
    this.userService.registerUser(form.value).subscribe((data: any) => {
      console.log(data);
      if (data.success == true) {
        this.resetForm(form);
        this.toastr.success('Awesome!', 'Welcome to ADN²', {
          timeOut: 4000,
        });
        this.router.navigate(['/']);
      } else {
        this.toastr.error('Error -', data.errors);
      }
    });
  }
  // this function is used to empty out the registration form, in case we want to ask something
  // from the new user before redirecting them somwhere else. Like verify their account..
  resetForm(form?: NgForm) {
    if (form != null) form.reset();
    this.user = {
      email: '',
      username: '',
      password: '',
      kickers: [''],
      kicked: [''],
      bio: '',
      stars: [''],
    };
  }
}
