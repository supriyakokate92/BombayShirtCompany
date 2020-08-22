import { TestBed } from '@angular/core/testing';

import { BscTableService } from './bsc-table.service';

describe('BscTableService', () => {
  let service: BscTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BscTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
