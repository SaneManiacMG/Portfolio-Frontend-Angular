import { Role } from '../../models/enums/role';

export class UserResponse {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNr: string;
  role: Role;

  constructor() {
    this.userName = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNr = '';
    this.role = Role.Visitor;
  }
}
