import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  isAuth: boolean;
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const isAuth = localStorage.getItem('userLogin');
    console.log(isAuth);

    isAuth !== null ?
      this.dataService.autentification$.next(true) :
      this.dataService.autentification$.next(false);

    if (isAuth === null) {
      this.router.navigate(['/login'])
      return false;
    }

    return true;
  }



}
