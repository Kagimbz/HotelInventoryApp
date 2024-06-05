import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hotelinvapp-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) { }

  email: string = '';
  password: string = '';

  login() {
    if(this.email === 'admin@gmail.com' && this.password === 'Admin') {
      this.router.navigateByUrl('/rooms');
    }
  }

}
