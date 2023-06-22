import { Component, OnInit } from '@angular/core';
import { PasswordManagerService } from 'src/app/services/password-manager.service';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['../../app.component.css'],
})
export class PasswordManagerComponent implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private passwordManagerService: PasswordManagerService) {}

  ngOnInit(): void {}
}
