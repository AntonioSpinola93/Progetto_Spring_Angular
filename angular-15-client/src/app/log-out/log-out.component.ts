import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.logout(); // Esegui logout appena entri nel componente
  }

  logout() {
    this.loginService.updateLoginStatus('failure');
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']); // Redirect al login
  }
}
