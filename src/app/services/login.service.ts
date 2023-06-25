import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://localhost:44338/';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  loginUser(loginDetails: any): Observable<any> {
    return this.http.post(this.apiUrl + 'Login', JSON.stringify(loginDetails), {
      headers: this.headers,
    });
  }
}
