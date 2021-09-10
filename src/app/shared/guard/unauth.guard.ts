import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate {
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const autentification = localStorage.getItem('userLogin');

    autentification !== null ?
      this.dataService.autentification$.next(true) :
      this.dataService.autentification$.next(false);

    if (autentification !== null) {
      this.router.navigate(['/'])
      return false;
    }


    return true;
  }

}
