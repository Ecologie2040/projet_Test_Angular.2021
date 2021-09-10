import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem('listUsers')) as User[];
  }
}
