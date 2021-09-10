import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../shared/models/user/user';
import { AuthService } from '../shared/services/auth/auth.service';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'username', 'password', 'email'];
  dataSource: MatTableDataSource<User>;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }



  logout(): void {
    this.authService.logout();
  }

  private getUsers(): void {
    const users = this.userService.getUsers();
    console.log(users);
    this.dataSource = new MatTableDataSource(users)
  }
}
