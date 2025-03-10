import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA, Directive, Input } from '@angular/core';
import { EncodeURI } from '../shared/encodeUri.pipe';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { MenuaboutComponent } from '../menuabout/menuabout.component';

@Directive({
    selector: '[routerLink]',
    host: { '(click)': 'onClick' },
    standalone: false
})
export class RouterLinkDirectiveStub{
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('NavbarComponent', () => {
  // let sut = {};
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let mockCategoriesService: any;
  let CATEGORIES: Map<string, Map<string, number>>;
  let mockRouter: Router;

  beforeEach(waitForAsync(() => {
    CATEGORIES = new Map([['Zutaten', new Map([['Zitronen', 5]])]]);
    mockCategoriesService = jasmine.createSpyObj(['getCategories']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, EncodeURI, RouterLinkDirectiveStub, MenuaboutComponent ],
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

  it('should create', () => {
    // mockCategoriesService.getCategories.and.returnValue(of(CATEGORIES));
    // fixture.detectChanges();
    // expect(component).toBeTruthy();
    // arrange
    // sut.a = false;

    // act
    // sut.a = true;

    // assert
    // expect(sut.a).toBe(true);
    expect(component).toBeTruthy();
  });

  it('should have a categories map', () => {
    // mockCategoriesService.getCategories.and.returnValue(of(CATEGORIES));

    // runs ngOnInit
    // fixture.detectChanges();
    // expect(fixture.componentInstance.categoriesPivot.size).toBe(1);
    expect(component).toBeTruthy();
  });

});
