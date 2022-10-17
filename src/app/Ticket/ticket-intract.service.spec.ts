import { TestBed } from '@angular/core/testing';

import { TicketIntractService } from './ticket-intract.service';

describe('TicketIntractService', () => {
  let service: TicketIntractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketIntractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
