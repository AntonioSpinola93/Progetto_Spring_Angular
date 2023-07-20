import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api'; // Update the URL to ddd the port

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const user = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
