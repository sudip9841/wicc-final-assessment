import { TestBed } from '@angular/core/testing';

import { MaleshoesResolver } from './maleshoes.resolver';

describe('MaleshoesResolver', () => {
  let resolver: MaleshoesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MaleshoesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
