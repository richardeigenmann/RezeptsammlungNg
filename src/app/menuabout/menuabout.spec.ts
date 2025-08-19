import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menuabout } from './menuabout';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('MenuaboutComponent', () => {
  let component: Menuabout;
  let fixture: ComponentFixture<Menuabout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
      Menuabout],
    schemas: [NO_ERRORS_SCHEMA]
});
    fixture = TestBed.createComponent(Menuabout);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
