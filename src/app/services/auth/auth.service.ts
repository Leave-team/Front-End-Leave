import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { AuthData } from '../../models/auth-data';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
 private user: User;
 authChange = new Subject<boolean>();
 login(authData: AuthData) {
this.user = {
  email: authData.email,
  userId: Math.round(Math.random() * 10000).toString()
};
this.authChange.next(true);
this.router.navigate(['/listdemandes']);
 }
 logout() {
this.user = null;
this.authChange.next(false);
this.router.navigate(['/login']);
 }
 isAuth() {
return this.user != null;
 }
 getUser() {
   return {...this.user};
 }
}
