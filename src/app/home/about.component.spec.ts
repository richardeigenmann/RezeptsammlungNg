import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mention Richard and Herbert', () => {
    expect(fixture.nativeElement.querySelector('i').textContent).toContain('Richard Eigenmann und Herbert Eigenmann, 2013');
  });

  it('should show Richards email', () => {
    expect(fixture.nativeElement.querySelectorAll('a')[4].href).toContain('richard.eigenmann@gmail.com');
  });
});
