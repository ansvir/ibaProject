import { TestBed } from '@angular/core/testing';

import { GetServiceResolver } from './getservice.resolver.service';

describe('Terminal.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetServiceResolver = TestBed.get(GetServiceResolver);
    expect(service).toBeTruthy();
  });
});
