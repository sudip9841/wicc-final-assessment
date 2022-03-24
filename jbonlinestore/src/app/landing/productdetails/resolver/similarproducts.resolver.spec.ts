import { TestBed } from '@angular/core/testing';

import { SimilarproductsResolver } from './similarproducts.resolver';

describe('SimilarproductsResolver', () => {
  let resolver: SimilarproductsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SimilarproductsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
