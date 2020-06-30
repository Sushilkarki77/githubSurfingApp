import { TestBed } from '@angular/core/testing';

import { MarkDownConversionService } from './mark-down-conversion.service';

describe('MarkDownConversionService', () => {
  let service: MarkDownConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkDownConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
