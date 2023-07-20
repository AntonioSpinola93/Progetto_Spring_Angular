import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginStatusSubject: BehaviorSubject<'none' | 'loading' | 'success' | 'failure'> = new BehaviorSubject<'none' | 'loading' | 'success' | 'failure'>('none');
  loginStatus$ = this.loginStatusSubject.asObservable();

  updateLoginStatus(status: 'none' | 'loading' | 'success' | 'failure') {
    this.loginStatusSubject.next(status);
  }
}
