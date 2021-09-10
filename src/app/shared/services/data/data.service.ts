import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  autentification$ = new BehaviorSubject<boolean>(false);

  constructor() { }
}
