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
});
