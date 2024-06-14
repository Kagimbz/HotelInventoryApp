import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'hotelinvapp-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  email: string = '';
  password: string = '';

  login() {
    this.loginService.login(this.email, this.password);

    if(LoginService.isLoggedIn) {
      this.router.navigateByUrl('/rooms');
    }
    
  }

}
