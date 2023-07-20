import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 15 CRUD example';
  isLoggedIn: boolean = false;
  loginStatus: 'none' | 'loading' | 'success' | 'failure' = 'none';
  LogCash: 'none' | 'loading' | 'success' | 'failure' = 'none';
  
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.LogCash = localStorage.getItem('isLoggedIn') === 'true' ? 'success' : 'none';

    this.loginService.loginStatus$.subscribe(status => {
      this.loginStatus = status;
      
      console.log('log cash var')
      console.log(this.LogCash)
      console.log('Login status ')
      console.log(this.loginStatus)
      if (this.loginStatus === 'success' || this.LogCash === 'success') {
        this.loginStatus = 'success'
        this.router.navigateByUrl('/tutorials');
      }else {
        this.router.navigateByUrl('/login');
        this.loginStatus = 'none'
      }
      if (this.LogCash === 'success'){
                

      }
      
      console.log('Dopo le if cash')
      console.log(this.LogCash)
      console.log('Dopo le if status')
      console.log(this.loginStatus)
    });
  }
}
