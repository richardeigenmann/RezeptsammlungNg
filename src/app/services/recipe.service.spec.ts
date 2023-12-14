import { TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

describe('RecipeService', () => {
  beforeEach(() => {
     let service: RecipeService;
     TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RecipeService, HttpClient, HttpHandler]
     });
     service = TestBed.get(RecipeService);
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
