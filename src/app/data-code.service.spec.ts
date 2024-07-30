import { TestBed } from '@angular/core/testing';

import { DataCodeService } from './data-code.service';

describe('DataCodeService', () => {
  let service: DataCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
