import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor() { }

  login(email: string, password: string) {
    if(email === 'admin@gmail.com' && password === 'Admin') {
      LoginService.isLoggedIn = true;
      this.isAdminLoggedIn = true;

    } else if (email === 'user@gmail.com' && password === 'User') {
      LoginService.isLoggedIn = true;
    }
  }
}
