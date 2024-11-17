import { TestBed, inject } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CategoriesService', () => {
  beforeEach(() => {
     TestBed.configureTestingModule({
    imports: [],
    providers: [CategoriesService, provideHttpClient(withInterceptorsFromDi())]
});
  });

  it('should be created', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));

});
