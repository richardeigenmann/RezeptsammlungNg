import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuaboutComponent } from './menuabout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('MenuaboutComponent', () => {
  let component: MenuaboutComponent;
  let fixture: ComponentFixture<MenuaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
      MenuaboutComponent],
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
