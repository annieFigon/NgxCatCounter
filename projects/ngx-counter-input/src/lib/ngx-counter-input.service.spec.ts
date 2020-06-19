import { TestBed } from '@angular/core/testing';

import { NgxCounterInputService } from './ngx-counter-input.service';

describe('NgxCounterInputService', () => {
  let service: NgxCounterInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCounterInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
