import { TestBed } from '@angular/core/testing';

import { HospitaldbService } from './hospitaldb.service';

describe('HospitaldbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitaldbService = TestBed.get(HospitaldbService);
    expect(service).toBeTruthy();
  });
});
