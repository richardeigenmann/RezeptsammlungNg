import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navabout } from './navabout';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';


describe('Navabout', () => {
  let component: Navabout;
  let fixture: ComponentFixture<Navabout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
      Navabout],
    providers: [provideZonelessChangeDetection()],
    schemas: [NO_ERRORS_SCHEMA]
});
    fixture = TestBed.createComponent(Navabout);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
