import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EncodeURI } from '../shared/encodeUri.pipe';
import { CategoriesService } from '../services/categories.service';
import { MenuaboutComponent } from '../menuabout/menuabout.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockCategoriesService: any;
  let mockActivatedRoute: any; // Declare mock again

  beforeEach(waitForAsync(() => {
    mockCategoriesService = jasmine.createSpyObj(['getCategories']);
    
    // Explicitly create a mock ActivatedRoute object
    mockActivatedRoute = {
      paramMap: of({ get: (key: string) => 'test-param' }),
      snapshot: { paramMap: { get: (key: string) => 'test-param' } }
      // Add other properties if needed
    };

    TestBed.configureTestingModule({
      imports: [
        // Use RouterTestingModule.withRoutes() for router directives
        RouterTestingModule.withRoutes([]),
        NavbarComponent, 
        EncodeURI, 
        MenuaboutComponent
      ],
      providers: [
          { provide: CategoriesService, useValue: mockCategoriesService },
          // Explicitly provide the ActivatedRoute mock to ensure it's available
          { provide: ActivatedRoute, useValue: mockActivatedRoute }
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