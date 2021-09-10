import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUser, LoginUser, User } from '../../models/user/user';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  login(userLogin: LoginUser): void {
    const listeUsers: User[] = JSON.parse(localStorage.getItem('listUsers'));
    const userIndex = listeUsers?.findIndex(user => user.username === userLogin.username)
    const user = listeUsers?.find(user => user.username === userLogin.username)


    if (userIndex !== -1) {
      if (userLogin.password === user.password) {
        localStorage.setItem('userLogin', JSON.stringify(user));
        this.router.navigate(['/home'])
        this.dataService.autentification$.next(true);
      }
    }
  }

  logout(): void {
    localStorage.removeItem('userLogin')
    this.router.navigate(['/login'])
  }

  createUser(newAccount: CreateUser): void {
    const listUsers: User[] = JSON.parse(localStorage.getItem('listUsers')) || [];
    const userIndex = listUsers?.findIndex(user => user.username === newAccount.username)

    if (userIndex === -1) {
      newAccount.id = listUsers?.length + 1;
      listUsers.push(newAccount as User)

      const userLogin: LoginUser = {
        username: newAccount.username,
        password: newAccount.password
      };


      setTimeout(() => {

        this.login(userLogin);
      }, 500);
    } else {
      alert('Cette utilisateur existe déjà')
    }

    localStorage.setItem('listUsers', JSON.stringify(listUsers))

  }

}
