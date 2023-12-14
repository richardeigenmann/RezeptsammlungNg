import { TestBed, inject } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategoriesService', () => {
  beforeEach(() => {
     TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CategoriesService]
    });
  });

  it('should be created', inject([CategoriesService], (service: CategoriesService) => {
    expect(service).toBeTruthy();
  }));

});
