import { TestBed, inject } from '@angular/core/testing';

import { RecipeSiteService } from './recipe-site';

describe('RecipeSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeSiteService]
    });
  });

  it('should be created', inject([RecipeSiteService], (service: RecipeSiteService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the correct recipe site', inject([RecipeSiteService], (service: RecipeSiteService) => {
    expect(service.getRecipeSite()).toBe('https://richardeigenmann.github.io/Rezeptsammlung');
  }));

  it('should return the correct recipes URL', inject([RecipeSiteService], (service: RecipeSiteService) => {
    expect(service.getRecipesUrl()).toBe('https://richardeigenmann.github.io/Rezeptsammlung/recipesutf8.json');
  }));
});
