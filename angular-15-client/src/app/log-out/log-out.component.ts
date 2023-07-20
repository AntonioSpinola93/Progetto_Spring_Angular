import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {
  constructor(
    private loginService: LoginService
  ) { }
  logout() {
          this.loginService.updateLoginStatus('failure');
          localStorage.removeItem('isLoggedIn');
         }
}
