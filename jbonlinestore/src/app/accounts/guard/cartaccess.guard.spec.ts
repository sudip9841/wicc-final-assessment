import { TestBed } from '@angular/core/testing';

import { CartaccessGuard } from './cartaccess.guard';

describe('CartaccessGuard', () => {
  let guard: CartaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CartaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
