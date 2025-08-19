import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Navbar } from './navbar';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EncodeURI } from '../shared/encodeUri';
import { CategoriesService } from '../services/categories';
import { Menuabout } from '../menuabout/menuabout';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  let mockCategoriesService: jasmine.SpyObj<CategoriesService>;

  beforeEach(waitForAsync(() => {
    mockCategoriesService = jasmine.createSpyObj('CategoriesService', ['getCategories']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        Navbar,
        EncodeURI, 
        Menuabout
      ],
      providers: [
          { provide: CategoriesService, useValue: mockCategoriesService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});