import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const login2Guard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  return LoginService.isLoggedIn ? true : router.navigate(['/login']);
};
