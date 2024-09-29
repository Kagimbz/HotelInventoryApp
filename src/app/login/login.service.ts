import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  static isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor() { }

  login(email: string, password: string) {
    if (email.includes('@gmail.com') && password.length >= 4) {
      LoginService.isLoggedIn = true;
      this.isAdminLoggedIn = true;
    }
  }
}
