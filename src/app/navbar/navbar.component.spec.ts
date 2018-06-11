import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EncodeURI } from '../shared/encodeUri.pipe';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
  // let sut = {};
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockCategoriesService: any;
  let CATEGORIES: Map<string, Map<string, number>>;
  let mockRouter: any;

  beforeEach(async(() => {
    CATEGORIES = new Map([['Zutaten', new Map([['Zitronen', 5]])]]);
    mockCategoriesService = jasmine.createSpyObj(['getCategories']);
    mockRouter = jasmine.createSpyObj(['transform']);
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, EncodeURI ],
      providers: [
        { provide: CategoriesService, useValue: mockCategoriesService },
        { provide: Router, useValue: mockRouter }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // sut = {};
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  xit('should create', () => {
    mockCategoriesService.getCategories.and.returnValue(of(CATEGORIES));
    fixture.detectChanges();
    // expect(component).toBeTruthy();
    // arrange
    // sut.a = false;

    // act
    // sut.a = true;

    // assert
    // expect(sut.a).toBe(true);
    expect(component).toBeTruthy();
  });

  xit('should have a categories map', () => {
    mockCategoriesService.getCategories.and.returnValue(of(CATEGORIES));

    // runs ngOnInit
    fixture.detectChanges();
    expect(fixture.componentInstance.categoriesPivot.size).toBe(1);
  });

});
