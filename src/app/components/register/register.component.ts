import { Component, OnInit } from '@angular/core';
import { UserRequest } from 'src/app/models/requests/user-request';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.css'],
})
export class RegisterComponent implements OnInit {
  user: UserRequest = new UserRequest();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log('Response from Server:\n' + JSON.stringify(data));
      },
      (error) => {
        console.log('Error from server:\n' + error);
      }
    );
  }
}
