import { TestBed, inject } from '@angular/core/testing';

import { FilterService } from './filter';

describe('FilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
  });

  it('should be created', inject([FilterService], (service: FilterService) => {
    expect(service).toBeTruthy();
  }));
});
