import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetails: Login = new Login();
  rememberMe: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  submitLoginDetails(): void {
    console.log(
      'Login Details:\n' +
        JSON.stringify(this.loginDetails) +
        '\nRemember Me: ' +
        this.rememberMe
    );

    this.loginService.loginUser(this.loginDetails).subscribe(
      (data) => {
        console.log('Response from Server:\n' + JSON.stringify(data.response));
        localStorage.setItem('token', data.response);
      },
      (error) => {
        if (error.status == 401) {
          const errorResponse = error.error.response;
          console.log('Error from server:\n' + errorResponse);
        } else {
          console.log('Error from server:\n' + error);
        }
      }
    );
  }
}
