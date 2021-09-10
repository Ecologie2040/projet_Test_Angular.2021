import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [{
    
        id: '2',
        titre: 'Articles',
        icon: 'fas fa-box-open',
        url: '',
          sousMenu: [
            {
              id: '21',
              titre: 'Articles',
              icon: 'fas fa-box-open',
              url: 'articles',
            },
            {
              id: '22',
              titre: 'Account',
              icon: 'fab fa-stack-overflow',
              url: 'account',
            }
        ]
      },
      
];

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  
  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

}

//10
/*
private lastSelectedMenu: Menu | undefined;

constructor(
  private router: Router
) {}

ngOnInit(): void {
}

navigate(menu: Menu): void {
  if(this.lastSelectedMenu) {
    this.lastSelectedMenu.active = false;
    }

  menu.active =true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }

  */