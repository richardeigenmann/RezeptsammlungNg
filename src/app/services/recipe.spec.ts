import { TestBed } from '@angular/core/testing';

import { RecipeFetchService } from './recipeFetchService';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('RecipeService', () => {
  let service: RecipeFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(RecipeFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
