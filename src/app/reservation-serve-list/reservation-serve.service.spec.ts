import { TestBed } from '@angular/core/testing';

import { ReservationServeService } from './reservation-serve.service';

describe('ReservationServeService', () => {
  let service: ReservationServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
