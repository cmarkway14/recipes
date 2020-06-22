import { TestBed } from '@angular/core/testing';

import { UnitTestsService } from './unit-tests.service';

describe('UnitTestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitTestsService = TestBed.get(UnitTestsService);
    expect(service).toBeTruthy();
  });

  it('should call an api', () => {
    const service: UnitTestsService = TestBed.get(UnitTestsService);

    expect(service.doSomething()).toEqual(true);
  })

});
