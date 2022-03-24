import { TestBed } from '@angular/core/testing';

import { FemaleshoesResolver } from './femaleshoes.resolver';

describe('FemaleshoesResolver', () => {
  let resolver: FemaleshoesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FemaleshoesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
