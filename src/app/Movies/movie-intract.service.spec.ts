import { TestBed } from '@angular/core/testing';

import { MovieIntractService } from './movie-intract.service';

describe('MovieIntractService', () => {
  let service: MovieIntractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieIntractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
