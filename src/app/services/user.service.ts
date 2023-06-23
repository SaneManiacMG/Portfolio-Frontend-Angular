import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRequest } from '../models/requests/user-request';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:44338/';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  addUser(user: UserRequest): Observable<any> {
    console.log('Request to server:\n' + JSON.stringify(user));

    return this.http.post(this.apiUrl + 'AddUser', JSON.stringify(user), {
      headers: this.headers,
    });
  }
}
