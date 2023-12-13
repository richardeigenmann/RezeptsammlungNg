import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuaboutComponent } from './menuabout.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('MenuaboutComponent', () => {
  let component: MenuaboutComponent;
  let fixture: ComponentFixture<MenuaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuaboutComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(MenuaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
