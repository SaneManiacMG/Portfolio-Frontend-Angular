import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['../../app.component.css'],
})
export class PasswordManagerComponent implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor() {}

  ngOnInit(): void {}
}
