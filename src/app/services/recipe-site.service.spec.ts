import { TestBed, inject } from '@angular/core/testing';

import { RecipeSiteService } from './recipe-site.service';

describe('RecipeSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeSiteService]
    });
  });

  xit('should be created', inject([RecipeSiteService], (service: RecipeSiteService) => {
    expect(service).toBeTruthy();
  }));
});
