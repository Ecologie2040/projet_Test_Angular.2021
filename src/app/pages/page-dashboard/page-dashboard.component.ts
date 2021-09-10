import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
