import { Component } from '@angular/core';

@Component({
  selector: 'hotelinvapp-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  login() {
    if(this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Login Successful');
    }
  }

}
