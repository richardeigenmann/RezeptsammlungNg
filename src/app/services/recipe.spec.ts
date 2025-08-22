import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipeFetchService';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())]
    });
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
