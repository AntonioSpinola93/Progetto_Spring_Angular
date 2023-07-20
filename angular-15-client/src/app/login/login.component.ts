import { Component } from '@angular/core';
import { AuthService } from '../services/AuthService';
import { Login } from '../models/login.model';
import { LoginControllerService } from '../services/login-controller.service';
import { User } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()" #loginForm="ngForm" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" [(ngModel)]="loginData.username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" [(ngModel)]="loginData.password" required>
      </div>
      <button type="submit" [disabled]="!loginForm.form.valid" class="btn btn-primary">Login</button>
    </form>

    <div *ngIf="loginStatus === 'success'" class="success-message">
      Login successful!
    </div>
    
    <div *ngIf="loginStatus === 'failure'" class="error-message">
      Login failed. Please check your credentials.
    </div>
  `
})
export class LoginComponent {
  loginData: Login = { username: '', password: '' };
  loginStatus: 'none' | 'loading' | 'success' | 'failure' = 'none';
  loginErrorMessage: boolean = false;

//  constructor(private authService: AuthService, private loginControllerService: LoginControllerService) { }
constructor(
  private authService: AuthService,
  private loginControllerService: LoginControllerService,
  private loginService: LoginService
) { }

  login() {
    //this.loginStatus = 'loading';
    this.loginService.updateLoginStatus('loading');

    const user: User = {
      username: this.loginData.username,
      password: this.loginData.password
    };

    this.loginControllerService.loginUserUsingPost({ user: user })
      .subscribe(
        () => {
          // Login success
          //this.loginStatus = 'success';
          this.loginService.updateLoginStatus('success');
          localStorage.setItem('isLoggedIn', 'true');

          this.loginErrorMessage = false;
          
          // Perform other desired actions
        },
        (error: HttpErrorResponse) => {
          // Login failed, handle the error
          if (error.error === 'Invalid username or password') {
            //this.loginStatus = 'failure';
            this.loginService.updateLoginStatus('failure');
            
            this.loginErrorMessage = true;
          } else {
            console.error(error);
            // Handle other error scenarios if needed
          }
        }
      );
  }
}
