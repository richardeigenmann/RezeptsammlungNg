import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { AboutComponent } from './aboutPanel';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AboutComponent],
    providers: [provideZonelessChangeDetection()]
})
    .compileComponents();
  });

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
