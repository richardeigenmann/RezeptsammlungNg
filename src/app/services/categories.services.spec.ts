import { TestBed, inject } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { RecipeService } from './recipe.service';

describe('CategoriesService', () => {
  // let service: CategoriesService;
  beforeEach(() => {
    // service = new CategoriesService(new RecipeService() );
    /* TestBed.configureTestingModule({
      providers: [CategoriesService]
    }); */
  });

  xit('should be created', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));

  /* it('should have no categories to start', () => {
    expect(service.categoriesPivot.size).toBe(0);
  }); */
});
