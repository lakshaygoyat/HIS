import { TestBed } from '@angular/core/testing';

import { HospitalServicesService } from './hospital-services.service';

describe('HospitalServicesService', () => {
  let service: HospitalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
