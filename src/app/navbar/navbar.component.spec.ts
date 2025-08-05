import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EncodeURI } from '../shared/encodeUri.pipe';
import { CategoriesService } from '../services/categories.service';
import { MenuaboutComponent } from '../menuabout/menuabout.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockCategoriesService: jasmine.SpyObj<CategoriesService>;

  beforeEach(waitForAsync(() => {
    mockCategoriesService = jasmine.createSpyObj('CategoriesService', ['getCategories']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        NavbarComponent, 
        EncodeURI, 
        MenuaboutComponent
      ],
      providers: [
          { provide: CategoriesService, useValue: mockCategoriesService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});