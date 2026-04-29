import { TestBed } from '@angular/core/testing';
import { FilterService } from './filter';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update the search term when announceSearch is called', () => {
    const testTerm = 'Spaghetti';
    service.announceSearch(testTerm);
    expect(service.announcedSearchRO()).toBe(testTerm);
  });
});
