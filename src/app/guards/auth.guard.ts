import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/internal/operators';

import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private auth: AngularFireAuth, private router:Router){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this.auth.authState.pipe(
      take(1),
      switchMap( async ( authState ) => {
        if(authState){
          return true;
        }else {
          console.log("No autenticado");
          this.router.navigate(['login']);
          return false;
        }
      })
    )
  }
}
