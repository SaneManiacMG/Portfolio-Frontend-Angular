import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-tabs',
  templateUrl: './login-tabs.component.html',
  styleUrls: ['../../app.component.css'],
})
export class LoginTabsComponent implements OnInit {
  loginTab: boolean = true;

  switchToLogin() {
    this.loginTab = true;
  }

  switchToRegister() {
    this.loginTab = false;
  }

  constructor() {}

  ngOnInit(): void {}
}
