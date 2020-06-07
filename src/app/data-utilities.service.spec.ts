import { TestBed } from '@angular/core/testing';

import { DataUtilitiesService } from './data-utilities.service';

describe('DataUtilitiesService', () => {
  let service: DataUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
