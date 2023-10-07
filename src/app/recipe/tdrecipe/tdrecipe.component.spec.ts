import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdrecipeComponent } from './tdrecipe.component';

describe('TdrecipeComponent', () => {
  let component: TdrecipeComponent;
  let fixture: ComponentFixture<TdrecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdrecipeComponent]
    });
    fixture = TestBed.createComponent(TdrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
