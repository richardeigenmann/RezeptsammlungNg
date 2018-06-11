import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyComponent } from './privacy.component';

describe('PrivacyComponent', () => {
  let component: PrivacyComponent;
  let fixture: ComponentFixture<PrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title of Privacy Policy', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toContain('Privacy Policy');
  });

  it('should show Richards email', () => {
    expect(fixture.nativeElement.querySelectorAll('a')[1].href).toContain('richard.eigenmann@gmail.com');
  });

});
