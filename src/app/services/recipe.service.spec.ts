import { TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClient, HttpHandler, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('RecipeService', () => {
  beforeEach(() => {
     let service: RecipeService;
     TestBed.configureTestingModule({
    imports: [],
    providers: [RecipeService, HttpClient, HttpHandler, provideHttpClient(withInterceptorsFromDi())]
});
     service = TestBed.inject(RecipeService);
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
