import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrivacyPanelComponent } from './privacyPanel';

describe('PrivacyPanelComponent', () => {
  let component: PrivacyPanelComponent;
  let fixture: ComponentFixture<PrivacyPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [PrivacyPanelComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPanelComponent);
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
