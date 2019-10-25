import { TestBed } from '@angular/core/testing';

import { NgxSimpleSelectService } from './ngx-simple-select.service';

describe('NgxSimpleSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSimpleSelectService = TestBed.get(NgxSimpleSelectService);
    expect(service).toBeTruthy();
  });
});
