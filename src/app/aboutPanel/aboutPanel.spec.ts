import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutComponent } from './aboutPanel';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [AboutComponent]
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
    const emailLink = fixture.nativeElement.querySelector('[data-test="richard-email-link"]');
    expect(emailLink).not.toBeNull();
    expect(emailLink.href).toContain('richard.eigenmann@gmail.com');
  });
});
