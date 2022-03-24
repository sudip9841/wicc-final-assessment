import { TestBed } from '@angular/core/testing';

import { ProductdetailsResolver } from './productdetails.resolver';

describe('ProductdetailsResolver', () => {
  let resolver: ProductdetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductdetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
