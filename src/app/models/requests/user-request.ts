import { Role } from '../enums/role';

export class UserRequest {
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNr?: string;

  constructor() {
    this.userName = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNr = '';
  }
}
