import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { login2Guard } from './login2.guard';

describe('login2Guard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => login2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
