import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuaboutComponent } from './menuabout.component';

describe('MenuaboutComponent', () => {
  let component: MenuaboutComponent;
  let fixture: ComponentFixture<MenuaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuaboutComponent]
    });
    fixture = TestBed.createComponent(MenuaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
