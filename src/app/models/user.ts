import { Role } from './enums/role';

export class User {
  userId?: number;
  userName: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phoneNr?: string;
  role: Role;

  constructor() {
    this.userId = 0;
    this.userName = '';
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNr = '';
    this.role = Role.Visitor;
  }
}
