
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { SimpleRecipeListComponent } from '../simple-recipe-list/simple-recipe-list.component';


describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent, SimpleRecipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
