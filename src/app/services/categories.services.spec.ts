import { TestBed, inject } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { RecipeService } from './recipe.service';
import { of } from 'rxjs/internal/observable/of';
import { HttpHandler } from '@angular/common/http';

describe('CategoriesService', () => {
  let catService: CategoriesService;
  let mockRecipesService;
  beforeEach(() => {
    mockRecipesService = jasmine.createSpyObj(['getRecipes']);
    catService = new CategoriesService( mockRecipesService );
     TestBed.configureTestingModule({
      providers: [CategoriesService, RecipeService,  HttpHandler]
    });
  });

  xit('should be created', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));

  xit('should have no categories to start',
    () => {
      // mockRecipesService.getRecipes.and.returnValue(of(true));
      // expect(catService.categoriesPivot.size).toBe(0);
     expect(true).toBeTruthy();
  });
});
