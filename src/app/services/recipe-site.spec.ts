import { TestBed, inject } from '@angular/core/testing';

import { RecipeSiteService } from './recipe-site';
import { provideZonelessChangeDetection } from '@angular/core';

describe('RecipeSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        RecipeSiteService
      ]
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
