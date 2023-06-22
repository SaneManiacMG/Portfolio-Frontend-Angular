import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css'],
})
export class LoginComponent implements OnInit {
  loginDetails: Login = new Login();
  user: User = new User();
  rememberMe: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
}
