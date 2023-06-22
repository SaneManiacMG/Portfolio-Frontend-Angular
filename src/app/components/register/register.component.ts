import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit(): void {}
}
