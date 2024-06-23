import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { commentGuard } from './comment.guard';

describe('commentGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => commentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
